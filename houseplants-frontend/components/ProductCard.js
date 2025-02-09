import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product, onViewProduct }) => {
  const [setCartCount] = useState(0);

  if (!product) return null; // Don't render if there's no product

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="border p-4 shadow-md bg-white rounded-lg text-center">
      <image src={product.image} alt={product.name || "product image"} className="product-image rounded-md" />
      <h2 className="text-lg font-semibold my-2">{product.name}</h2>
      <p className="text-green-600 font-bold">${product.price ? product.price.toFixed(2) : "0.00"}</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={addToCart}
          className="mt-3 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
        >
          <FaShoppingCart className="mr-2" /> Add to Cart
        </button>
        <button
          onClick={() => onViewProduct?.(product)}
          className="mt-3 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
