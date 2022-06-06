import React, { createContext,useState } from "react";
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
 
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
