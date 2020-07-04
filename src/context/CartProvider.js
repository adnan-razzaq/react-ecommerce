import React, { useState, useEffect } from "react";
import localcart from "../utils/localCart";

//initial values of cart
const getdata = () => {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
};
export const CartContext = React.createContext();
export default function CartProvider({ children }) {
  const [cart, setcart] = useState(getdata());
  const [total, settotal] = useState(0);
  const [cartitems, setcartitems] = useState(0);

  useEffect(() => {
    //local storage set
    localStorage.setItem("cart", JSON.stringify(cart));
    //cartitems
    let data = cart.reduce((acc, curr) => {
      return (acc += curr.amount);
    }, 0);
    setcartitems(data);
    //cart total
    let price = cart.reduce((acc, curr) => {
      return (acc = acc + curr.amount * curr.price);
    }, 0);
    price = parseFloat(price.toFixed(2));
    settotal(price);
  }, [cart]);

  //remove item
  const removeItem = (id) => {
    const filtered = cart.filter((item) => item.id !== id);
    setcart(filtered);
  };

  //increaseAmount
  const increaseAmount = (id) => {
    const filtered = cart.map((item) => {
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item };
    });
    setcart(filtered);
  };

  //decreaseAmount
  const decreaseAmount = (id, amount) => {
    //if amount is less then one then remove the item from cart
    if (amount === 1) {
      removeItem(id);
      return;
    } else {
      const filtered = cart.map((item) => {
        return item.id === id
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });
      setcart(filtered);
    }
  };

  //add to cart
  const addToCart = (product) => {
    const { id, image, price, title } = product;
    //checking if the product is already in cart
    const item = cart.find((item) => item.id === id);
    //then increase only amount
    if (item) {
      increaseAmount(id);
      return;
    } else {
      const newitem = { id, image, price, title, amount: 1 };
      const newcart = [...cart, newitem];
      setcart(newcart);
    }
  };

  //clear cart
  const clearCart = () => {
    setcart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartitems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
