import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaBlog,
} from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaPeopleCarryBox } from "react-icons/fa6";

const Moblie_Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".mobile-menu")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-white text-3xl focus:outline-none fixed top-4 right-5 z-30"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RxCross1 color="black" size={20} /> : <CiMenuFries />}
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden z-20 mobile-menu ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-start space-y-4 pt-16 px-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold text-gray-800 hover:text-blue-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaHome /> Home
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-2 text-lg font-semibold text-gray-800 hover:text-blue-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaInfoCircle /> About Us
          </Link>


          <Link
            to="/products"
            className="flex items-center gap-2 text-lg font-semibold text-gray-800 hover:text-blue-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaPeopleCarryBox /> Products
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-2 text-lg font-semibold text-gray-800 hover:text-blue-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaPhoneAlt /> Contact Us
          </Link>
        </nav>
      </div>

      {/* Overlay for dimming background when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-grey-700 opacity-50 z-10 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Moblie_Navbar;
