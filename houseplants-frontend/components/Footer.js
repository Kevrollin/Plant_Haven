import { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-700 text-gray-400 py-10 relative">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">🌿 Plant Haven</h2>
          <p className="mt-2 text-sm">
            Your one-stop shop for beautiful, healthy plants delivered to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/" className="hover:text-green-400 transition">Home</Link></li>
            <li><Link href="/shop" className="hover:text-green-400 transition">Shop</Link></li>
            <li><Link href="/about" className="hover:text-green-400 transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="mt-2 text-sm">📍 123 Green St, Plant City</p>
          <p className="text-sm">📧 support@planthaven.com</p>
          <p className="text-sm">📞 +254 757 086 742</p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start mt-4 space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" className="hover:text-green-400 transition"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" className="hover:text-green-400 transition"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" className="hover:text-green-400 transition"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Plant Haven. All Rights Reserved.
      </div>

      {/* Go to Top Button */}
      {showButton && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
          aria-label="Go to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
