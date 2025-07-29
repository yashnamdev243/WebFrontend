import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { Select } from "antd";
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

const { Option } = Select;

const tourOptions = [
  "Adi Kailash",
  "Kedarnath",
  "Char Dham Yatra",
  "Manimahesh Kailash",
  "Shrikhand Kailash",
  "Kinnaur Kailash",
  "Mansarovar Kailash",
];

const SERVICE_ID = "service_4l6gq8l";
const TEMPLATE_ID = "template_f7vhbph";
const USER_ID = "zhJbSf_YRwbbc1hOg";

const Contact = () => {
  const [hover, setHover] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    tour: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          tour: "",
          message: "",
        });
        e.target.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-b from-[#2e2b06]  to-[#ffcc70] text-gray-900 shadow-lg mx-auto relative p-8 md:p-30 ">
        {/* <FloatingParticles /> */}
        {/* Left Side (Content, Heading, Image) */}
        <div className="flex flex-col justify-center items-center text-center space-y-5">
          <h1 className="lg:mt-12 mt-15 text-xl lg:text-4xl font-extrabold text-gray-300 animate-bounce">
            Connect with Namdev Narmadeshwar Shivling Arts
          </h1>
          <p className="text-sm lg:text-lg text-gray-400 animate-bounce">
            Your source for Narmadeshwar Shivlings and spiritual art.
          </p>
          <img
            src="/contacf.png"
            alt="Top Decoration"
            className="w-30 lg:w-48 opacity-80 animate-pulse"
          />
        </div>

        {/* Right Side (Contact Form) */}
        <div className="flex justify-center">
          <form
            onSubmit={sendEmail}
            className="bg-gray-200 p-8 rounded-2xl  shadow-xl bg-opacity-80 backdrop-blur-lg max-w-xl w-full space-y-6"
          >
            {/* Name Field */}
            <div>
              <h1 className="text-lg lg:text-2xl text-yellow-900 text-center font-semibold  ">
                Contact us now!
              </h1>
            </div>
            <div className="relative">
              <label className="text-yellow-700 lg:text-lg">Your Name</label>
              <FaUser className="absolute left-4 lg:top-11 top-10 text-gray-400 lg:text-lg text-sm" />
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full pl-10 p-3 lg:text-lg text-sm rounded-lg bg-gray-300 text-gray-400 focus:ring-2 focus:ring-gray-400 outline-none shadow-md border border-yellow-700 transition-all"
              />
            </div>

            {/* Email Field */}
            {/* <div className="relative">
            <label className="text-yellow-700 lg:text-lg">Your Email</label>
            <FaEnvelope className="absolute left-4 lg:top-11 top-10 text-gray-400 lg:text-lg text-sm" />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-10 p-3  lg:text-lg text-sm rounded-lg bg-gray-300 text-gray-400 focus:ring-2 focus:ring-gray-400 outline-none shadow-md border border-yellow-700 transition-all"
            />
          </div> */}

            {/* Contact Field */}
            <div className="relative">
              <label className="text-yellow-700 lg:text-lg">Your Contact</label>
              <FaPhone className="absolute left-4 lg:top-11 top-10 text-gray-400 lg:text-lg text-sm" />
              <input
                type="tel"
                name="contact"
                placeholder="Enter Your Contact"
                required
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
                className="w-full pl-10 p-3  lg:text-lg text-sm rounded-lg bg-gray-300 text-gray-400 focus:ring-2 focus:ring-gray-400 outline-none shadow-md border border-yellow-700 transition-all"
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <label className="text-yellow-700 lg:text-lg ">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Enter your message here..."
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-3  lg:text-lg text-sm  rounded-lg bg-gray-300 text-gray-400 focus:ring-2 focus:ring-gray-400 outline-none shadow-md border border-yellow-700 transition-all h-20"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className={`bg-gradient-to-l from-[#2e2b06]  to-[#ffcc70] text-white font-bold  px-4  text-xs md:text-lg py-3 rounded-lg shadow-lg transition-all transform ${
                  hover
                    ? "scale-110 shadow-xl"
                    : "hover:scale-110 hover:shadow-lg"
                }`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <FaPaperPlane className="inline-block mr-2" /> Send Message
              </button>
            </div>
          </form>
        </div>

        <Toaster position="top-center" />
      </div>
      <section className="min-h-screen py-12 bg-gradient-to-br from-[#fffdf9] to-[#f8f4f0] overflow-hidden">
        <div className="max-w-6xl mx-auto  px-4 lg:px-0  gap-16 items-start">
          <div className="space-y-4" data-aos="fade-right">
            <h2 className="lg:text-3xl text-2xl font-bold text-center py-2 text-white bg-gradient-to-l from-[#2e2b06]  to-[#ffcc70] lg:mb-4">
              Contact Us
            </h2>
            <p className="text-sm lg:text-lg px-2 text-gray-600 mt-10 mb-8 text-center animate-bounce">
              We’d love to hear from you. Whether you have a question, want to
              collaborate, or just want to say hi – our team is here.
            </p>

            {/* Quick Info Cards */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:mt-10 mt-4 lg:px-0  px-10">
              {/* Call Us */}
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group border  border-red-500  flex flex-col items-center text-cente">
                <PhoneOutlined className="text-3xl !text-red-500 group-hover:scale-110  transition-transform duration-300" />
                <p className="mt-3 text-lg  text-gray-800">Call Us</p>
                <a
                  href="tel:+919691089549"
                  className="text-sm text-red-600 block mt-1 cursor-pointer"
                >
                  +91 9691089549
                </a>
              </div>

              {/* Facebook */}
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group border  border-blue-500  flex flex-col items-center text-cente">
                <FacebookOutlined className="text-3xl !text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                <p className="mt-3 text-lg  text-gray-800">Facebook</p>
                <a
                  href="https://www.facebook.com/arvind.namdev.98096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 block mt-1 cursor-pointer"
                >
                  @Arvind Namdev
                </a>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group border  border-green-500  flex flex-col items-center text-cente">
                <WhatsAppOutlined className="text-3xl !text-green-500 group-hover:scale-110 transition-transform duration-300" />
                <p className="mt-3 text-lg  text-gray-800">WhatsApp</p>
                <a
                  href="https://wa.me/919691089549"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 block mt-1 cursor-pointer"
                >
                  Arvind Namdev
                </a>
              </div>

              {/* Instagram */}
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group border  border-pink-500  flex flex-col items-center text-cente">
                <InstagramOutlined className="text-3xl !text-pink-500 group-hover:scale-110 transition-transform duration-300" />
                <p className="mt-3 text-lg  text-gray-800">Instagram</p>
                <a
                  href="https://www.instagram.com/namdev_shivling_09?igsh=MWttZGpwNmlpd2I4cg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-pink-600 block mt-1 cursor-pointer"
                >
                  @namdev_shivling_09
                </a>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="mt-20 ">
            <h2 className="lg:text-3xl text-2xl font-bold text-center py-2 text-white bg-gradient-to-l from-[#2e2b06]  to-[#ffcc70] lg:mb-4 ">
              Our Location
            </h2>
            <p className="text-sm lg:text-lg px-2 text-gray-600 mt-10 mb-8 text-center animate-bounce">
              Visit Us at Namdev Narmadeshwar Shivling Arts – Easily Accessible
              on Google Maps for Your Divine Shopping Experience!
            </p>
          </div>
          <div className="mt-6 lg:px-0 px-4" data-aos="fade-up">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d622.3007286430195!2d75.84536085632806!3d22.169948918145355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396285fe663a371b%3A0xd15c87bf6c844939!2sNamdev%20Shivling%20Art!5e1!3m2!1sen!2sin!4v1753381937757!5m2!1sen!2sin"
              className="w-full h-80 rounded-lg shadow-lg"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
