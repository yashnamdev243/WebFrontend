import React from "react";
import PropTypes from 'prop-types';
import { FiRefreshCw } from "react-icons/fi";

const EmptyBlogState = ({ onRetry }) => (
  <div 
    className="bg-white rounded-xl shadow-md overflow-hidden max-w-2xl mx-auto p-8 text-center"
    data-aos="fade-up"
  >
    <div className="flex justify-center">
      <svg className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <h3 className="mt-4 text-lg font-medium text-gray-900">No Blog Posts Available</h3>
    <p className="mt-2 text-gray-600">
      There are currently no blog posts to display. Please check back later.
    </p>
    <div className="mt-6">
      <button
        onClick={onRetry}
        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#4682B4] to-[#04080B] text-white rounded-md  transition-colors"
      >
        <FiRefreshCw className="mr-2" />
        Refresh
      </button>
    </div>
  </div>
);

EmptyBlogState.propTypes = {
  onRetry: PropTypes.func.isRequired
};

export default EmptyBlogState;