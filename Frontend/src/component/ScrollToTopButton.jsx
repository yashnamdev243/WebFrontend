import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const toggleVisibility = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY > 200);

      setIsScrolledDown(currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    controls.start({ scale: [1, 1.4, 1], rotate: [0, 360] });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed lg:bottom-6 bottom-8 right-4 lg:right-6   bg-gradient-to-r from-[#e98948] to-[#4f342f]   text-white p-4 rounded-full shadow-xl transition-all 
      duration-300 focus:outline-none flex items-center justify-center 
      ${isScrolledDown ? "opacity-70 scale-90" : "opacity-100 scale-100"}
      z-[9999]`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      exit={{ opacity: 0, y: 50 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      onAnimationStartCapture={controls}
      data-aos="fade-up"
    >
      <FaArrowUp size={20} />
    </motion.button>
  );
};

export default ScrollToTopButton;
