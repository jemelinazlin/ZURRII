import React, { useState } from 'react';

const Contact = () => {
  // State to toggle the visibility of the shipping policy
  const [isShippingPolicyVisible, setShippingPolicyVisible] = useState(false);
  // State to toggle the visibility of the returns and refunds policy
  const [isReturnsPolicyVisible, setReturnsPolicyVisible] = useState(false);

  // Function to toggle the visibility of the shipping policy
  const toggleShippingPolicy = () => {
    setShippingPolicyVisible(!isShippingPolicyVisible);
  };

  // Function to toggle the visibility of the returns and refunds policy
  const toggleReturnsPolicy = () => {
    setReturnsPolicyVisible(!isReturnsPolicyVisible);
  };

  return (
    <div className="bg-gradient-to-b from-indigo-100 to-blue-50 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] mb-12">
        <img
          src="https://source.unsplash.com/1600x900/?fashion,shop"
          alt="Contact Us Banner"
          className="w-full h-full object-cover rounded-lg shadow-lg opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center tracking-wide animate__animated animate__fadeIn">
            We’re Here to Help
          </h1>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-16 px-6 lg:px-24 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Need Assistance? Contact Us</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
            Our team is here to assist you with any questions or concerns. Whether it's about your order, shipping, or returns, we’ve got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
          {/* Contact Info */}
          <div className="space-y-6 text-left">
            <div className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition duration-300">
              <i className="fas fa-phone-alt text-2xl text-indigo-600 mr-4"></i>
              <div>
                <h5 className="font-semibold text-xl">Phone Number</h5>
                <p className="text-lg">+254 701 234 567</p>
              </div>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition duration-300">
              <i className="fas fa-envelope text-2xl text-indigo-600 mr-4"></i>
              <div>
                <h5 className="font-semibold text-xl">Email Address</h5>
                <p className="text-lg">support@zuritrends.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Send Us a Message</h3>
            <form action="#" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-600 dark:text-gray-300">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-600 dark:text-gray-300">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-gray-600 dark:text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              <div className="mt-6 text-center">
                <button type="submit" className="bg-indigo-600 text-white py-3 px-8 rounded-full text-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Shipping & Returns Section */}
      <section className="bg-gradient-to-r from-indigo-200 to-blue-100 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8">Need Help With Shipping or Returns?</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            We're committed to ensuring a smooth shopping experience. Below are some resources to help with shipping and returns.
          </p>
          <div className="space-y-4">
            {/* Shipping Policy Link */}
            <a 
              href="#"
              onClick={toggleShippingPolicy}
              className="inline-block text-indigo-600 dark:text-indigo-400 font-semibold hover:underline cursor-pointer transition duration-300 transform hover:scale-105"
            >
              Shipping Policies
            </a>
            {isShippingPolicyVisible && (
              <div className="mt-4 text-left max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                <h4 className="font-semibold text-xl">Shipping Policy</h4>
                <ul className="list-disc pl-6">
                  <li>Orders are processed within 2-3 business days.</li>
                  <li>Free shipping on orders above KSh 5,000.</li>
                  <li>Standard delivery time: 3-5 business days.</li>
                  <li>International shipping available at additional cost.</li>
                  <li>Tracking number will be provided once shipped.</li>
                </ul>
              </div>
            )}

            {/* Returns & Refunds Link */}
            <a 
              href="#"
              onClick={toggleReturnsPolicy}
              className="inline-block text-indigo-600 dark:text-indigo-400 font-semibold hover:underline cursor-pointer transition duration-300 transform hover:scale-105"
            >
              Returns & Refunds
            </a>
            {isReturnsPolicyVisible && (
              <div className="mt-4 text-left max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                <h4 className="font-semibold text-xl">Returns & Refunds Policy</h4>
                <ul className="list-disc pl-6">
                  <li>Returns accepted within 30 days of purchase.</li>
                  <li>Items must be unused and in original condition.</li>
                  <li>Refunds will be issued to the original payment method.</li>
                  <li>Shipping fees are non-refundable.</li>
                  <li>Customer is responsible for return shipping costs.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
