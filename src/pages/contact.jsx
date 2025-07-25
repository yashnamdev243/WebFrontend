

import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast, Toaster} from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { Select } from "antd";
//import FloatingParticles from "../components/FloatingParticles";

const { Option } = Select;

const tourOptions = [
  "Adi Kailash",
  "Kedarnath",
  "Char Dham Yatra",
  "Manimahesh Kailash",
  "Shrikhand Kailash",
  "Kinnaur Kailash",
  "Mansarovar Kailash"
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
    message: ""
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", contact: "", tour: "", message: "" });
        e.target.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-b from-[#06242e]  to-[#519596] text-gray-900 shadow-lg mx-auto relative p-8 md:p-30 ">
 {/* <FloatingParticles /> */}
      {/* Left Side (Content, Heading, Image) */}
      <div className="flex flex-col justify-center items-center text-center space-y-6">
        <h1 className="mt-12 text-2xl lg:text-5xl font-extrabold text-gray-300 animate-bounce">
          Your Spiritual Journey Starts with a Message
        </h1>
        <p className="text-sm lg:text-lg text-gray-400 animate-bounce">
          We’re here to guide you on your sacred journey. Contact us now!
        </p>
        <img src="/contact.png" alt="Top Decoration" className="w-30 lg:w-48 opacity-80 animate-pulse" />
      

      </div>

      {/* Right Side (Contact Form) */}
      <div className="flex justify-center">
        <form onSubmit={sendEmail} className="bg-gray-900 p-8 rounded-2xl  shadow-xl bg-opacity-80 backdrop-blur-lg max-w-xl w-full space-y-6">
          
          {/* Name Field */}
          <div className="relative">
            <label className="text-gray-400 lg:text-lg">Your Name</label>
            <FaUser className="absolute left-4 lg:top-11 top-10 text-gray-400 lg:text-lg text-sm" />
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-10 p-3 lg:text-lg text-sm rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-gray-400 outline-none shadow-md border border-gray-700 transition-all"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <label className="text-gray-400 lg:text-lg">Your Email</label>
            <FaEnvelope className="absolute left-4 lg:top-11 top-10 text-gray-400 lg:text-lg text-sm" />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-10 p-3  lg:text-lg text-sm rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-gray-400 outline-none shadow-md border border-gray-700 transition-all"
            />
          </div>

          {/* Contact Field */}
          <div className="relative">
            <label className="text-gray-400 lg:text-lg">Your Contact</label>
            <FaPhone className="absolute left-4 lg:top-11 top-10 text-gray-400 lg:text-lg text-sm" />
            <input
              type="tel"
              name="contact"
              placeholder="Enter Your Contact"
              required
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="w-full pl-10 p-3  lg:text-lg text-sm rounded-lg  bg-gray-800 text-white focus:ring-2 focus:ring-gray-400 outline-none shadow-md border border-gray-700 transition-all"
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <label className="text-gray-400 lg:text-lg ">Your Message</label>
            <textarea
              name="message"
              placeholder="Enter your message here..."
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3  lg:text-lg text-sm  rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-gray-400 outline-none shadow-md border border-gray-700 transition-all h-20"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className={`bg-gradient-to-r from-[#2592b7] to-[#16787a] text-white font-bold  px-4  text-xs md:text-lg py-3 rounded-lg shadow-lg transition-all transform ${
                hover ? "scale-110 shadow-xl" : "hover:scale-110 hover:shadow-lg"
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
  );
};

export default Contact;
