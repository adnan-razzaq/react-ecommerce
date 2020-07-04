import React, { useContext } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { CartContext } from "../../context/CartProvider";

export default function CartItem(props) {
  const { id, image, title, price, amount } = props;
  console.log(props);

  const { removeItem, increaseAmount, decreaseAmount } = useContext(
    CartContext
  );

  return (
    <article className="cart-item">
      <img src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <h4>${price}</h4>
        <button
          onClick={() => removeItem(id, amount)}
          className="btn btn-primary"
        >
          Remove
        </button>
      </div>
      <div>
        <button
          onClick={() => increaseAmount(id)}
          className="cart-btn amount-btn"
        >
          <FaAngleUp />
        </button>
        <p className="item-amount">{amount}</p>
        <button
          onClick={() => decreaseAmount(id, amount)}
          className="cart-btn amount-btn"
        >
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
}
