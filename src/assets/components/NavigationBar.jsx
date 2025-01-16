// src/components/NavigationBar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/Cartcontext'; // Import useCart hook
import { useTheme } from '../Context/ThemeContext'; // Import the useTheme hook

function NavigationBar() {
  const { cart, wishlist } = useCart();
  const { theme, toggleTheme } = useTheme(); // Access theme and toggle function

  const cartCount = cart.length;
  const wishlistCount = wishlist.length;

  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const catalogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target)) {
        setIsCatalogOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-transparent fixed w-full z-50 top-0 left-0 mt-4 rounded-b-3xl transform -translate-y-1/2 backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <Link to="/" className="text-4xl font-extrabold text-black dark:text-white hover:text-gray-300 transition-all duration-300">
            ZURI TRENDS
          </Link>
          {/* Home link */}
          <Link to="/" className="text-lg text-black dark:text-white hover:text-gray-300 transition-colors duration-300">
            HOME
          </Link>
        </div>

        {/* Catalog Dropdown */}
        <div className="relative inline-block" ref={catalogRef}>
          <button
            onClick={() => setIsCatalogOpen(!isCatalogOpen)}
            className="text-lg font-semibold text-black dark:text-white hover:text-gray-300 transition-colors duration-300"
          >
            Catalog
          </button>
          {isCatalogOpen && (
            <div className="absolute bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-2 w-56 shadow-lg rounded-md mt-2 z-50 border border-gray-100">
              <Link to="/catalog/dresses" className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-all duration-300">Dresses</Link>
              <Link to="/catalog/pants" className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-all duration-300">Pants</Link>
              <Link to="/catalog/shirts" className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-all duration-300">Shirts</Link>
              <Link to="/catalog/jackets" className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-all duration-300">Jackets</Link>
            </div>
          )}
        </div>

        {/* Cart and Wishlist Icons */}
        <div className="flex items-center space-x-10">
          {/* Wishlist Icon */}
          <Link to="/wishlist" className="relative">
            <span className="text-lg text-black dark:text-white hover:text-gray-300 transition-colors duration-300">Wishlist</span>
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <span className="text-lg text-black dark:text-white hover:text-gray-300 transition-colors duration-300">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/about" className="text-lg text-black dark:text-white hover:text-gray-300 transition-colors duration-300">
            AboutUs
          </Link>
          <Link to="/contact" className="text-lg text-black dark:text-white hover:text-gray-300 transition-colors duration-300">
            Contact
          </Link>
        </div>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-white bg-transparent p-2 rounded-full border-2 border-white hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors duration-300"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>
    </div>
  );
}

export default NavigationBar;
