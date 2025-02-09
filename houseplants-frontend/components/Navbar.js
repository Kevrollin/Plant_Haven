import { useState, useEffect } from "react";
import Link from "next/link";
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes, FaSearch, FaBell } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const { data: session } = useSession();

  useEffect(() => {
    const fetchCartItems = () => {
      try {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartCount(storedCart.reduce((total, item) => total + item.quantity, 0)); // Ensure cartCount updates properly
      } catch (error) {
        console.error("Error reading cart data from localStorage", error);
        setCartCount(0); // Fallback to 0 if there's an error
      }
    };

    fetchCartItems();

    // Update cart count when localStorage changes
    const handleStorageChange = () => fetchCartItems();
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <nav className="bg-primary shadow-lg text-white fixed w-full top-0 z-50 p-3">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold flex items-center">
            <span className="text-green-200">🌿 Plant Haven</span>
          </Link>

          {/* SEARCH BAR */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search plants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>

          {/* NAVIGATION LINKS - PC VIEW */}
          <div className="hidden md:flex space-x-6 px-9">
            <NavItem href="/" text="Home" />
            <NavItem href="/shop" text="Shop" />
            <NavItem href="/about" text="About" />
            <NavItem href="/contact" text="Contact" />
          </div>

          {/* ICONS */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Icon */}
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              <FaSearch size={20} />
            </button>

            {/* Notifications */}
            <button className="relative text-white">
              <FaBell size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">3</span>
            </button>

            {/* Cart with Dynamic Badge */}
            <Link href="/cart" className="relative text-white">
              <FaShoppingCart size={22} />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>

            {/* User Authentication Dropdown */}
            <div className="relative group">
              <button className="focus:outline-none">
                <FaUserCircle size={22} className="cursor-pointer" />
              </button>
              <div className="absolute right-0 bg-white text-gray-900 shadow-lg rounded-lg p-2 w-40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {session ? (
                  <>
                    <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                      Profile
                    </Link>
                    <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100">
                      Orders
                    </Link>
                    <button onClick={() => signOut()} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/signin">
                      <button className="w-full px-4 py-2 border border-green-700 text-black rounded-md hover:bg-green-100 transition">
                        Sign In
                      </button>
                    </Link>
                    <br/>
                    <br/>
                    <Link href="/login">
                      <button className="w-full px-4 py-2 border border-green-700 bg-white text-blue-900 rounded-md hover:bg-green-600 transition">
                        Login
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar & Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-green-900 text-white"
          >
            <div className="p-4">
              {/* Search Bar in Mobile Menu */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search plants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
                />
                <FaSearch className="absolute right-3 top-3 text-gray-500" />
              </div>

              {/* Mobile Nav Links */}
              <div className="flex flex-col space-y-4">
                <NavItem href="/" text="Home" onClick={() => setIsOpen(false)} />
                <NavItem href="/shop" text="Shop" onClick={() => setIsOpen(false)} />
                <NavItem href="/about" text="About" onClick={() => setIsOpen(false)} />
                <NavItem href="/contact" text="Contact" onClick={() => setIsOpen(false)} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Reusable NavItem Component
const NavItem = ({ href, text, onClick }) => (
  <Link href={href} passHref>
    <span onClick={onClick} className="hover:text-green-400 transition duration-30 cursor-pointer">
      {text}
    </span>
  </Link>
);

export default Navbar;
