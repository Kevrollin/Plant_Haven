"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const reviews = [
  { text: "Absolutely love my plants! They arrived in perfect condition and are thriving.", author: "Sarah W." },
  { text: "Fast delivery and excellent quality! Will definitely order again.", author: "Mark T." },
  { text: "Great customer service and beautiful plants. Highly recommended!", author: "Emily R." },
  { text: "My house feels so fresh with these plants. A wonderful experience!", author: "David L." },
  { text: "Fast delivery and excellent quality! Will definitely order again.", author: "Mark T." },
  { text: "Great customer service and beautiful plants. Highly recommended!", author: "Emily R." },
  { text: "My house feels so fresh with these plants. A wonderful experience!", author: "David L." },
  { text: "Best place to buy plants online. The quality is top-notch!", author: "Sophia K." },
  { text: "Fast delivery and excellent quality! Will definitely order again.", author: "Mark T." },
  { text: "Great customer service and beautiful plants. Highly recommended!", author: "Emily R." },
  { text: "My house feels so fresh with these plants. A wonderful experience!", author: "David L." },
];

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-green-100 py-20 flex flex-col items-center text-center  pt-48">
        <div className="absolute inset-0">
         
        </div>
        <div className="relative z-10 max-w-5xl sm:px-28 lg:px-0">
          <h1 className="text-6xl p-3 font-bold text-green-800">Bringing Nature Closer to You 🌿</h1>
          <p className="mt-4 text-lg text-2xl text-gray-700 p-3">
            Our passion for plants drives us to deliver the best selection of houseplants, making homes greener and lives healthier.
          </p>
          <div className="mt-6 p-3">
            <Link href="/shop" className="px-6 py-3 bg-green-600 hover:bg-green-900 text-white font-semibold rounded-md">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-xl text-center md:text-left flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 lg:px-0 sm:px-28">
          <h2 className="text-6xl font-bold text-green-800"><span className="text-gray-900">Our</span> Story</h2>
          <p className="mt-4 text-gray-700">
            We started our journey with a simple mission: to make plant ownership easy and enjoyable. Every plant in our collection is handpicked with care, ensuring you receive only the healthiest and most beautiful greenery.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image src="/images/snake-plant.jpg" alt="Our Story" width={500} height={300} className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="bg-green-50 lg:py-28 lg:px-0 sm:px-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800">Mission & Values</h2>
          <p className="mt-4 text-gray-700">We strive to make plant ownership easy, enjoyable, and accessible to everyone.</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <span className="text-4xl">🌱</span>
              <h3 className="font-bold mt-3">Sustainability</h3>
              <p className="text-sm text-gray-600">Eco-friendly and ethical sourcing.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <span className="text-4xl">💚</span>
              <h3 className="font-bold mt-3">Quality Assurance</h3>
              <p className="text-sm text-gray-600">Only the healthiest, best plants.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <span className="text-4xl">📦</span>
              <h3 className="font-bold mt-3">Convenient Delivery</h3>
              <p className="text-sm text-gray-600">Hassle-free doorstep delivery.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <span className="text-4xl">🏡</span>
              <h3 className="font-bold mt-3">Expert Advice</h3>
              <p className="text-sm text-gray-600">Helping you grow with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-28 lg:px-0 sm:px-28 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-800">What We Offer</h2>
        <p className="mt-4 text-gray-700">Benefits of buying shopping with us.</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-2 gap-6">
          <div className="p-6 bg-green-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">✔️ Wide Variety</h3>
            <p className="text-sm text-gray-700">From succulents to large indoor plants.</p>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">✔️ Healthy & Thriving</h3>
            <p className="text-sm text-gray-700">Well-maintained and carefully selected plants.</p>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">✔️ Fast Nationwide Delivery</h3>
            <p className="text-sm text-gray-700">Safe and secure doorstep delivery.</p>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">✔️ Expert Care Tips</h3>
            <p className="text-sm text-gray-700">Get guidance to help your plants thrive.</p>
          </div>
        </div>
      </section>




      <section className="bg-green-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-800">Customer Reviews</h2>

        <div className="mt-8 overflow-hidden relative">
          <motion.div
            className="flex space-x-6"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="min-w-[300px] p-6 bg-white rounded-lg shadow-md text-left">
                <p className="text-gray-700">&quot;{review.text}&quot</p>
                <p className="mt-3 font-semibold">- {review.author}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    
      {/* Call-to-Action */}
      <section className="py-28 px-6 text-center bg-green-50">
        <h2 className="text-3xl font-bold text-green-800">Ready to bring nature into your space?</h2>
        <p className="mt-4 text-gray-700">Browse our collection today and find the perfect plant for your home.</p>
        <div className="mt-6">
          <Link href="/shop" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md mx-2">
            Shop Now
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold rounded-md mx-2">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
