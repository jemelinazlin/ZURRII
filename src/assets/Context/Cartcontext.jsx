import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the cart (no need to export CartContext directly)
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartContext provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [notification, setNotification] = useState(null); // State for notification

  // Load cart and wishlist from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setCart(storedCart);
    setWishlist(storedWishlist);
  }, []);

  // Function to display a notification
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null); // Clear notification after 3 seconds
    }, 3000);
  };

  // Function to add item to cart
  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Persist to localStorage
    showNotification(`${item.title} has been added to the cart!`); // Show notification
  };

  // Function to add item to wishlist
  const addToWishlist = (item) => {
    const updatedWishlist = [...wishlist, item];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Persist to localStorage
    showNotification(`${item.title} has been added to the wishlist!`); // Show notification
  };

  return (
    <CartContext.Provider value={{ cart, wishlist, addToCart, addToWishlist }}>
      {children}
      {notification && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#333',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            zIndex: 1000,
          }}
        >
          {notification}
        </div>
      )}
    </CartContext.Provider>
  );
};
