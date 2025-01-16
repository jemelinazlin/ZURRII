import React, { useState } from 'react';
import CategoryCard from '../components/CategoryCard';
import { useCart } from '../Context/Cartcontext';

const CatalogJackets = () => {
  const { addToCart, addToWishlist } = useCart(); // Access cart and wishlist from CartContext

  // Sample data for categories of jackets (change "jackets" to "shirts" here)
  const categories = [
    {
      category: 'Casual Shirts',
      shirts: [
        { image: 'https://i.pinimg.com/474x/66/b5/69/66b56916f5ef8582bd3c931f2ac27668.jpg', title: 'Red Casual Shirt', price: 'KSh 1,200.00' },
        { image: 'https://i.pinimg.com/474x/2c/0d/6a/2c0d6a2549adeba9b05c2911f73dd69d.jpg', title: 'Black Casual Shirt', price: 'KSh 1,500.00' },
        { image: 'https://i.pinimg.com/474x/c6/61/2f/c6612fa5c50a44190e7d870b42e1ae31.jpg', title: 'Blue Casual Shirt', price: 'KSh 1,800.00' },
        { image: 'https://i.pinimg.com/474x/1f/aa/3a/1faa3aff24e0e651e964e44cd1cdb00d.jpg', title: 'Red Casual Shirt', price: 'KSh 1,200.00' },
        { image: 'https://i.pinimg.com/474x/74/17/44/741744ceadd619c49fe410b4492fb601.jpg', title: 'Black Casual Shirt', price: 'KSh 1,500.00' },
        { image: 'https://i.pinimg.com/474x/d6/f8/98/d6f8989a3fcc5432d464cbeb388eec1d.jpg', title: 'Blue Casual Shirt', price: 'KSh 1,800.00' },
      ],
    },
    {
      category: 'Formal Shirts',
      shirts: [
        { image: 'https://i.pinimg.com/474x/e6/2f/4d/e62f4d53801c332ff46f98b577653f31.jpg', title: 'White Formal Shirt', price: 'KSh 2,000.00' },
        { image: 'https://i.pinimg.com/474x/6d/27/d8/6d27d87e86a2757600e82b11cd85b5e0.jpg', title: 'Elegant Formal Shirt', price: 'KSh 2,500.00' },
        { image: 'https://i.pinimg.com/474x/30/a8/1c/30a81cff9e06686259bb6f1cbc2c6582.jpg', title: 'Casual Formal Shirt', price: 'KSh 1,800.00' },
        { image: 'https://i.pinimg.com/474x/44/af/55/44af555070ac520e1b8cd1eb11901010.jpg', title: 'White Formal Shirt', price: 'KSh 2,000.00' },
        { image: 'https://i.pinimg.com/474x/5e/dd/9e/5edd9e5927d38d4f618c41e5352d548b.jpg', title: 'Elegant Formal Shirt', price: 'KSh 2,500.00' },
        { image: 'https://i.pinimg.com/474x/a5/ef/f1/a5eff160979e37aee54a644de3873689.jpg', title: 'Casual Formal Shirt', price: 'KSh 1,800.00' },
      ],
    },
    {
      category: 'Casual Button-Up Shirts',
      shirts: [
        { image: 'https://i.pinimg.com/736x/26/ae/26/26ae2697ce1f362fdb06c0402f704a2a.jpg', title: 'Plaid Casual Shirt', price: 'KSh 1,300.00' },
        { image: 'https://i.pinimg.com/474x/9c/b2/69/9cb269fc8404ea2bd534df385f2c43ef.jpg', title: 'Striped Casual Shirt', price: 'KSh 1,700.00' },
        { image: 'https://i.pinimg.com/474x/8a/41/02/8a4102a2e98949c293e1cc3dcdcbc5c9.jpg', title: 'Flannel Casual Shirt', price: 'KSh 2,000.00' },
        { image: 'https://i.pinimg.com/474x/80/37/5a/80375a497ab0839d82cd7ea23a138dd6.jpg', title: 'Plaid Casual Shirt', price: 'KSh 1,300.00' },
        { image: 'https://i.pinimg.com/474x/e3/34/f9/e334f9e00dd83d79b714edb37568c4ff.jpg', title: 'Striped Casual Shirt', price: 'KSh 1,700.00' },
        { image: 'https://i.pinimg.com/474x/5b/6d/b1/5b6db179fbf9d3a1659197d00da0f81d.jpg', title: 'Flannel Casual Shirt', price: 'KSh 2,000.00' },
      ],
    },
  ];

  // State to manage the current image index for each category
  const [currentImageIndices, setCurrentImageIndices] = useState(categories.map(() => 0));

  // Function to handle the next image
  const nextImage = (categoryIndex) => {
    const updatedIndices = [...currentImageIndices];
    updatedIndices[categoryIndex] = (updatedIndices[categoryIndex] + 1) % categories[categoryIndex].shirts.length; // Use "shirts" here
    setCurrentImageIndices(updatedIndices);
  };

  // Function to handle the previous image
  const prevImage = (categoryIndex) => {
    const updatedIndices = [...currentImageIndices];
    updatedIndices[categoryIndex] = (updatedIndices[categoryIndex] - 1 + categories[categoryIndex].shirts.length) % categories[categoryIndex].shirts.length; // Use "shirts" here
    setCurrentImageIndices(updatedIndices);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6">
      <h3 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">Pants Catalog</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {categories.map((category, index) => (
          <div key={index} className="w-full">
            <h4 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4">{category.category}</h4>

            {/* Image carousel */}
            <div className="relative">
              <img
                src={category.shirts[currentImageIndices[index]].image}
                alt={category.shirts[currentImageIndices[index]].title}
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
    
              {category.shirts.map((shirt, shirtIndex) => (  // Use "shirts" here
                <CategoryCard
                  key={shirtIndex}
                  category={category.category}
                  image={shirt.image}
                  title={shirt.title}
                  price={shirt.price}
                  onAddToCart={() => addToCart(shirt)} // Add to cart using CartContext
                  onAddToWishlist={() => addToWishlist(shirt)} // Add to wishlist using CartContext
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
