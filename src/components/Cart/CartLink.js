import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";

export default function CartLink() {
  const { cartitems } = useContext(CartContext);
  return (
    <div className="cart-link-container">
      <Link to="/cart">cart</Link>
      <span className="cart-link-total">{cartitems}</span>
    </div>
  );
}
