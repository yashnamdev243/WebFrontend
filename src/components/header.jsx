// import { FaHome, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TourDropdown from "../pages/TourDropdown";
import LogoComponent from "./LogoComponent";
import PhoneIcon from "./PhoneIcon";
import { NavLink } from "react-router-dom";
import Moblie_Navbar from "./Moblie_Navbar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {" "}
      <header
        className={`fixed lg:top-3 top-0 left-0 right-0 z-20 w-full md:w-9/10 mx-auto flex justify-between items-center lg:rounded-xl transition-all duration-300 px-4 ${
          isScrolled
          // ? "bg-gradient-to-r from-[#105859] via-[#116869] to-[#116869] text-white bg-opacity-80 backdrop-blur-md shadow-lg"
          // : "bg-transparent"
          // isScrolled
          //   ? "bg-gradient-to-r from-[#188687] via-[#188687] to-[#2592b7] text-white bg-opacity-80 backdrop-blur-md shadow-lg"
          //   : "bg-transparent"
        }`}
        style={{
          backgroundImage: isScrolled ? "url('/headerbg11.jpg')" : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <LogoComponent />
        </div>

        {/* Phone Icon */}
        <div className="ml-32">
          <PhoneIcon />
        </div>

        {/* <div className="h-6 w-[3px] text-white bg-white"></div> */}
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-15  items-right">
          <NavLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
              `text-xl font-italic text-white transition relative inline-block  font-semibold  before:absolute before:-bottom-[2px] before:left-1/2 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 ${
                isActive ? "underline underline-offset-6 decoration-2" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
              `text-xl font-italic text-white transition relative inline-block  font-semibold  before:absolute before:-bottom-[2px] before:left-1/2 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 ${
                isActive ? "underline underline-offset-6 decoration-2" : ""
              }`
            }
          >
            About Us
          </NavLink>

          <TourDropdown setIsOpen={setIsOpen} />

          <NavLink
            to="/blog"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
              `text-xl font-italic text-white transition relative inline-block  font-semibold  before:absolute before:-bottom-[2px] before:left-1/2 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 ${
                isActive ? "underline underline-offset-6 decoration-2" : ""
              }`
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
              `text-xl font-italic text-white transition relative inline-block  font-semibold  before:absolute before:-bottom-[2px] before:left-1/2 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 ${
                isActive ? "underline underline-offset-6 decoration-2" : ""
              }`
            }
          >
            Contact Us
          </NavLink>
        </nav>
      </header>
      {/* Mobile Menu Button */}
      <Moblie_Navbar />
    </>
  );
};

export default Header;
