import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { CartProvider } from "../context/CartContext";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/Footer";
import Preloader from "../components/Preloader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  return (
    <SessionProvider session={pageProps.session}>
      <CartProvider>
        <AnimatePresence mode="wait">
          {loading ? (
            <Preloader onComplete={() => setLoading(false)} />
          ) : (
            <motion.div
              className="w-full bg-green-80"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <main>
                <Navbar />
                <div className="w-screen min-h-screen mx-auto px-0">
                  <Component {...pageProps} />
                </div>
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </CartProvider>
    </SessionProvider>
  );
}

export default MyApp;
