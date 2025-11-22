import Logo from "/namdevshivling.png";
import { Link } from "react-router-dom";

function LogoComponent() {
  return (
    <div className="flex items-center justify-center">
      <Link to="/admin-login">
        <img 
          src={Logo} 
          alt="Company official logo" 
          className="w-16 sm:w-24 md:w-24 h-auto object-contain"
        />
      </Link>
    </div>
  );
}

export default LogoComponent;




// import Logo from "/Namdevlogo.png";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// function LogoComponent() {
//     const [isScrolled, setIsScrolled] = useState(false);
  
//     useEffect(() => {
//       const handleScroll = () => {
//         setIsScrolled(window.scrollY > 120);
//       };
//       window.addEventListener("scroll", handleScroll);
//       return () => window.removeEventListener("scroll", handleScroll);
//     }, []);
  
//   return (
//     <div className="flex items-center justify-center rounded-full  bg-white ">
//        <motion.div
//       className={` flex items-center justify-center p-1 rounded-full text-white ${
//         isScrolled
//           ? "bg-gradient-to-r from-[#ffcc70] to-[#ff8c00]   bg-opacity-80  leading-tight"
//           : " lg:rounded-full  bg-transparent "
//       }`}

//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Link to="/" >
//         <img 
//           src={Logo} 
//           alt="Company official logo" 
//           className="w-12 sm:w-20 md:w-20 h-auto object-contain"
//         />
//       </Link>
//       </motion.div>
//     </div>
//   );
// }

// export default LogoComponent;

