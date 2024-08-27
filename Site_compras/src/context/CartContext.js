// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Cria o contexto
const CartContext = createContext();

// Cria um hook para acessar o contexto
export const useCart = () => {
  return useContext(CartContext);
};

// Provedor do contexto
export const CartProvider = ({ children }) => {
  
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
