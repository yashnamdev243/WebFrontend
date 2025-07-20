// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       const response = await axios.post("https://bkl.gxpro.co.in/admin/login", {
//         email,
//         password,
//       });
//       if (response.data.success) {
//         localStorage.setItem("adminToken", response.data.token);
//         navigate("/admin/dashboard");
//       } else {
//         setError("Invalid credentials");
//       }
//     } catch (error) {
//       setError("Login failed. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-sky-200">
//       <div className="  grid grid-cols-2 rounded-lg  shadow-md ">
//         <div className=" bg-sky-300  p-6  w-96">
//         <img src="/career1.png" alt="Pharma Research" className="w-32 h-32 md:w-80 md:h-80 mb-4 rounded-full" />
//         </div>
//       <div className="bg-gray-100  p-6 pt-15  w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

// import React, { useEffect, useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import styles from "./AdminLogin.module.css"; // Import the CSS Module
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const AdminLogin = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await toast.promise(
//         axios.post("https://bkl.gxpro.co.in/admin/login", {
//           email,
//           password,
//         }),
//         {
//           pending: "Logging in...",
//           success: "Login successful!",
//         }
//       );
//       localStorage.setItem("authToken", response.data.token);
//       setTimeout(() => {
//         navigate("/admin-dashboard");
//       }, 500);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Login failed. Please try again."
//       );
//     }
//   };

//   return (
//     <div className={styles.loginContainer}>
//       <div className={styles.loginBox}>
//         <div>
//           <img
//             src="\MSGMP/GXPROLogo.png"
//             alt="MSGMP/GXPRO"
//             className={styles.logo}
//           />
//         </div>
//         <h2 className={styles.title}>Admin Login</h2>
//         <form>
//           <div className={styles.inputGroup}>
//             <label htmlFor="email" className={styles.label}>
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className={styles.inputField}
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className={`${styles.inputGroup} ${styles.passwordGroup}`}>
//             <label htmlFor="password" className={styles.label}>
//               Password
//             </label>
//             <input
//               type={passwordVisible ? "text" : "password"}
//               id="password"
//               className={styles.inputField}
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button
//               type="button"
//               className={styles.togglePassword}
//               onClick={togglePasswordVisibility}
//             >
//               {passwordVisible ? <FaEye size={15} /> : <FaEyeSlash size={15} />}
//             </button>
//           </div>
//           <button
//             type="submit"
//             onClick={handleLogin}
//             className={styles.submitBtn}
//           >
//             Login
//           </button>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ParticlesComponent from "../component/ParticlesComponent";

const AdminLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await toast.promise(
        axios.post("https://bkl.gxpro.co.in/admin/login", { email, password }),
        {
          pending: "Logging in...",
          success: "Login successful!",
        }
      );
      localStorage.setItem("authToken", response.data.token);
      setTimeout(() => {
        navigate("/admin-dashboard");
      }, 500);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <ParticlesComponent />
      <div className="w-full max-w-md bg-gray-50 p-6 rounded-lg shadow-2xl border-1 border-b-4 border-blue-900">
        <div className="flex justify-center">
          <img
            src="/MSGMP/GXPROLogo.png"
            alt="MSGMP/GXPRO"
            className="object-contain w-60 h-18 mb-4"
          />
        </div>
        <h2 className="text-2xl  font-semibold underline text-center text-gray-700 mb-6">
          Admin Login
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-2 mt-1 border border-gray-300 rounded "
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              className="w-full p-2 mt-1 border border-gray-300 rounded "
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEye size={15} /> : <FaEyeSlash size={15} />}
            </button>
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full p-2 mt-4 text-white cursor-pointer bg-gradient-to-r from-[#4682B4] to-[#04080B] rounded transition duration-300 "
          >
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
