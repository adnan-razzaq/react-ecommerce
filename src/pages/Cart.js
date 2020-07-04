import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import EmptyCart from "../components/Cart/EmptyCart";
import CartItem from "../components/Cart/CartItem";
import { Link } from "react-router-dom";
export default function Cart() {
  const { cart, total } = useContext(CartContext);

  let user = false;

  return cart.length === 0 ? (
    <EmptyCart />
  ) : (
    <section className="cart-items section">
      <h2>your cart</h2>
      {cart.map((item, index) => (
        <CartItem key={index} {...item} />
      ))}

      <h2>total:{total}</h2>
      {user ? (
        <Link className="btn btn-block btn-primary" to="/checkout">
          Checkout
        </Link>
      ) : (
        <Link className="btn btn-block btn-primary" to="/login">
          Login
        </Link>
      )}
    </section>
  );
}
