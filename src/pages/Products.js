import React, { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import Loading from "../components/Loading";
import ProductList from "../components/Products/ProductList";

export default function Products() {
  const context = useContext(ProductContext);
  const { loading, products } = context;

  return loading ? (
    <Loading />
  ) : (
    <ProductList title="our products" products={products} />
  );
}
