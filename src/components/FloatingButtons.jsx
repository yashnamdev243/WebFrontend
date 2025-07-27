

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const FloatingButtons = () => {
  const phoneNumber = "+919691089549"; // Replace with your number
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-3 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 flex flex-col gap-3 md:gap-4 transition-all p-2 z-50">
      {/* WhatsApp Button */}
      {isVisible && (
        <motion.a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp className="text-white text-2xl md:text-3xl" />
        </motion.a>
      )}

      {/* Scroll to Top Button */}
      {isVisible && (
        <motion.button
          onClick={scrollToTop}

            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-l from-[#2e2b06]  to-[#ffcc70] rounded-full shadow-lg  transition cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="text-white text-xl md:text-2xl" />
        </motion.button>
      )}
    </div>
  );
};

export default FloatingButtons;
