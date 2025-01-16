import React from 'react';

const CategoryCard = ({ category, image, title, price, onAddToCart, onAddToWishlist }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6 max-w-sm mx-auto transform transition-transform duration-300 hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-lg mb-4"
      />
      <h5 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h5>
      <p className="text-gray-500 dark:text-gray-300 mb-4">{price}</p>

      <div className="flex flex-col space-y-4">
        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          className="bg-gray-500 text-black py-2 px-4 rounded-md shadow-md hover:bg-gray-300 focus:outline-none transition-colors dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          Add to Cart
        </button>
        {/* Add to Wishlist Button */}
        <button
          onClick={onAddToWishlist}
          className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md shadow-md hover:bg-gray-400 focus:outline-none transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
