import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaPaperPlane,
  FaSignInAlt,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
// import LogoComponent from "../components/LogoComponent";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Example hardcoded credentials
    if (email === "admin@shivling.com" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <form
        onSubmit={handleLogin}
        className="bg-gradient-to-r from-[#ffcc70] to-[#ff8c00] p-8 rounded-2xl  shadow-xl bg-opacity-80 backdrop-blur-lg max-w-120 w-full  "
      >
       
          {/* <LogoComponent /> */}
          <div className="flex justify-center ">
                <div    
                     
                      className="
                        w-32 h-32 rounded-full text-orange-700 font-medium text-sm
                        bg-[#0A141E]
                        shadow-md border-4 border-white "
                    >
                      <img 
              src="/namdevshivling.png" 
              alt="icon" 
              className="w-32 h-32 object-contain"
            />
                    
        </div>
        </div>
        <h2 className="text-lg lg:text-2xl text-white text-center font-semibold leading-tight [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)] mt-2">
          Admin Login
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}
        <div className="relative pt-6">
          <label className="text-white lg:text-lg font-semibold leading-tight [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">Email</label>
          <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 mt-[18px] text-orange-500 lg:text-lg text-sm" />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full pl-10 pr-10 p-3 lg:text-lg text-sm rounded-lg bg-gray-100 text-gray-400 focus:ring-2 focus:ring-gray-400 outline-none shadow-md border border-yellow-700 transition-all mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative pt-6">
          <label className="text-white lg:text-lg font-semibold leading-tight [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">
            Password
          </label>
          <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 mt-4 text-orange-500 lg:text-lg text-sm" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full pl-10 pr-10 p-3 lg:text-lg text-sm rounded-lg bg-gray-100 text-gray-400 focus:ring-2 focus:ring-gray-400 outline-none shadow-md border border-yellow-700 transition-all mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Eye Icon */}
          <span
            className="absolute right-4 top-1/2 transform -translate-y-1/2 mt-4  cursor-pointer text-orange-500 text-lg"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className={`bg-gradient-to-r from-[#ffcc70] to-[#ff8c00] text-white font-semibold  px-4  text-xs md:text-lg py-2 rounded-lg shadow-lg transition-all transform leading-tight [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)] ${
              hover ? "scale-110 shadow-xl" : "hover:scale-110 hover:shadow-lg"
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {" "}
            <FaSignInAlt className="inline-block mr-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" />
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
