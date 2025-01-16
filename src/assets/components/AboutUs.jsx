import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] mb-16 overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://www.bing.com/images/search?view=detailV2&ccid=oqhpf1v%2b&id=D9A310381F543CB98D7AC6AD4AC1D75F3C00925E&thid=OIP.oqhpf1v--FuGrdnc6dS1BgHaEK&mediaurl=https%3a%2f%2fwallpaperaccess.com%2ffull%2f5653640.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a2a8697f5bfef85b86add9dce9d4b506%3frik%3dXpIAPF%252fXwUqtxg%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=about+us+wallpaper&simid=608039173881808028&FORM=IRPRST&ck=8006DB4D705CC99A2650F91F92C08E45&selectedIndex=1&itb=0"
          alt="About Us Banner"
          className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6 sm:px-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-shadow-lg">
              Discover the Story Behind Zuri Trends
            </h1>
            <p className="text-lg sm:text-xl font-light mb-6 opacity-90">
              More than just fashion, Zuri Trends is a celebration of self-expression, confidence, and timeless style. Our mission is to bring you the latest trends while maintaining a focus on quality and sustainability.
            </p>
            <a
              href="#about-us"
              className="inline-block px-8 py-3 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about-us" className="py-16 px-6 lg:px-24 bg-white dark:bg-gray-800 shadow-md rounded-lg mb-16">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Our Story</h2>
          <p className="text-lg text-gray-500 dark:text-gray-300">
            At Zuri Trends, we believe that fashion is more than just clothing — it’s about self-expression, confidence, and quality. Founded with the mission of bringing the latest trends to your wardrobe at affordable prices, our journey has been one of passion, dedication, and customer-first focus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our mission is to provide high-quality, trendy, and stylish clothing for men and women, while offering a seamless shopping experience. We aim to empower our customers to feel confident and beautiful in every outfit they choose from our collection. We are committed to sustainability, ethical sourcing, and delivering exceptional customer service.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our vision is to become a global fashion destination, offering clothing that fits every occasion, lifestyle, and personality. We aspire to create a community where people from all walks of life can shop with ease, find their perfect style, and make a positive impact through sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-blue-50 dark:bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-500 dark:text-gray-300">
            The heart of Zuri Trends lies in the passionate and dedicated team behind the scenes. From our fashion designers to our customer service team, we’re all here to make your shopping experience extraordinary.
          </p>
        </div>

        <div className="flex justify-center space-x-12">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              className="w-[150px] h-[150px] rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-xl transform transition-transform duration-300 hover:scale-110"
            />
            <h5 className="font-semibold text-gray-800 dark:text-white">Muslim Kigen</h5>
            <p className="text-gray-600 dark:text-gray-300">Founder & CEO</p>
            <p className="text-gray-500 dark:text-gray-400">Kigens’s vision for Tisap Threads has shaped the brand into what it is today. She has a keen eye for trends and a passion for providing high-quality, stylish apparel for everyone.</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              className="w-[150px] h-[150px] rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-xl transform transition-transform duration-300 hover:scale-110"
            />
            <h5 className="font-semibold text-gray-800 dark:text-white">Nazlin Jemeli</h5>
            <p className="text-gray-600 dark:text-gray-300">Head of Design</p>
            <p className="text-gray-500 dark:text-gray-400">Jemli's brings a creative touch to everything we do. His designs reflect both timeless elegance and contemporary style, ensuring our collection always stays fresh and exciting.</p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-6 lg:px-24 bg-white dark:bg-gray-800 shadow-lg rounded-lg mb-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Our Values</h2>
          <p className="text-lg text-gray-500 dark:text-gray-300">
            At Tisap Threads, our values define who we are and how we interact with our customers, partners, and the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          <div className="p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Sustainability</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We are committed to reducing our environmental impact by sourcing sustainable materials and practicing ethical production methods.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Quality</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Quality is at the core of everything we do. From fabric selection to stitching, every piece in our collection is designed to last.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Customer-Centric</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our customers come first. We strive to offer a seamless shopping experience, excellent customer service, and personalized recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Join Our Journey Section */}
      <section className="bg-gray-800 dark:bg-gray-900 text-white py-16 text-center rounded-lg shadow-lg">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Join Us On Our Journey</h2>
          <p className="text-lg mb-8">
            Tisap Threads is growing every day, and we want you to be a part of our journey. Stay connected with us for new arrivals, exclusive offers, and all things fashion.
          </p>
          <a href="/newsletter" className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg">
            Subscribe to Our Newsletter
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
