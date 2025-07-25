import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { blogs } from "../Data/Blogs_data";
import { FaSearch, FaTimes } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mouseDownStates, setMouseDownStates] = useState({});
  const [filteredPosts, setFilteredPosts] = useState(blogs);
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = blogs.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchQuery]);


  // Function to handle mouse events
  const handleMouseDown = (id) => {
    setMouseDownStates((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseUp = (id) => {
    setMouseDownStates((prev) => ({ ...prev, [id]: false }));
  };
  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <div
        className="relative lg:h-[62vh] h-[55vh] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('/blokheadbg.avif')" }}
      >
         <h1 className="text-2xl mt-10 pb-2 font-bold md:text-5xl text-white drop-shadow-lg animate-glow">
            Our Travel Blog
          </h1>
        <p className="lg:text-lg text-sm mt-2 font-light">
          Find the best spiritual and adventure experiences
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto p-6 flex items-center justify-center relative">
        <div className="relative w-full md:w-3/4">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-3 pl-12 w-full border border-gray-300 rounded-full focus:ring-2 focus:ring-[#1F84A6] outline-none shadow-sm transition-all duration-300 hover:border-[#188689] fira-sans font-semibold"
          />
          {searchQuery && (
            <FaTimes
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-red-500 transition-all duration-300"
              onClick={() => setSearchQuery("")}
            />
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden transition duration-500 w-full max-w-[420px] hover:shadow-xl active:shadow-xl shadow-[#1f84a6]/30 group"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-60 object-cover group-hover:scale-105 group-active:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="lg:text-2xl  text-lg font-semibold text-[#1F84A6] transition duration-300">
                  {post.title}
                </h3>
                <p className="text-black mt-3 lg:text-[16px] text-sm leading-relaxed fira-sans">
                  {post.description}
                </p>
                <p className="text-[#1F84A6] lg:text-sm text-xs mt-3 fira-sans">
                  {post.date} • {post.author}
                </p>
                  <button
                   onMouseEnter={() => handleMouseDown(post.id)}
                   onMouseLeave={() => handleMouseUp(post.id)}
                    onClick={() => navigate(`/blog/${post.route}`)}
                    className="mt-3 flex border-1  lg:text-[16px] text-sm border-[#1F84A6] text-[#1F84A6]  items-center gap-x-2 px-5 py-3  font-medium rounded-lg hover:bg-[#1F84A6] active:bg-[#1F84A6] hover:text-white active:text-white transition duration-300 shadow-md fira-sans cursor-pointer"
                  >
                    Read More
                    <span className="transition duration-400 ease-in-out">
              {mouseDownStates[post.id] ? (
                <BsArrowUpRightCircleFill size={18} className="scale-110 opacity-100" />
              ) : (
                <FaCircleArrowRight size={18} className="scale-100 opacity-90" />
              )}
            </span>
                  </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg col-span-full">
            No posts available.
          </p>
        )}
      </div>

      {/* ) : (
          <p className="text-center text-gray-500 text-lg">
            No blogs found for "{searchQuery}"
          </p>
        )}
      </div> */}
    </div>
  );
};

export default BlogPage;
