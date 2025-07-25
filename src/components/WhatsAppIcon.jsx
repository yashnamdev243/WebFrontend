


import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppIcon = () => {
  const phoneNumber = "919696187592"; // Replace with your number

  return (
    <div className="fixed bottom-6 right-4 md:bottom-8 md:right-6 lg:right-8 flex flex-col p-2 z-50">
      <motion.a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition cursor-pointer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-white text-2xl md:text-3xl" />
      </motion.a>
    </div>
  );
};

export default WhatsAppIcon;
