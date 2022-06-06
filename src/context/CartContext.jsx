import React, { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    getCartItem();
  }, []);
  const getCartItem = async () => {
    try {
      let res = await axios.get("http://localhost:8080/cartItems");
      // console.log("cart",res.data);
      setCartItem(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log("cartData",cartItem);

  // delete Cart Item
  const handleDeleteCartItem = async (id) => {
    let res = await axios.delete(`http://localhost:8080/cartItems/${id}`);
    // console.log("deleted",res.data);
    getCartItem();
    // setCartItem(res.data);
  };

  const addItemToCart = async (data) => {
    await axios.post(`http://localhost:8080/cartItems`, data);
    getCartItem();
  };
  const updateCount = async (id,value) =>{
    // await axios.patch(`http://localhost:8080/cartItems/${id}`, {count:value});
    // getCartItem();
  }
  return (
    <CartContext.Provider
      value={{
        cardItemCount: cartItem.length,
        handleDeleteCartItem,
        addItemToCart,
        updateCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
