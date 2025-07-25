// import React from "react";
// import { FaWhatsapp, FaPhone } from "react-icons/fa";

// const ContactIcons = () => {
//   const phoneNumber = "+919876543210"; // Replace with your number

//   return (
//     <div style={styles.container}>
//       {/* WhatsApp Icon */}
//       <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" style={styles.icon}>
//         <FaWhatsapp size={50} color="#25D366" />
//       </a>

//       {/* Phone Dialer Icon */}
//       <a href={`tel:${phoneNumber}`} style={styles.icon}>
//         <FaPhone size={50} color="#007AFF" />
//       </a>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     position: "fixed",
//     bottom: "20px",
//     right: "20px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },
//   icon: {
//     textDecoration: "none",
//     transition: "transform 0.2s ease-in-out",
//   },
// };

// export default ContactIcons;


// import React from "react";
// import { FaWhatsapp, FaPhone } from "react-icons/fa";
// import { motion } from "framer-motion";

// const ContactIcons = () => {
//   const phoneNumber = "+919876543210"; // Replace with your number

//   return (
//     <div className="fixed bottom-6 right-6 flex flex-col gap-4">
//       {/* WhatsApp Icon */}
//       <motion.a
//         href={`https://wa.me/${phoneNumber}`}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition"
//         whileHover={{ scale: 1.1, rotate: 5 }}
//         whileTap={{ scale: 0.9 }}
//         data-aos="zoom-in"
//       >
//         <FaWhatsapp className="text-white text-4xl" />
//       </motion.a>

//       {/* Phone Dialer Icon */}
//       <motion.a
//         href={`tel:${phoneNumber}`}
//         className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition"
//         whileHover={{ scale: 1.1, rotate: -5 }}
//         whileTap={{ scale: 0.9 }}
//         data-aos="zoom-in"
//       >
//         <FaPhone className="text-white text-3xl" />
//       </motion.a>
//     </div>
//   );
// };

// export default ContactIcons;

