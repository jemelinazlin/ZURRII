import React from 'react';

function Card({ primaryImage, secondaryImage, title, text, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group transform hover:scale-105 w-full max-w-[350px]">
      <div className="relative overflow-hidden h-[350px]">
        {/* Primary Image */}
        <img
          src={primaryImage}
          className="absolute w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          alt={`${title} Primary`}
        />
        {/* Secondary Image */}
        {secondaryImage && (
          <img
            src={secondaryImage}
            className="absolute w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            alt={`${title} Secondary`}
          />
        )}
      </div>
      <div className="p-6 bg-white dark:bg-gray-900 transition-all duration-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-800">
        <h5 className="text-2xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600">{title}</h5>
        <p className="text-gray-500 font-medium text-lg dark:text-gray-300">{text}</p>
        <a href={link} className="inline-block mt-4 text-blue-500 font-semibold hover:underline dark:text-blue-400">
          Shop Now
        </a>
      </div>
    </div>
  );
}

const Home = () => {
  const newArrivals = [
    {
      primaryImage:
        'https://i.pinimg.com/736x/d5/df/f6/d5dff6abd6d845f35f57387b16ec175d.jpg',
      secondaryImage: 'https://i.pinimg.com/736x/55/45/82/55458245b30e9fe9b65cc8329e541ffb.jpg',
      title: 'Sundresses',
      text: 'KSh1,500.00',
      link: '/catalog/dresses', // Link to the Dresses Catalog
    },
    {
      primaryImage:
        'https://i.pinimg.com/736x/42/be/d8/42bed8397001fdd9fcd0df395a56ade7.jpg',
      secondaryImage: 'https://i.pinimg.com/736x/5f/eb/fc/5febfc5b2f1a6293ad6ac1adee67d7ec.jpg',
      title: 'Baggy Jeans',
      text: 'KSh2,000.00',
      link: '/catalog/pants', // Link to the Pants Catalog
    },
    {
      primaryImage:
        'https://i.pinimg.com/736x/22/57/cc/2257ccd3f7ca68eb23bf2efc62b87e40.jpg',
      secondaryImage: 'https://i.pinimg.com/736x/a5/65/6f/a5656f8420a7603253a82e678bc3c500.jpg',
      title: 'Men Shirt and Pants set',
      text: 'KSh3,000.00',
      link: '/catalog/shirts', // Link to the Shirts Catalog
    }
  ];

  const bestSellers = [
    {
      primaryImage: 'https://i.pinimg.com/736x/43/df/7c/43df7c29debdabd91ba6f63d27d30645.jpg',
      secondaryImage: 'https://i.pinimg.com/736x/18/dd/92/18dd926c57cff3116aa9bcbdb8b9cedc.jpg',
      title: 'Floral Blouse',
      text: 'KSh1,200.00',
      link: '/catalog/shirts', // Link to the Tops Catalog
    },
    {
      primaryImage: 'https://i.pinimg.com/736x/3b/6a/95/3b6a95da9e955454180e33fbef9ec02e.jpg',
      secondaryImage: 'https://i.pinimg.com/736x/ee/de/2e/eede2ea2c174ce4ef5c1b6a0e253dce7.jpg',
      title: 'Low Rise Jeans',
      text: 'KSh1,800.00',
      link: '/catalog/pants', // Link to the Pants Catalog
    },
    {
      primaryImage: 'https://i.pinimg.com/474x/49/e9/55/49e9553ce61bb4a62ca04314011f1479.jpg',
      secondaryImage: 'https://i.pinimg.com/474x/5d/3f/bd/5d3fbde5c3b81f46e1b71b77b72cc2e1.jpg',
      title: 'Jorts',
      text: 'KSh2,500.00',
      link: '/catalog/pants', // Link to the Shorts Catalog
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-6">
      {/* Hero Section */}
      <div className="relative mb-16">
        <img
          src="https://assets-global.website-files.com/5fa874b3f9ced09e0026328c/64935326b3adcc5b3c57b63d_clothing-p-2600.jpg"
          alt="Decorative Banner"
          className="w-full h-[500px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-5xl font-extrabold bg-black bg-opacity-50 px-6 py-4 rounded-lg shadow-md">
            Welcome To Zuri Trends
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-white">New Arrivals</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {newArrivals.map((card, index) => (
            <Card
              key={index}
              primaryImage={card.primaryImage}
              secondaryImage={card.secondaryImage}
              title={card.title}
              text={card.text}
              link={card.link} // Use the dynamic link
            />
          ))}
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-white">Best Sellers</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {bestSellers.map((card, index) => (
            <Card
              key={index}
              primaryImage={card.primaryImage}
              secondaryImage={card.secondaryImage}
              title={card.title}
              text={card.text}
              link={card.link} // Use the dynamic link
            />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-8">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-8 mb-6">
            <a href="/" className="text-gray-300 hover:text-white">Home</a>
            <a href="/catalog/dresses" className="text-gray-300 hover:text-white">Shop</a>
            <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
          </div>
          <div className="mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mx-2">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <p className="text-gray-400">© 2025 Zuri Trends. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
