import React, { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const PhoneIcon = () => {
  const phoneNumber = "+91 9691089549";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`mr-14 flex items-center justify-center h-10  p-2 rounded-full w-10 sm:w-50 text-white ${
        isScrolled
          ? "bg-gradient-to-l from-[#2e2b06]  to-[#ffcc70]  bg-opacity-80 shadow-lg"
          : "lg:border-2 lg:px-5 lg:py-2 lg:rounded-4xl lg:backdrop-blur-md bg-transparent"
      }`}

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Phone Icon with Motion */}
      <a
        href={`tel:${phoneNumber.replace(/\D/g, "")}`}
        className="flex items-center justify-center sm:gap-x-2"
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Number Hidden on Mobile */}
        <p className="hidden sm:block text-md font-semibold text-white tracking-wider text-nowrap">
          {phoneNumber}
        </p>
        <motion.span whileHover={{ scale: 1.2 }}>
          <FaPhone className="text-white text-xl" />
        </motion.span>
      </a>
    </motion.div>
  );
};

export default PhoneIcon;
