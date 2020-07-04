import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";
import Loading from "../Loading";
import ProductList from "./ProductList";

export default function FeaturedProducts() {
  const context = useContext(ProductContext);
  const { loading, featured, products } = context;
  return loading ? (
    <Loading />
  ) : (
    <ProductList title={"Featured"} products={featured} />
  );
}
