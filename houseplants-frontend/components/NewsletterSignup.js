import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setMessage("⚠️ Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setMessage("");

    // Simulate email submission
    setTimeout(() => {
      setMessage("🎉 Thank you for subscribing! You'll be notified of new arrivals.");
      setEmail(""); // Clear the input field
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="bg-green-100 py-20 px-6 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800">
        🌱 Stay Updated with New Arrivals!
      </h2>
      <p className="text-gray-600 mt-2 text-lg">
        Be the first to know when we add new plants! Subscribe to our newsletter for updates & exclusive deals.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          required
        />
        <button
          type="submit"
          className={`px-6 py-3 rounded-lg font-semibold text-white transition ${
            loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
          }`}
          disabled={loading}
        >
          {loading ? "Subscribing..." : "✅ Subscribe"}
        </button>
      </form>

      {/* Success / Error Message */}
      {message && (
        <p className="mt-4 text-green-700 font-medium opacity-90 transition-opacity duration-500" aria-live="polite">
          {message}
        </p>
      )}
    </section>
  );
};

export default NewsletterSignup;
