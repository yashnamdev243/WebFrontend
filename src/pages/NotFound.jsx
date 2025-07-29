// ===== NotFound.jsx =====
import React from "react";
import { Link } from "react-router-dom";
import { FrownOutlined } from "@ant-design/icons";

const NotFound = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center text-center p-6 ">
      <div className="text-yellow-500 animate-bounce">
        <FrownOutlined className="lg:text-8xl text-6xl" />
      </div>
      <h1 className="lg:text-6xl text-2xl font-bold text-gray-800 mt-4">404</h1>
      <p className="lg:text-lg text-gray-600 mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 lg:px-6 px-3 py-1 lg:py-2 lg:text-[16px] text-sm bg-yellow-400 text-white rounded-md shadow-md hover:bg-yellow-500 transition-all duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
