import {
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="bg-[#04080B] text-white py-12">
      <div className="container mx-auto lg:px-12 px-5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div data-aos="fade-up">
          <h3 className="lg:text-3xl text-xl font-bold text-gray-200">
            Contact Us
          </h3>
          <p className="mt-4  lg:text-lg text-gray-300">
            Have questions? We’re here to help.
          </p>
          <div className="mt-6 space-y-4">
            <p className="flex items-center justify-center md:justify-start space-x-4">
              <FaEnvelope className="text-[#4682B4] lg:text-2xl" />
              
              <a
                href="mailto:Info@msgmp.co.in"
                className="text-gray-300 hover:underline "
              >
                Info@msgmp.co.in
              </a>{" "}
              <a
                href="mailto:Info@gxpro.co.in"
                className="block text-gray-300 hover:underline "
              >
                Info@gxpro.co.in
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-3">
              <FaPhoneAlt className="text-[#4682B4] lg:text-2xl" />
              
              <>
                <a
                  href="tel:+919617770237"
                  className="block text-gray-300 hover:underline "
                >
                  +91 9617770237
                </a>
                <a
                  href="tel:+919691377578"
                  className="block text-gray-300 hover:underline  "
                >
                  +91 9691377578
                </a>
              </>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-4">
              <FaMapMarkerAlt className="text-[#4682B4] lg:text-3xl text-2xl mb-5" />
              <a
                href="https://maps.app.goo.gl/t1Ewtw1vwWQ7WQ4UA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline"
              >
                First Floor, 394, near Ratina Hospital PU-04, Vijay Nagar,
                Indore, Madhya Pradesh 452010
              </a>
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <h3 className="lg:text-3xl text-xl font-bold text-gray-200">
            Quick Links
          </h3>
          <ul className="mt-4 lg:text-lg space-y-2">
            <li>
              <button
                onClick={() => handleNavigation("/")}
                className="text-gray-300 hover:text-[#4682B4] transition"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/about")}
                className="text-gray-300 hover:text-[#4682B4] transition"
              >
                About Us
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNavigation("/gallery")}
                className="text-gray-300 hover:text-[#4682B4] transition"
              >
                Project Gallery
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/clientele")}
                className="text-gray-300 hover:text-[#4682B4] transition"
              >
                Clientele
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/blogs")}
                className="text-gray-300 hover:text-[#4682B4] transition"
              >
                Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/contact")}
                className="text-gray-300 hover:text-[#4682B4] transition"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
        <div data-aos="fade-up">
          <h3 className="lg:text-3xl text-xl font-bold text-gray-200">
            Certifications We Offer
          </h3>
          <p className="mt-4  lg:text-lg text-gray-300">
            Achieve industry-recognized certifications to ensure compliance and
            business credibility.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-4 ">
            <img
              src="/1.png"
              alt="Image 1"
              className="w-25 bg-[#FFFFFF] p-4 h-20"
            />
            <img src="/2.png" alt="Image 2" className="w-25 h-20" />
            <img src="/3.png" alt="Image 3" className="w-25 h-20" />
            <img src="/4.png" alt="Image 4" className="w-25 h-20" />
            <img src="/5.png" alt="Image 5" className="w-25 h-20" />
            <img src="/6.png" alt="Image 6" className="w-25 h-20" />
          </div>

          <div className="mt-6"></div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/company/msgmp-gxpro-pharma-project-consultant/?originalSubdomain=in"
            className="text-gray-300 hover:text-blue-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl" />
          </a>

          <a
            href="tel:+7024981155"
            className="text-gray-300 hover:text-red-400 transition"
          >
            <FaPhoneAlt className="text-2xl" />
          </a>

          <a
            href="https://wa.me/7024981155"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-500 transition"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
        </div>
        <p className="mt-4 text-gray-300 lg:text-sm text-xs">
          &copy; {new Date().getFullYear()} MSGMP Compliance Services. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
