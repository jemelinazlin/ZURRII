import React from 'react';
import { useCart } from '../Context/Cartcontext'; // Use the useCart hook
import CategoryCard from '../components/CategoryCard';

const CatalogDresses = () => {
  const { cart, wishlist, addToCart, addToWishlist } = useCart(); // Access cart and wishlist from CartContext

  const categories = [
    {
      category: 'Bodycon Dresses',
      dresses: [
        { image: 'https://i.pinimg.com/474x/23/a2/19/23a219eff2bba80e69940b01f56d7e0d.jpg', title: 'Red Bodycon Dress', price: 'KSh 1,200.00' },
        { image: 'https://i.pinimg.com/474x/69/53/b3/6953b3d58812ad3177ca04c925d76952.jpg', title: 'Black Bodycon Dress', price: 'KSh 1,500.00' },
        { image: 'https://i.pinimg.com/474x/f5/3a/5c/f53a5cb652e112b24ccb89c9c9f25522.jpg', title: 'Blue Bodycon Dress', price: 'KSh 1,800.00' },
        { image: 'https://i.pinimg.com/474x/e9/85/e6/e985e6d7a049ad6a456d3f35483d69ce.jpg', title: 'Red Bodycon Dress', price: 'KSh 1,200.00' },
        { image: 'https://i.pinimg.com/474x/7b/b8/49/7bb84964a41641bf52a02a30df23ae68.jpg', title: 'Black Bodycon Dress', price: 'KSh 1,500.00' },
        { image: 'https://i.pinimg.com/474x/a7/8e/a2/a78ea2beb092bb8cb3233d1c6a4ca99a.jpg', title: 'Blue Bodycon Dress', price: 'KSh 1,800.00' },
      ],
    },
    {
      category: 'Sun Dresses',
      dresses: [
        { image: 'https://i.pinimg.com/736x/d2/94/94/d29494c8eb4c012d11a43c53556332aa.jpg', title: 'Floral Maxi Dress', price: 'KSh 2,000.00' },
        { image: 'https://i.pinimg.com/474x/5e/21/d4/5e21d4d3858db3603aab3956d9b5f104.jpg', title: 'Elegant Maxi Dress', price: 'KSh 2,500.00' },
        { image: 'https://i.pinimg.com/474x/21/ac/f5/21acf5156f0c1fb195f1815730784725.jpg', title: 'Casual Maxi Dress', price: 'KSh 1,800.00' },
        { image: 'https://i.pinimg.com/474x/7f/eb/06/7feb06b852f4336f23b51cef05728cef.jpg', title: 'Floral Maxi Dress', price: 'KSh 2,000.00' },
        { image: 'https://i.pinimg.com/474x/1d/e7/8d/1de78d07ccc34266cd4c9602691cdd14.jpg', title: 'Elegant Maxi Dress', price: 'KSh 2,500.00' },
        { image: 'https://i.pinimg.com/474x/97/9f/57/979f577a91f7fe70011b9e0416d15f58.jpg', title: 'Casual Maxi Dress', price: 'KSh 1,800.00' },
      ],
    },
    {
      category: 'Flare Sleeves Lace-Up Bodycon',
      dresses: [
        { image: 'https://i.pinimg.com/736x/34/72/a4/3472a499bc136cc95bea05b818c4f42a.jpg', title: 'Summer Midi Dress', price: 'KSh 1,300.00' },
        { image: 'https://i.pinimg.com/474x/0f/2a/5c/0f2a5ceacf5e1e69bebc8a2520121295.jpg', title: 'Chic Midi Dress', price: 'KSh 1,700.00' },
        { image: 'https://i.pinimg.com/474x/93/fb/52/93fb52d33eba54eafba7c39666258d8f.jpg', title: 'Boho Midi Dress', price: 'KSh 2,000.00' },
        { image: 'https://i.pinimg.com/474x/c9/76/47/c9764786e48b9574fc8b274cc74f9934.jpg', title: 'Summer Midi Dress', price: 'KSh 1,300.00' },
        { image: 'https://i.pinimg.com/474x/82/63/03/826303d4b931a578abeec6dd56261e2b.jpg', title: 'Chic Midi Dress', price: 'KSh 1,700.00' },
        { image: 'https://i.pinimg.com/474x/06/2c/15/062c157ffe3848c3d1b7a8c562766fef.jpg', title: 'Boho Midi Dress', price: 'KSh 2,000.00' },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6">
      <h3 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-white">Dresses Catalog</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="w-full">
            <h4 className="text-2xl font-semibold text-center mb-4 text-gray-800 dark:text-white">{category.category}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {category.dresses.map((dress, dressIndex) => (
                <CategoryCard
                  key={dressIndex}
                  category={category.category}
                  image={dress.image}
                  title={dress.title}
                  price={dress.price}
                  onAddToCart={() => addToCart(dress)} // Add to cart using CartContext
                  onAddToWishlist={() => addToWishlist(dress)} // Add to wishlist using CartContext
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogDresses;
