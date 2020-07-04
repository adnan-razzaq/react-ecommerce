import React, { useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";
import { CartContext } from "../context/CartProvider";
import Loading from "../components/Loading";
import { Button } from "@material-ui/core";

export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  //id is of type string
  const product = products.find((item) => item.id === parseInt(id));

  if (products.length === 0) {
    return <Loading />;
  } else {
    const { title, price, description } = product;
    const url = product.image;

    return (
      <section className="single-product">
        <img className="single-product-image" src={url} alt="item" />
        <article>
          <h1>{title}</h1>
          <h2>{price}</h2>
          <p>{description}</p>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              // add to cart functionality
              addToCart(product);
              history.push("/cart");
            }}
          >
            cAdd to cart
          </Button>
        </article>
      </section>
    );
  }
}
