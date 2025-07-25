import {
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaRegCopyright,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0A141E]  text-white py-6">
      <div className="container mx-auto px-6">
        {/* Heading Section */}

        {/* <p className=" mb-10 text-3xl text-center text-gray-400">
            Feel free to reach out for any inquiries or assistance.
          </p> */}

        <div className="mt-4 grid md:grid-cols-4 gap-4 text-center md:text-center">
          <div>
            <h3 className="lg:text-2xl text-xl font-bold text-[#38a3c7]">
              Address
            </h3>
            {/* Address */}
            <div className="flex justify-center md:justify-center">
              <img src="/Logo.png" width="120" alt="Image 2"></img>
            </div>
            <div className="flex items-start justify-center md:justify-center space-x-0 ">
              <FaMapMarkerAlt className="text-[#38a3c7] text-2xl mt-1" />
              <p className="lg:text-lg text-sm  max-w-xs">
                Y-125, New Pathak Pura, <br /> Gwalior Road, Orai - 285001,{" "}
                <br />
                Uttar Pradesh
              </p>
            </div>
          </div>
          <div>
            <h3 className="lg:text-2xl text-xl font-bold text-[#38a3c7]">
              Certified By{" "}
            </h3>
            {/* Address */}
            <div className="flex justify-center md:justify-center">
              <div className="flex justify-center md:justify-center mt-2">
                <img
                  src="/msme-logo.png"
                  width="80"
                  alt="Image 2"
                  className="mx-2"
                ></img>
              </div>
            </div>
            <div className="flex items-start justify-center md:justify-center space-x-0 ">
              <p className=" mt-2 lg:text-lg text-sm  max-w-xs">
                Ministry of Micro, Small and Medium Enterprises (MSME)
              </p>
            </div>
          </div>

          <div>
            <h3 className="lg:text-2xl text-xl  font-bold text-[#38a3c7]">
              Spiritual Hikes
            </h3>
            <p className="mt-2">
              <Link to="/" className=" hover:text-[#38a3c7] lg:text-lg text-sm">
                Home
              </Link>{" "}
            </p>
            <p className="mt-2 ">
              <Link
                to="/blog"
                className=" hover:text-[#38a3c7] lg:text-lg text-sm"
              >
                Blogs
              </Link>{" "}
            </p>
            <p className="mt-2">
              <Link
                to="/about"
                className=" hover:text-[#38a3c7] lg:text-lg text-sm"
              >
                About Us
              </Link>{" "}
            </p>
            <p className="mt-2">
              {" "}
              <Link
                to="/contact"
                className=" hover:text-[#38a3c7] lg:text-lg text-sm"
              >
                Contact Us
              </Link>{" "}
            </p>
          </div>

          <div>
            <h3 className="lg:text-2xl text-xl  font-bold text-[#38a3c7]">
              {" "}
              Help & Support
            </h3>

            <div className="flex justify-center md:justify-center mt-3">
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-2 text-lg hover:text-[#38a3c7] transition"
              >
                <FaPhone className="text-[#38a3c7] lg:text-lg text-sm" />
                <span className="lg:text-lg text-sm ">+91 9696-187-592</span>
              </a>
            </div>
            <div className="flex justify-center md:justify-center mt-2">
              <a
                href="mailto:spiritualhikesteam@gmail.com"
                className="flex items-center space-x-2 text-lg hover:text-blue-300 transition"
              >
                <FaEnvelope className="text-blue-300 lg:text-lg text-sm" />
                <span className="lg:text-lg text-sm">
                  spiritualhikesteam@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-center space-x-6 mt-8">
          <FaFacebook className="text-gray-400 hover:text-blue-500 lg:text-3xl text-xl cursor-pointer transition" />
          {/* <FaTwitter className="text-gray-400 hover:text-blue-400 text-3xl cursor-pointer transition" /> */}
          <a
            href="https://x.com/spiritualhike?t=bpekgmKvP0Vx7XcCNNnqVA&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-gray-400 hover:text-blue-400 lg:text-3xl text-xl cursor-pointer transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/spiritual-hikes-451255353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-gray-400 hover:text-blue-600 lg:text-3xl text-xl cursor-pointer transition" />
          </a>

          {/* <FaInstagram className="text-gray-400 hover:text-pink-500 text-3xl cursor-pointer transition" /> */}
          <div className="relative inline-block">
            <a
              href="https://www.instagram.com/SpiritualHikes.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-gray-400 hover:text-pink-500 lg:text-3xl text-xl cursor-pointer transition" />
            </a>

            <span className="absolute -top-3 -right-5 text-xs bg-pink-500 text-white px-1.5 py-0.5 rounded-full animate-pulse font-semibold shadow-sm">
              1.5L+
            </span>
          </div>
        </div>
        <h1 className="mt-5 fira-sans flex justify-center items-center gap-x-1">
          <FaRegCopyright />
          All Rights Reserved {new Date().getFullYear()} by{" "}
          <Link to="/" className="text-[#38a3c7] font-semibold">
            Spiritual Hikes
          </Link>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
