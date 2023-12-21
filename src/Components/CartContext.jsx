// CartContext.jsx
import React, { createContext, useContext, useState } from "react";

// Create a context for managing the shopping cart state and actions
const CartContext = createContext();

// Custom hook to access the CartContext
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

// CartProvider component to wrap your application and provide the cart state and actions
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Context value to be provided to the components
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
