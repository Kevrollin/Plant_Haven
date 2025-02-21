import { useState } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { FaArrowLeft, FaArrowRight, FaTimes, FaSearch, FaFilter } from "react-icons/fa";

const FeaturedProducts = ({ products }) => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  // Open modal
  const openModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  // Close modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Next & Previous image functions
  const nextImage = () => {
    if (selectedProduct?.images?.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct?.images?.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
      );
    }
  };

  // Filter Products by Name (Search)
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) => {
      if (priceFilter === "all") return true;
      if (priceFilter === "low") return product.price < 20;
      if (priceFilter === "mid") return product.price >= 20 && product.price <= 50;
      if (priceFilter === "high") return product.price > 50;
      return true;
    });

  // Function to open WhatsApp with a pre-filled message
  const orderOnWhatsApp = (product) => {
    const message = `Hello, I'm interested in purchasing the "${product.name}" for $${product.price}. Please provide more details.`;
    const phoneNumber = "0757086742"; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="w-full lg:container sm:mx-auto max-w-7xl px-4 py-12 bg-green-50">
      <div className="w-full text-center">
        <h2 className="text-3xl font-bold sm:text-6xl text-gray-800">🌿 Featured <span className="text-primary">Plants</span></h2>
        <p className="mt-2 text-3xl text-gray-600">Discover our most popular plants, handpicked just for you.</p>
      </div>

      {/* Search & Filter Options */}
      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Search Input */}
        <div className="relative w-full sm:w-96">
          <input
            type="text"
            placeholder="Search for a plant..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>

        {/* Price Filter Dropdown */}
        <div className="relative">
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="all">All Prices</option>
            <option value="low">Below $20</option>
            <option value="mid">$20 - $50</option>
            <option value="high">Above $50</option>
          </select>
          <FaFilter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-center px-4 sm:px-12">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <Image
                src={Array.isArray(product.image) ? product.image[0] : product.image}
                alt={product.name}
                width={350} 
                height={280}
                className="w-full h-64 object-cover"
                unoptimized
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-green-700 font-bold text-xl">${product.price}</p>
                
                {/* Buttons */}
                <div className="flex flex-row w-full gap-4 mt-4 sm:flex-col justify-center sm:w-auto">
                {/* Order on WhatsApp Button */}
                <button
                  onClick={() => orderOnWhatsApp(product)}
                  className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition shadow-md flex items-center justify-center gap-2"
                >
                  📞 Order on WhatsApp
                </button>;

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition shadow-md"
                >
                  🛒 Add to Cart
                </button>

                {/* View Product Button */}
                <button
                  onClick={() => openModal(product)}
                  className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition shadow-md"
                >
                  👁️ View Product
                </button>
              </div>

              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No plants found matching your search.</p>
        )}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg z-50">
          <div className="bg-white bg-opacity-95 p-8 rounded-2xl w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl relative shadow-2xl transform transition-all scale-100">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-800 transition transform hover:scale-110"
            >
              <FaTimes />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Image Carousel */}
              {selectedProduct.images && selectedProduct.images.length > 0 ? (
                <div className="relative">
                  <Image
                    src={selectedProduct.images[currentImageIndex]}
                    alt={selectedProduct.name}
                    width={450}
                    height={450}
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                    unoptimized
                  />
                  
                  {/* Arrows for Navigation */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 text-gray-700 p-3 rounded-full hover:bg-gray-300 shadow-lg transition"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 text-gray-700 p-3 rounded-full hover:bg-gray-300 shadow-lg transition"
                  >
                    <FaArrowRight />
                  </button>

                  {/* Image Indicators */}
                  <div className="flex justify-center mt-4 gap-2">
                    {selectedProduct.images.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition ${
                          index === currentImageIndex ? "bg-green-600 scale-125" : "bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-center text-gray-500">No images available</p>
              )}

              {/* Product Details */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-semibold text-gray-800">{selectedProduct.name}</h2>
                <p className="text-gray-600 mt-3 leading-relaxed">{selectedProduct.description}</p>
                <p className="text-green-600 font-bold text-2xl mt-4">${selectedProduct.price}</p>

                {/* Add to Cart Button */}
                <button
                  onClick={() => selectedProduct && addToCart(selectedProduct)}
                  className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg text-lg transition shadow-lg transform hover:scale-105"
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
