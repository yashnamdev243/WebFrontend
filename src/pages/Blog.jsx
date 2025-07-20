import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiRefreshCw } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard";
import EmptyBlogState from "./EmptyBlogState";
import BlogHero from "./BlogHero";

const Blog = () => {
  const [state, setState] = useState({
    blogs: [],
    loading: true,
    error: null,
  });
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      const response = await fetch("https://bkl.gxpro.co.in/admin/blog-list", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const data = await response.json();
      const blogData = extractBlogData(data);

      const validBlogs = blogData.map((blog) => ({
        id: blog.id || blog._id || Math.random().toString(36).substr(2, 9),
        title: blog.title || "Untitled Blog Post",
        excerpt:
          blog.excerpt ||
          (blog.content
            ? blog.content.substring(0, 100) + "..."
            : "No excerpt available"),
        content: blog.content || blog.description || "No content available",
        image: blog.banner_photo || "/blog-placeholder.jpg",
        date: blog.date || blog.createdAt || new Date().toISOString(),
        author: blog.author || "Admin",
      }));

      if (validBlogs.length === 0) {
        // toast.info("No blog posts found");
      }

      setState((prev) => ({
        ...prev,
        blogs: validBlogs,
        loading: false,
      }));
    } catch {
      // toast.error("Failed to fetch blogs!");
      setState((prev) => ({
        ...prev,
        loading: false,
        error: "Failed to fetch blogs",
      }));
    } finally {
      setState((prev) => ({ ...prev, loading: false, error: null }));
    }
  };

  const extractBlogData = (data) => {
    if (!data) return [];

    if (Array.isArray(data)) return data;
    if (data.blogs && Array.isArray(data.blogs)) return data.blogs;
    if (data.data && Array.isArray(data.data)) return data.data;
    if (data.items && Array.isArray(data.items)) return data.items;
    if (data.results && Array.isArray(data.results)) return data.results;
    if (data.data?.items && Array.isArray(data.data.items))
      return data.data.items;

    console.warn("Unexpected data format:", data);
    return [];
  };

  // const openBlogPage = (blog) => {
  //   navigate(`/blog/${blog.id}`, { state: { blog } });
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
  const slugify = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

  const openBlogPage = (blog) => {
    if (!blog || !blog.title || !blog.id) {
      console.error("Blog data incomplete:", blog);
      return;
    }

    const slug = slugify(blog.title);
    navigate(`/blog/${slug}`, { state: { blog } });
    // navigate(`/blog/${blog.id}/${slug}`, { state: { blog } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = state.blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="bg-gradient-to-b from-white to-white min-h-screen">
      <BlogHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12  text-gray-800"
          data-aos="fade-up"
        >
          Latest Blog Posts
        </h2>

        {state.loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-600"></div>
          </div>
        )}

        {state.error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-500"
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
                <p className="text-sm text-red-700">
                  {state.error}
                  <button
                    onClick={fetchBlogs}
                    className="ml-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <FiRefreshCw className="mr-1" /> Retry
                  </button>
                </p>
              </div>
            </div>
          </div>
        )}

        {!state.loading && !state.error && (
          <>
            {state.blogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* {state.blogs.map((blog, index) => ( */}
                {currentBlogs.map((blog, index) => (
                  <BlogCard
                    key={blog.id}
                    blog={blog}
                    index={index}
                    onReadMore={() => openBlogPage(blog)}
                  />
                ))}
              </div>
            ) : (
              <EmptyBlogState onRetry={fetchBlogs} />
            )}
          </>
        )}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({
            length: Math.ceil(state.blogs.length / blogsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              // onClick={() => setCurrentPage(index + 1)}
              onClick={() => {
                setCurrentPage(index + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`px-4 py-2 border border-blue-900 rounded ${
                currentPage === index + 1
                  ? "bg-gradient-to-r from-[#4682B4] to-[#04080B]   text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
