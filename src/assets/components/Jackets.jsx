import React, { useState, useEffect, useContext } from 'react';
import CategoryCard from '../components/CategoryCard';
import { useCart } from '../Context/Cartcontext'; 

const CatalogJackets = () => {
  const { cart, wishlist, addToCart, addToWishlist } = useCart();
  const categories = [
    {
      category: 'Leather Jackets',
      jackets: [
        { image: 'https://i.pinimg.com/474x/07/ba/47/07ba47e50aac46fbc3bf2ce96131964b.jpg', title: 'Black Leather Jacket', price: 'KSh 5,000.00' },
        { image: 'https://i.pinimg.com/474x/f7/0e/07/f70e070f848835909ac0813a2c5279f7.jpg', title: 'Brown Leather Jacket', price: 'KSh 5,500.00' },
        { image: 'https://i.pinimg.com/474x/bd/59/22/bd5922b11ed0e06fbbb09c87fdc951c7.jpg', title: 'Red Leather Jacket', price: 'KSh 6,000.00' },
        { image: 'https://i.pinimg.com/474x/2d/d2/7c/2dd27c87e9f0ac7a8b0c01a40b3bfabf.jpg', title: 'Tan Leather Jacket', price: 'KSh 5,200.00' },
        { image: 'https://i.pinimg.com/474x/4c/22/88/4c2288c2ee16ea5bbc3674426150d535.jpg', title: 'Black Leather Jacket', price: 'KSh 5,000.00' },
        { image: 'https://i.pinimg.com/474x/0f/72/49/0f724999c58112c1b2c91bbd503c205d.jpg', title: 'Brown Leather Jacket', price: 'KSh 5,500.00' },
      ],
    },
    {
      category: 'Denim Jackets',
      jackets: [
        { image: 'https://i.pinimg.com/474x/30/3a/ae/303aaed8ca2af64217a3bfcecb072451.jpg', title: 'Blue Denim Jacket', price: 'KSh 3,000.00' },
        { image: 'https://i.pinimg.com/474x/71/a0/f8/71a0f86bbda6bd6c5f6cb68d4a7025d9.jpg', title: 'Black Denim Jacket', price: 'KSh 3,500.00' },
        { image: 'https://i.pinimg.com/474x/34/f2/ca/34f2ca3e1bedd8790d31ba2c15e36b61.jpg', title: 'Light Blue Denim Jacket', price: 'KSh 3,200.00' },
        { image: 'https://i.pinimg.com/474x/7e/8c/da/7e8cda1963d29b34116d82668cd254c4.jpg', title: 'Dark Blue Denim Jacket', price: 'KSh 3,800.00' },
        { image: 'https://i.pinimg.com/474x/d9/7d/0f/d97d0f75c9b0aeed251aa9fc96192ce8.jpg', title: 'Blue Denim Jacket', price: 'KSh 3,000.00' },
        { image: 'https://i.pinimg.com/474x/8b/a8/55/8ba855e7dce9eaad68f23271698b953e.jpg', title: 'Black Denim Jacket', price: 'KSh 3,500.00' },
      ],
    },
    {
      category: 'Puffer Jackets',
      jackets: [
        { image: 'https://i.pinimg.com/474x/32/97/a6/3297a61be52cad3b2e2ac72d60037c5a.jpg', title: 'Red Puffer Jacket', price: 'KSh 4,500.00' },
        { image: 'https://i.pinimg.com/736x/c2/26/89/c22689cd229bad5d16dd2e1da1e6b090.jpg', title: 'Green Puffer Jacket', price: 'KSh 4,800.00' },
        { image: 'https://i.pinimg.com/474x/99/f5/06/99f5066acbaf630582327661c91f1c96.jpg', title: 'Black Puffer Jacket', price: 'KSh 5,000.00' },
        { image: 'https://i.pinimg.com/474x/b7/81/41/b7814187a6fdae013de2c7ae294c57c5.jpg', title: 'Blue Puffer Jacket', price: 'KSh 4,600.00' },
        { image: 'https://i.pinimg.com/474x/fa/32/1a/fa321aaba2e81e0d6e1e4a2164cf2b2e.jpg', title: 'Red Puffer Jacket', price: 'KSh 4,500.00' },
        { image: 'https://i.pinimg.com/474x/25/cc/54/25cc548c51164ac7e07d7a307803cf8e.jpg', title: 'Green Puffer Jacket', price: 'KSh 4,800.00' },
      ],
    },
    {
      category: 'Hoodies',
      jackets: [
        { image: 'https://i.pinimg.com/474x/9b/b6/1f/9bb61fe1f34d144f652bcea86b6be1ce.jpg', title: 'Red Puffer Jacket', price: 'KSh 4,500.00' },
        { image: 'https://i.pinimg.com/736x/ae/b6/b4/aeb6b40ca450a75494052283090535b2.jpg', title: 'Green Puffer Jacket', price: 'KSh 4,800.00' },
        { image: 'https://i.pinimg.com/474x/74/66/35/746635256bf5d7f71de7346d460b16b9.jpg', title: 'Black Puffer Jacket', price: 'KSh 5,000.00' },
        { image: 'https://i.pinimg.com/474x/aa/70/71/aa70717066ed4b81c138d156c9a371de.jpg', title: 'Blue Puffer Jacket', price: 'KSh 4,600.00' },
        { image: 'https://i.pinimg.com/474x/87/06/16/870616363e7e7b664fb18f8960971586.jpg', title: 'Red Puffer Jacket', price: 'KSh 4,500.00' },
        { image: 'https://i.pinimg.com/474x/63/69/0a/63690a85f196c0d5f771ad15d1a46dbc.jpg', title: 'Green Puffer Jacket', price: 'KSh 4,800.00' },
      ],
    },
    {
      category: 'Kacky',
      jackets: [
        { image: 'https://i.pinimg.com/736x/d1/e6/00/d1e60090133223eb9d4013f25f9697aa.jpg', title: 'Red Puffer Jacket', price: 'KSh 4,500.00' },
        { image: 'https://i.pinimg.com/474x/ca/4d/b7/ca4db7661521d0160033081bf4e7652e.jpg', title: 'Green Puffer Jacket', price: 'KSh 4,800.00' },
        { image: 'https://i.pinimg.com/474x/da/e9/ab/dae9abb0971ebf2c6928fea1451d55be.jpg', title: 'Black Puffer Jacket', price: 'KSh 5,000.00' },
        { image: 'https://i.pinimg.com/736x/3b/13/4b/3b134be090d7ee0e4648bf904881d3fb.jpg', title: 'Blue Puffer Jacket', price: 'KSh 4,600.00' },
        { image: 'https://i.pinimg.com/474x/51/ac/9e/51ac9e850d48ffb5552b916ada602df7.jpg', title: 'Red Puffer Jacket', price: 'KSh 4,500.00' },
        { image: 'https://i.pinimg.com/474x/08/49/ef/0849efbc79a443391b8cfc435ad5fd0b.jpg', title: 'Green Puffer Jacket', price: 'KSh 4,800.00' },
      ],
    },
  ];


  const [currentImageIndices, setCurrentImageIndices] = useState(categories.map(() => 0));

  // Function to handle the next image
  const nextImage = (categoryIndex) => {
    const updatedIndices = [...currentImageIndices];
    updatedIndices[categoryIndex] = (updatedIndices[categoryIndex] + 1) % categories[categoryIndex].jackets.length;
    setCurrentImageIndices(updatedIndices);
  };

  // Function to handle the previous image
  const prevImage = (categoryIndex) => {
    const updatedIndices = [...currentImageIndices];
    updatedIndices[categoryIndex] = (updatedIndices[categoryIndex] - 1 + categories[categoryIndex].jackets.length) % categories[categoryIndex].jackets.length;
    setCurrentImageIndices(updatedIndices);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6">
      <h3 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">Jackets Catalog</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {categories.map((category, index) => (
          <div key={index} className="w-full">
            <h4 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4">{category.category}</h4>

            {/* Image carousel */}
            <div className="relative">
              <img
                src={category.jackets[currentImageIndices[index]].image}
                alt={category.jackets[currentImageIndices[index]].title}
                className="w-full h-80 object-cover mb-4"
              />
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2">
                <button onClick={() => prevImage(index)} className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none">
                  &#8249;
                </button>
              </div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2">
                <button onClick={() => nextImage(index)} className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none">
                  &#8250;
                </button>
              </div>
            </div>

            {/* List of pants items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {category.jackets.map((jacket, jacketIndex) => (
                <CategoryCard
                  key={jacketIndex}
                  category={category.category}
                  image={jacket.image}
                  title={jacket.title}
                  price={jacket.price}
                  onAddToCart={() => addToCart(jacket)} // Add to cart using CartContext
                  onAddToWishlist={() => addToWishlist(jacket)} // Add to wishlist using CartContext
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogJackets;
