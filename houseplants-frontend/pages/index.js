import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import NewsletterSignup from "@/components/NewsletterSignup";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="w-screen min-h-screen overflow-hidden">
      <HeroSection />
      <FeaturedProducts products={products} />
      <NewsletterSignup />
    </main>
  );
};

export default Home;
