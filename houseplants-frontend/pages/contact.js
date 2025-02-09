"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Importing Real Logos

const ContactPage = () => {
  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-green-50">
      {/* 🌿 Hero Section */}
      <motion.section
        className="bg-green-300 text-white text-center py-16 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mt-28">Get in Touch!</h1>
        <p className="mt-4 text-lg">We’re here to help! Reach out to us anytime.</p>
      </motion.section>

      {/* 📞 Contact Details */}
      <motion.section
        className="flex flex-col py-16 px-6 text-center lg:px-48 sm:px-28"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="container mx-auto text-3xl font-bold text-green-800">Contact Details</h2>
        <p className="container mx-auto mt-4 text-gray-700">You can contact us through any of the following ways:</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {/* Phone */}
          <motion.div
            className="p-6 bg-green-50 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-green-800">📞 Phone</h3>
            <p className="mt-2 text-gray-700">+1 234 567 890</p>
          </motion.div>

          {/* Email */}
          <motion.div
            className="p-6 bg-green-50 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-green-800">📧 Email</h3>
            <p className="mt-2 text-gray-700">support@plantstore.com</p>
          </motion.div>

          {/* Location */}
          <motion.div
            className="p-6 bg-green-50 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-green-800">📍 Location</h3>
            <p className="mt-2 text-gray-700">123 Green Street, Plant City, Earth</p>
          </motion.div>
        </div>
      </motion.section>

      {/* ✉️ Contact Form */}
      <motion.section
        className="py-16 px-6 bg-green-50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-green-800 text-center">Send Us a Message</h2>
        <p className="mt-4 text-center text-gray-700">We'd love to hear from you. Fill out the form below.</p>

        <div className="mt-8 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea
                name="message"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-600 text-white py-3 rounded-md font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>

      {/* 🌍 Social Media Links */}
      <motion.section
        className="py-16 px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-green-800">Follow Us on Social Media</h2>
        <p className="mt-4 text-gray-700">Stay updated with our latest offers and new arrivals!</p>
        <div className="mt-6 flex justify-center gap-6">
          <Link href="https://facebook.com/plantstore" target="_blank">
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaFacebook className="text-blue-600 text-3xl hover:scale-110 transition-transform" />
            </motion.div>
          </Link>
          <Link href="https://instagram.com/plantstore" target="_blank">
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaInstagram className="text-pink-500 text-3xl hover:scale-110 transition-transform" />
            </motion.div>
          </Link>
          <Link href="https://twitter.com/plantstore" target="_blank">
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaTwitter className="text-blue-400 text-3xl hover:scale-110 transition-transform" />
            </motion.div>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
