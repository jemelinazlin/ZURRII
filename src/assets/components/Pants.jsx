import React, { useState } from 'react';
import CategoryCard from '../components/CategoryCard';
import { useCart } from '../Context/Cartcontext'; 

const CatalogPants = () => {
  const { cart, wishlist, addToCart, addToWishlist } = useCart(); // Access cart context

  const categories = [
    {
      category: 'Slim Fit Pants',
      pants: [
        { image: 'https://i.pinimg.com/474x/5e/43/13/5e43138f24c2df0151f2af1fb26249c7.jpg', title: 'Blue Slim Fit', price: 'KSh 2,500.00' },
        { image: 'https://i.pinimg.com/474x/a6/c0/a8/a6c0a812abd4a5aee2691a380ce0f006.jpg', title: 'Black Slim Fit', price: 'KSh 2,700.00' },
        { image: 'https://i.pinimg.com/474x/67/d5/f9/67d5f921130d4b193508390dc73100a4.jpg', title: 'Grey Slim Fit', price: 'KSh 2,600.00' },
      ],
    },
    {
      category: 'Straight Leg Pants',
      pants: [
        { image: 'https://i.pinimg.com/736x/a8/6f/90/a86f906fa0ae1924626c7177ef7e2fed.jpg', title: 'Beige Straight Leg', price: 'KSh 2,800.00' },
        { image: 'https://i.pinimg.com/474x/50/d3/30/50d330c6a987d2f5d5f2039c95a0df2f.jpg', title: 'Navy Straight Leg', price: 'KSh 3,000.00' },
        { image: 'https://i.pinimg.com/474x/ea/ae/66/eaae66d51854075255bb4beee1d120b7.jpg', title: 'Black Straight Leg', price: 'KSh 2,900.00' },
      ],
    },
    {
      category: 'Straight Leg Pants',
      pants: [
        { image: 'https://i.pinimg.com/736x/30/b9/b2/30b9b2d3725dd8186dc8983352fb0887.jpg', title: 'Beige Straight Leg', price: 'KSh 2,800.00' },
        { image: 'https://i.pinimg.com/474x/99/bb/a2/99bba21f26fcb80d29a31cb58908b7de.jpg', title: 'Navy Straight Leg', price: 'KSh 3,000.00' },
        { image: 'https://i.pinimg.com/474x/02/e7/30/02e7301d5d8cf4784c7faa442657c785.jpg', title: 'Black Straight Leg', price: 'KSh 2,900.00' },
      ],
    },
    {
      category: 'Straight Leg Pants',
      pants: [
        { image: 'https://i.pinimg.com/736x/dd/03/51/dd03516340317b33d28297ee03993b99.jpg', title: 'Beige Straight Leg', price: 'KSh 2,800.00' },
        { image: 'https://i.pinimg.com/474x/31/ed/ec/31edec69ec0114a9c07f4f124d43f8ef.jpg', title: 'Navy Straight Leg', price: 'KSh 3,000.00' },
        { image: 'https://i.pinimg.com/474x/55/a2/53/55a2533ea7b2a4ba46cf7dabdb3a0ccc.jpg', title: 'Black Straight Leg', price: 'KSh 2,900.00' },
      ],
    },
    {
      category: 'Straight Leg Pants',
      pants: [
        { image: 'https://i.pinimg.com/474x/9d/fe/e6/9dfee6902a5c4f75a15914aab6026027.jpg', title: 'Beige Straight Leg', price: 'KSh 2,800.00' },
        { image: 'https://i.pinimg.com/474x/db/aa/84/dbaa84d0691aaf403da02cfec5286ed3.jpg', title: 'Navy Straight Leg', price: 'KSh 3,000.00' },
        { image: 'https://i.pinimg.com/474x/62/c4/58/62c4588bbba93f33ec9f5f51996d784e.jpg', title: 'Black Straight Leg', price: 'KSh 2,900.00' },
      ],
    },
    {
      category: 'Straight Leg Pants',
      pants: [
        { image: 'https://i.pinimg.com/474x/b9/6a/72/b96a72eee56bf97900a1e5d02676494f.jpg', title: 'Beige Straight Leg', price: 'KSh 2,800.00' },
        { image: 'https://i.pinimg.com/474x/1a/41/1d/1a411d7f54a589263779cac404f250a0.jpg', title: 'Navy Straight Leg', price: 'KSh 3,000.00' },
        { image: 'https://i.pinimg.com/474x/cb/a7/2a/cba72ab4aa0bd74590951b02d96c7de7.jpg', title: 'Black Straight Leg', price: 'KSh 2,900.00' },
      ],
    },
    // More categories...
  ];


  const [currentImageIndices, setCurrentImageIndices] = useState(categories.map(() => 0));

  const nextImage = (categoryIndex) => {
    const updatedIndices = [...currentImageIndices];
    updatedIndices[categoryIndex] = (updatedIndices[categoryIndex] + 1) % categories[categoryIndex].pants.length;
    setCurrentImageIndices(updatedIndices);
  };

  const prevImage = (categoryIndex) => {
    const updatedIndices = [...currentImageIndices];
    updatedIndices[categoryIndex] = (updatedIndices[categoryIndex] - 1 + categories[categoryIndex].pants.length) % categories[categoryIndex].pants.length;
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
                src={category.pants[currentImageIndices[index]].image}
                alt={category.pants[currentImageIndices[index]].title}
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
              {category.pants.map((pant, pantIndex) => (
                <CategoryCard
                  key={pantIndex}
                  category={category.category}
                  image={pant.image}
                  title={pant.title}
                  price={pant.price}
                  onAddToCart={() => addToCart(pant)}
                  onAddToWishlist={() => addToWishlist(pant)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPants;
