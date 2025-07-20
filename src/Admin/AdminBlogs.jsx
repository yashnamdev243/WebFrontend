import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FiRefreshCw } from "react-icons/fi";
import { HiOutlineViewGridAdd } from "react-icons/hi";

import BlogList from "./BlogList";
import CreateBlogModal from "./CreateBlogModal";
import UpdateBlogModal from "./UpdateBlogModal";
import DeleteBlogModal from "./DeleteBlogModal";

const AdminBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  console.log(blogs, "blogs admin blog");

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem("authToken");

      if (!token) {
        throw new Error("Authentication token not found");
      }

      const response = await axios.get(
        `https://bkl.gxpro.co.in/admin/blog-list`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          timeout: 10000,
        }
      );

      const data = response.data;

      console.log(data.data, "API Response");

      let blogData = [];
      if (Array.isArray(data.data)) {
        blogData = data.data;
      } else if (Array.isArray(data.blogs)) {
        blogData = data.blogs;
      } else if (Array.isArray(data)) {
        blogData = data;
      } else {
        console.warn("Unexpected API response format:", data);
        throw new Error(
          "API returned unexpected format. Expected an array of blogs."
        );
      }

      const validBlogs = blogData.map((blog) => ({
        id: blog.id || blog._id,
        title: blog.title,
        description: blog.description,
        banner_photo: blog.banner_photo,
        createdAt: blog.createdAt,
      }));

      console.log(validBlogs, "Valid Blogs");

      setBlogs(validBlogs);
    } catch (err) {
      console.error("Fetch blogs error:", err);
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to fetch blogs. Please check the API response format.";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [refreshTrigger]);

  const handleCreate = () => {
    setIsCreateModalOpen(true);
  };

  const handleEdit = (blog) => {
    setCurrentBlog(blog);
    setIsUpdateModalOpen(true);
  };

  const handleDelete = (blog) => {
    setCurrentBlog(blog);
    setIsDeleteModalOpen(true);
  };

  const handleRefresh = () => {
    setRefreshTrigger((prev) => prev + 1);
    toast.info("Refreshing blog list...");
  };

  const handleCreateSuccess = () => {
    setIsCreateModalOpen(false);
    setRefreshTrigger((prev) => prev + 1);
    toast.success("Blog created successfully!");
  };

  const handleUpdateSuccess = () => {
    setIsUpdateModalOpen(false);
    setRefreshTrigger((prev) => prev + 1);
    toast.success("Blog updated successfully!");
  };

  const handleDeleteSuccess = () => {
    setIsDeleteModalOpen(false);
    setRefreshTrigger((prev) => prev + 1);
    toast.success("Blog deleted successfully!");
  };

  return (
    <>
      <div className="text-center bg-gradient-to-r from-[#4682B4] to-[#04080B]  text-white p-4 rounded-md text-lg font-bold mb-5 shadow-md">
        Blog Management
      </div>
      <div className="min-h-screen bg-gray-50 p-4 md:p-6 shadow-2xl rounded-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              {/* <p className="text-gray-600 text-sm mt-1">
              {loading ? "Loading..." : `Showing ${blogs.length} blog posts`}
            </p> */}
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              <button
                onClick={handleRefresh}
                disabled={loading}
                className="flex items-center px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                <FiRefreshCw
                  className={`mr-2 ${loading ? "animate-spin" : ""}`}
                />
                Refresh
              </button>
              <button
                onClick={handleCreate}
                disabled={loading}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-[#4682B4] to-[#04080B] text-white rounded-lg transition duration-300  cursor-pointer disabled:opacity-50"
              >
                <HiOutlineViewGridAdd className="mr-2" />
                New Blog
              </button>
            </div>
          </div>

          {loading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-600"></div>
            </div>
          )}

          {error && !loading && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Error loading blogs
                  </h3>
                  <p className="text-sm text-red-700 mt-1">{error}</p>
                  <button
                    onClick={handleRefresh}
                    className="mt-2 text-sm text-red-700 hover:text-red-600 font-medium"
                  >
                    Try again →
                  </button>
                </div>
              </div>
            </div>
          )}

          {!loading && !error && (
            <div className="space-y-6">
              <BlogList
                blogs={blogs}
                onEdit={handleEdit}
                onDelete={handleDelete}
                fetchBlogs={fetchBlogs}
              />
            </div>
          )}

          {isCreateModalOpen && (
            <CreateBlogModal
              onClose={() => setIsCreateModalOpen(false)}
              onSuccess={handleCreateSuccess}
            />
          )}

          {isUpdateModalOpen && currentBlog && (
            <UpdateBlogModal
              blog={currentBlog}
              onClose={() => setIsUpdateModalOpen(false)}
              onSuccess={handleUpdateSuccess}
            />
          )}

          {isDeleteModalOpen && currentBlog && (
            <DeleteBlogModal
              isOpen={isDeleteModalOpen}
              onClose={() => setIsDeleteModalOpen(false)}
              item={currentBlog.id}
              onSuccess={handleDeleteSuccess}
            />
          )}

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            // theme="colored"
          />
        </div>
      </div>
    </>
  );
};

export default AdminBlog;
