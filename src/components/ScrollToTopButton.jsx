

// import { useState, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { FaArrowUp } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isScrolledDown, setIsScrolledDown] = useState(false);
//   const controls = useAnimation();

//   useEffect(() => {
//     AOS.init({ duration: 1400 });
//     AOS.refresh();
//   }, []);

//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const toggleVisibility = () => {
//       const currentScrollY = window.scrollY;
//       setIsVisible(currentScrollY > 200);

//       // Check if the user is scrolling down
//       setIsScrolledDown(currentScrollY > lastScrollY);
//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     controls.start({ scale: [1, 1.4, 1], rotate: [0, 360] });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <motion.button     

//       onClick={scrollToTop}
//       className={`fixed bottom-30 right-6 bg-[#7e69cc] text-white p-4 rounded-full shadow-xl transition-all 
//       duration-300 hover:bg-[#5e4cb0] focus:outline-none flex items-center justify-center 
//       ${isScrolledDown ? "opacity-70 scale-90" : "opacity-100 scale-100"}
//       z-[9999]`}  // ✅ सबसे ऊपर लाने के लिए z-index सेट किया

//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
//       exit={{ opacity: 0, y: 50 }}
//       whileHover={{ scale: 1.2 }}
//       whileTap={{ scale: 0.8 }}
//       onAnimationStartCapture={controls}
//       data-aos="fade-up"
//     >
//       <FaArrowUp size={20} />
      
//     </motion.button>
//   );
// };

// export default ScrollToTopButton;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-25 right-4 flex flex-col transition-all p-4 z-50">
      {isVisible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center justify-center w-16 h-16 bg-[#7e69cc] rounded-full shadow-lg hover:bg-[#5e4cb0] transition cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="text-white text-3xl" />
        </motion.button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
