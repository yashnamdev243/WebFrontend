import ServiceDropdown from "../pages/ServiceDropdown";
import { NavLink } from "react-router-dom";

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Home } from "react-feather";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillHome } from "react-icons/ai";
import { MdContactMail, MdGroups, MdPhotoLibrary } from "react-icons/md";
import { FaBlog, FaHandshake } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 170) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    console.log("FUNCTION CALLED");
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = mobileOpen ? "auto" : "hidden";
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
    setSubDropdownOpen(null);
  };

  const toggleSubDropdown = (submenu) => {
    setSubDropdownOpen(subDropdownOpen === submenu ? null : submenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
        setSubDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed left-0 h-15 md:h-auto md:w-4/5 md:rounded-lg   w-full lg:top-3 mx-auto right-0 flex justify-between items-center z-150 transition-all border-b-2 border-blue-900 duration-300 bg-white shadow-2xl 
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center ">
        <Link to="/" className="flex items-center">
          <img
            src="/MSGMP/GXPROLogo.png"
            alt="Company Logo"
            className="md:w-60 w-40 "
             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </Link>

        <nav className="hidden md:flex space-x-6 a  items-center  text-black">
          <NavLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
              `relative text-lg font-semibold transition-all duration-300 ease-in-out flex items-center gap-2 
        hover:scale-110 hover:text-blue-900 
        after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-900 after:left-0 after:bottom-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100
        ${isActive ? "text-blue-900 after:scale-x-100" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
              `relative text-lg font-semibold transition-all duration-300 ease-in-out flex items-center gap-2 
        hover:scale-110 hover:text-blue-900 
        after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-900 after:left-0 after:bottom-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100
        ${isActive ? "text-blue-900 after:scale-x-100" : ""}`
            }
          >
            About Us
          </NavLink>

          <ServiceDropdown />

          <NavLink
            to="/gallery"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
              `relative text-lg font-semibold transition-all duration-300 ease-in-out flex items-center gap-2 
        hover:scale-110 hover:text-blue-900
        after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-900 after:left-0 after:bottom-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100
        ${isActive ? "text-blue-900 after:scale-x-100" : ""}`
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/clientele"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
              `relative text-lg font-semibold transition-all duration-300 ease-in-out flex items-center gap-2 
        hover:scale-110 hover:text-blue-900 
        after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-900 after:left-0 after:bottom-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100
        ${isActive ? "text-blue-900 after:scale-x-100" : ""}`
            }
          >
            Clientele{" "}
          </NavLink>

          <NavLink
            to="/blogs"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
              `relative text-lg font-semibold transition-all duration-300 ease-in-out flex items-center gap-2 
        hover:scale-110 hover:text-blue-900
        after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-900 after:left-0 after:bottom-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100
        ${isActive ? "text-blue-900 after:scale-x-100" : ""}`
            }
          >
            Blog{" "}
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
              `relative text-lg font-semibold transition-all duration-300 ease-in-out flex items-center gap-2 
        hover:scale-110 hover:text-blue-900
        after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-900 after:left-0 after:bottom-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100
        ${isActive ? "text-blue-900 after:scale-x-100" : ""}`
            }
          >
            Contact Us
          </NavLink>
          {/* 
          <NavLink
            to="/career"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
              `relative text-lg font-semibold transition-all duration-300 ease-in-out flex items-center gap-2 
        hover:scale-110 hover:text-blue-900
        after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-900 after:left-0 after:bottom-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100
        ${isActive ? "text-blue-900 after:scale-x-100" : ""}`
            }
          >
            Career{" "}
          </NavLink> */}
        </nav>

        <button
          onClick={toggleDrawer}
          className="md:hidden text-black focus:outline-none"
        >
          {mobileOpen ? (
            <X className="h-0 w-0" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          onClick={toggleDrawer}
          className="fixed inset-0 bg-opacity-50 z-50 flex justify-end"
        >
          <div className="w-72 bg-white h-full shadow-lg p-6 flex flex-col">
            <button onClick={toggleDrawer} className="self-end mb-4">
              <X className="h-6 w-8 border-1 bg- rounded-sm  text-black" />
            </button>
            <Link
              to="/"
              onClick={() => {
                toggleDrawer();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className=" flex items-center gap-3 py-2 text-gray-900 text-lg  font-semibold hover:bg-gray-200 hover:text-blue-600 rounded"
            >
              <AiFillHome className="text-xl" />
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => {
                toggleDrawer();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className=" flex items-center gap-2 py-2 text-gray-900 text-lg  font-semibold hover:bg-gray-200 hover:text-blue-600 rounded"
            >
              {" "}
              <MdGroups className="text-2xl" />
              About Us
            </Link>

            <div
              ref={dropdownRef}
              className="py-2 text-gray-900 text-lg  font-semibold hover:bg-gray-200 rounded hover:text-blue-600"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown("service");
              }}
            >
              <ServiceDropdown toggleDrawer={toggleDrawer} />
            </div>

            <Link
              to="/gallery"
              onClick={() => {
                toggleDrawer();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className=" flex items-center gap-2 py-2 text-gray-900 text-lg  font-semibold hover:bg-gray-200 rounded hover:text-blue-600"
            >
              {" "}
              <MdPhotoLibrary className="text-xl" />
              Gallery
            </Link>
            <Link
              to="/clientele"
              onClick={() => {
                toggleDrawer();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className=" flex items-center gap-2 py-2 text-gray-900 text-lg  font-semibold hover:bg-gray-200 rounded hover:text-blue-600"
            >
              {" "}
              <FaHandshake className="text-xl" />
              Clientele
            </Link>
            <Link
              to="/blogs"
              onClick={() => {
                toggleDrawer();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className=" flex items-center gap-2 py-2 text-gray-900 text-lg   font-semibold hover:bg-gray-200 rounded hover:text-blue-600"
            >
              {" "}
              <FaBlog className="text-xl" />
              Blogs
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                toggleDrawer();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className=" flex items-center gap-2 py-2 text-gray-900 text-lg  font-semibold hover:bg-gray-200 rounded hover:text-blue-600"
            >
              {" "}
              <MdContactMail className="text-xl" />
              Contact Us
            </Link>
            {/* <Link
              to="/career"
              onClick={() => {
                toggleDrawer();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
                            className="py-2 text-gray-700  font-semibold hover:bg-gray-200 rounded hover:text-blue-600"
            >
              Career 
            </Link> */}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
