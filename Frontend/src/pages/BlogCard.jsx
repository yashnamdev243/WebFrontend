import React from "react";
import PropTypes from 'prop-types';

const BlogCard = ({ blog, index, onReadMore }) => (
  <div
    className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <div className="relative overflow-hidden h-80">
      <img
        // src={blog.image}
        src={blog.image || blog.banner_photo}

        alt={blog.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        loading="lazy"
        onError={(e) => {
          e.target.src = '/blog-placeholder.jpg';
          
        }}
      />
    </div>

    <div className="p-6">
      <div className="flex justify-between items-center mb-2">
        <span className="lg:text-[16px] text-[14px] text-gray-800">{blog.author}</span>
        <span className="lg:text-[16px] text-[14px] text-gray-800">
          {new Date(blog.date).toLocaleDateString()}
        </span>
      </div>
      
      <h3 className="lg:text-xl text-[16px] font-semibold text-blue-900 mb-3 line-clamp-2">
        {blog.title}
      </h3>
      
      {/* <p className="text-gray-600 mb-4 line-clamp-3">
        {blog.excerpt}
      </p> */}
      
      <button 
        onClick={onReadMore}
        className=" inline-flex items-center lg:px-4 px-2 lg:py-2 py-1 border border-blue-900 text-blue-900 rounded-md  lg:text-[16px] text-base transition duration-300 hover:bg-gradient-to-r hover:from-[#04080B] hover:to-[#4682B4]  hover:text-white cursor-pointer"
      >
        Read More
        <svg className="ml-2 mt-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  </div>
);

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onReadMore: PropTypes.func.isRequired
};

export default BlogCard;