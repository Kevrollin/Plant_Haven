import { useState, useEffect } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    }
  }, []);

  // Helper function to update the cart in localStorage and component state
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("cartUpdated")); // Trigger navbar update
  };

  // Increase quantity for a given product
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  // Decrease quantity for a given product
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item // Prevent going below 1
      )
      .filter((item) => item.quantity > 0); // Remove item if quantity is 0

    updateCart(updatedCart);
  };

  // Remove product from the cart
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCart(updatedCart);
    toast.error("Item removed from cart");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-gray-600">
          <p>Your cart is empty.</p>
          <Link href="/shop" className="text-blue-600 underline">
            Go shopping
          </Link>
        </div>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3">Product</th>
              <th className="border p-3">Price</th>
              <th className="border p-3">Quantity</th>
              <th className="border p-3">Total</th>
              <th className="border p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="border p-3 flex items-center space-x-3">
                  <image src={item.image} alt={item.name || "product image"} className="w-16 h-16 object-cover rounded" />
                  <span>{item.name}</span>
                </td>
                <td className="border p-3">${(Number(item.price) * item.quantity).toFixed(2)}</td>
                <td className="border p-3">
                  <div className="flex items-center justify-center space-x-2">
                    <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 bg-gray-300 rounded">
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 bg-gray-300 rounded">
                      <FaPlus />
                    </button>
                  </div>
                </td>
                <td className="border p-3">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="border p-3">
                  <button onClick={() => removeItem(item.id)} className="px-3 py-1 bg-red-500 text-white rounded">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {cart.length > 0 && (
        <div className="mt-6 flex justify-between items-center">
          <p className="text-xl font-bold">
            Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
          </p>
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={cart.length === 0}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
