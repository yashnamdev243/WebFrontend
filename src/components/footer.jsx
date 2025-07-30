import {
  PhoneOutlined,
  MailOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
  UserOutlined,
  MessageOutlined,
} from "@ant-design/icons";
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

        <div className="mt-4 grid md:grid-cols-3 gap-4 text-center md:text-center">
          <div>
            <h3 className="lg:text-2xl text-xl  font-bold text-[#ffcc70]">
              Store Address
            </h3>
            {/* Address */}
            <div className="flex justify-center md:justify-center">
              <div className="bg-gray-300 rounded-lg inline-block p-1 mb-2 mt-1  ">
                <img
                  src="/Namdevlogo.png"
                  alt="Namdev Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
            {/* <div className="flex items-start justify-center md:justify-center lg:space-x-[-20px]  space-x-[-5px]">
              <FaMapMarkerAlt className="text-[#ffcc70] text-2xl " />
              <p className="lg:text-lg text-sm  max-w-xs">
              Handcrafted Narmadeshwar Shivlings & Sacred Art for Peaceful Spaces
              </p>
            </div> */}
            {/* <div className="flex justify-center md:justify-center mt-2">
              <a
                href="mailto:arvindnamdev62@gmail.com"
                className="flex items-center space-x-2 text-lg hover:text-[#ffcc70] transition"
              >
                <FaMapMarkerAlt className="text-[#ffcc70] lg:text-xl text-sm lg:mb-9 mb-8" />
                <span className="lg:text-lg text-sm">
                  Bakawan , post - Mardana ,<br /> Teh -Barwaha , <br /> Dist
                  -Khargone (M.P) 451113
                </span>
              </a>
            </div> */}
            <div className="flex justify-center mt-2 px-4">
  <a
    href="mailto:arvindnamdev62@gmail.com"
    className="flex items-start gap-3 text-sm md:text-base lg:text-lg  hover:text-[#ffcc70] transition"
  >
    <FaMapMarkerAlt className="text-[#ffcc70] text-base md:text-lg lg:text-xl mt-1" />
    <span className="leading-relaxed">
      Bakawan, Post - Mardana,<br />
      Teh - Barwaha,<br />
      Dist - Khargone (M.P.) 451113
    </span>
  </a>
</div>

          </div>
          {/* <div>
            <h3 className="lg:text-2xl text-xl font-bold text-[#ffcc70]">
              Certified By{" "}
            </h3>
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
          </div> */}

          <div>
            <h3 className="lg:text-2xl text-xl  font-bold text-[#ffcc70]">
              Namdev Narmadeshwar Shivling Arts
            </h3>
            <p className="mt-2">
              <Link to="/" className=" hover:text-[#ffcc70] lg:text-lg text-sm">
                Home
              </Link>{" "}
            </p>
            <p className="mt-2 ">
              <Link
                to="/products"
                className=" hover:text-[#ffcc70] lg:text-lg text-sm"
              >
                Product
              </Link>{" "}
            </p>
            <p className="mt-2">
              <Link
                to="/about"
                className=" hover:text-[#ffcc70] lg:text-lg text-sm"
              >
                About Us
              </Link>{" "}
            </p>
            <p className="mt-2">
              {" "}
              <Link
                to="/contact"
                className=" hover:text-[#ffcc70] lg:text-lg text-sm"
              >
                Contact Us
              </Link>{" "}
            </p>
          </div>

          <div>
            <h3 className="lg:text-2xl text-xl  font-bold text-[#ffcc70]">
              {" "}
              Help & Support
            </h3>

            <div className="flex justify-center md:justify-center mt-3">
              <a
                href="tel:+919691089549"
                className="flex items-center space-x-2 text-lg hover:text-[#ffcc70] transition"
              >
                <FaPhone className="text-[#ffcc70] lg:text-lg text-sm" />
                <span className="lg:text-lg text-sm ">+91 96910-89549</span>
              </a>
            </div>
            <div className="flex justify-center md:justify-center mt-2">
              <a
                href="mailto:arvindnamdev62@gmail.com"
                className="flex items-center space-x-2 text-lg hover:text-[#ffcc70] transition"
              >
                <FaEnvelope className="text-[#ffcc70] lg:text-lg text-sm" />
                <span className="lg:text-lg text-sm">
                  arvindnamdev62@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-center space-x-6 mt-8">
          <a
            href="https://www.facebook.com/arvind.namdev.98096"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined className="!text-blue-500 lg:text-3xl text-xl cursor-pointer transition animate-pulse" />
          </a>
          {/* <FaTwitter className="text-gray-400 hover:text-blue-400 text-3xl cursor-pointer transition" /> */}
          <a
                  href="tel:+919691089549"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PhoneOutlined className="!text-red-500 lg:text-3xl text-xl cursor-pointer transition animate-pulse" />
          </a>
          <a
          href="https://wa.me/919691089549"

            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppOutlined className="!text-green-500 lg:text-3xl text-xl cursor-pointer transition animate-pulse" />
          </a>

          {/* <FaInstagram className="text-gray-400 hover:text-pink-500 text-3xl cursor-pointer transition" /> */}
          <div className="relative inline-block">
            <a
              href="https://www.instagram.com/namdev_shivling_09?igsh=MWttZGpwNmlpd2I4cg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramOutlined className="!text-pink-500 lg:text-3xl text-xl cursor-pointer transition animate-pulse" />
            </a>

            {/* <span className="absolute -top-3 -right-5 text-xs bg-pink-500 text-white px-1.5 py-0.5 rounded-full animate-pulse font-semibold shadow-sm">
              1.5L+
            </span> */}
          </div>
        </div>
        <h1 className="my-5 fira-sans flex justify-center items-center gap-x-1 lg:text-lg text-[9px] text-[#ffcc70]">
          Handcrafted Narmadeshwar Shivlings & Sacred Art for Peaceful Spaces
        </h1>
        <div className="text-[#ffcc70]/50">
          <hr />
        </div>

        <p className="mt-5 fira-sans flex justify-center items-center gap-x-1 lg:text-lg text-[9px] text-gray-500">
          <FaRegCopyright />
          All Rights Reserved {new Date().getFullYear()} by{" "}
          <Link to="/" className="text-[#ffcc70]/50 font-semibold">
            Namdev Narmadeshwar Shivling Arts
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
