import React, { useState, useEffect } from "react";
import axios from "axios";
import { featuredProducts, flattenProducts } from "../utils/helpers";
import url from "../utils/URL";

export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  const [loading, setloading] = useState(false);
  const [featured, setfeatured] = useState([]);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    setloading(true);
    axios.get(`${url}/products`).then((res) => {
      // for image fix for strapi
      const featured = featuredProducts(flattenProducts(res.data));
      const products = flattenProducts(res.data);
      console.log(products);

      setproducts(products);
      setfeatured(featured);
      setloading(false);
    });
  }, []);
  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  );
}
