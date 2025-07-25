import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { RiPinDistanceLine } from "react-icons/ri";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919696187592", "_blank");
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 max-w-4xl px-4"
      >
        <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-wide w-[90%] sm:w-[80%] md:w-[70%] mx-auto leading-tight [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">
          India’s First Panch Kailash Yatra Agency
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-4 text-md sm:text-sm md:text-lg lg:text-xl font-medium text-gray-200 [text-shadow:_0_5px_4px_rgb(0_0_0_/_0.8)]"
        >
          Himalayan Treks | Backpacking Trips | CharDham
        </motion.p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-5 sm:gap-10 justify-center items-center">
          {/* Plan Journey Button */}
          <button className="flex items-center gap-2 border-1 border-[#16787a] backdrop-blur-xs active:bg-gradient-to-r hover:bg-gradient-to-r from-[#2592b7] to-[#16787a] text-xs sm:text-sm md:text-lg text-white px-4 sm:px-5 py-3 sm:py-3 rounded-xl font-semibold cursor-pointer">
            <RiPinDistanceLine className="h-4 w-4 sm:h-5 sm:w-5" />
            Plan Your Journey
          </button>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3 rounded-xl text-xs sm:text-sm md:text-lg text-white bg-gradient-to-r from-[#2592b7] to-[#16787a] backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105  cursor-pointer"
          >
            <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5" />
            WhatsApp
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
