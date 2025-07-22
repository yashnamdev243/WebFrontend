import React, { useState } from "react";
import DeleteBlogModal from "./DeleteBlogModal";
import {
  FiEdit2,
  FiTrash2,
  FiChevronDown,
  FiChevronUp,
  FiCalendar,
  FiUser,
} from "react-icons/fi";
import { format } from "date-fns";
import { FaSearch } from "react-icons/fa";

const BlogList = ({ blogs, onEdit, onDelete, fetchBlogs }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [expandedBlog, setExpandedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const openDeleteModal = (blog) => {
    setItemToDelete(blog);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setItemToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const toggleDescription = (blogId) => {
    setExpandedBlog(expandedBlog === blogId ? null : blogId);
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-6 mt-[-65px]">
      <div className="relative w-fit">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />

        <input
          type="text"
          placeholder="Search ..."
          className="w-full mx-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-600 pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <svg
          className="absolute left-3 top-3 h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg> */}
      </div>

      <div className="text-sm text-gray-500">
        Showing {currentBlogs.length} of {filteredBlogs.length} blogs (Page{" "}
        {currentPage} of {totalPages})
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {currentBlogs.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-md text-center col-span-2">
            <p className="text-gray-500">
              {searchTerm ? "No matching blogs found" : "No blogs available"}
            </p>
          </div>
        ) : (
          currentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-sky-600 hover:text-sky-800 transition-colors">
                    {blog.title}
                  </h3>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => onEdit(blog)}
                      className="text-sky-600 hover:text-sky-800 transition-colors p-3 rounded-full hover:bg-blue-50"
                      title="Edit"
                    >
                      <FiEdit2 size={18} />
                    </button>
                    <button
                      onClick={() => openDeleteModal(blog)}
                      className="text-red-600 hover:text-red-800 transition-colors p-3 rounded-full hover:bg-red-50"
                      title="Delete"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </div>

                {blog.banner_photo && (
                  <img
                    src={blog.banner_photo}
                    alt="Blog Banner"
                    className="w-full h-100 object-cover rounded-lg mt-4 mb-4"
                    loading="lazy"
                  />
                )}

                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FiCalendar className="mr-1" />
                    <span>
                      {format(new Date(blog.createdAt), "MMMM dd, yyyy")}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FiUser className="mr-1" />
                    <span>Admin</span>
                  </div>
                </div>

                <div
                  className="prose max-w-none mb-4"
                  dangerouslySetInnerHTML={{
                    __html:
                      expandedBlog === blog.id
                        ? blog.description
                        : `${blog.description.substring(0, 200)}...`,
                  }}
                />

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => toggleDescription(blog.id)}
                    className="flex items-center text-sky-600 hover:text-sky-800 font-medium transition-colors"
                  >
                    {expandedBlog === blog.id ? (
                      <>
                        <span>Show Less</span>
                        <FiChevronUp className="ml-1" />
                      </>
                    ) : (
                      <>
                        <span>Read More</span>
                        <FiChevronDown className="ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {filteredBlogs.length > blogsPerPage && (
        <div className="flex justify-center space-x-2 mt-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md  ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gradient-to-r from-[#4682B4] to-[#04080B]  text-white"
            }`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-md ${
                currentPage === number
                  ? " bg-gradient-to-r from-[#4682B4] to-[#04080B] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md  ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gradient-to-r from-[#4682B4] to-[#04080B]  text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}

      {isDeleteModalOpen && itemToDelete && (
        <DeleteBlogModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          item={itemToDelete.id}
          onSuccess={() => {
            closeDeleteModal();
            fetchBlogs();
            if (currentBlogs.length === 1 && currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        />
      )}
    </div>
  );
};

export default BlogList;
