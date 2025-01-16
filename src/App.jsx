import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './assets/components/AboutUs';
import Cart from './assets/components/Cart';
import Footer from './assets/components/Footer';
import NavigationBar from './assets/components/NavigationBar';
import Wishlist from './assets/components/WishList';
import CatalogPage from './assets/pages/CatalogPage';
import Contact from './assets/pages/Contact';
import Home from './assets/pages/Home';
import { CartProvider } from './assets/Context/Cartcontext';
import { ThemeProvider } from './assets/Context/ThemeContext';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On page load, apply the dark mode based on the user's preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark"); // Add dark mode class to <html>
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark"); // Remove dark mode class
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <Router>
      <CartProvider>
        <ThemeProvider>
          <div className={`app ${isDarkMode ? "dark" : ""}`}>
            <NavigationBar toggleDarkMode={toggleDarkMode} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/catalog/:category" element={<CatalogPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
            <Footer />
          </div>
        </ThemeProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
