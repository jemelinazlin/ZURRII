import React, { useState, useEffect } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  // Remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item?.price?.replace('KSh ', '').replace(',', '')) || 0;
    return total + price;
  }, 0);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-8">Your Cart</h2>
      <div className="space-y-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-gray-500">{item.price || 'Price not available'}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-6 text-right">
          <h3 className="text-xl font-semibold">Total: KSh {totalPrice.toFixed(2)}</h3>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
