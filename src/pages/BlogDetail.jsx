import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import BlogCard from "./BlogCard";
import { FaRegPenToSquare } from "react-icons/fa6";
import { CgCalendarDates } from "react-icons/cg";

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
const BlogDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(location.state?.blog || null);
  const [loading, setLoading] = useState(!location.state?.blog);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    if (!blog) {
      const fetchBlog = async () => {
        try {
          const response = await fetch(
            `https://bkl.gxpro.co.in/admin/blog/${id}`
          );
          const data = await response.json();
          setBlog(data);
        } catch (error) {
          console.error("Error fetching blog:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchBlog();
    }

    // const fetchRelatedBlogs = async () => {
    //   try {
    //     const response = await fetch("https://bkl.gxpro.co.in/admin/blog-list?limit=3");
    //     const data = await response.json();
    //     const blogData = extractBlogData(data);
    //     setRelatedBlogs(blogData.slice(0, 3));
    //   } catch (error) {
    //     console.error("Error fetching related blogs:", error);
    //     setRelatedBlogs([]);
    //   }
    // };
    // fetchRelatedBlogs();
  }, [id, blog]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto p-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
        <button
          onClick={() => navigate("/blogs")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to Blog List
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-white min-h-screen  lg:w-[1285px] w-90 mx-auto  sm:px-6 lg:px-8">
      <div className="flex justify-end">
        <button
          onClick={() => navigate("/blogs")}
          className="inline-flex items-center lg:px-4 px-2 lg:py-2 py-1 mt-25 mb-3 border border-blue-900 text-blue-900 rounded-md  lg:text-[16px] text-base transition duration-300 hover:bg-gradient-to-r hover:from-[#04080B] hover:to-[#4682B4]  hover:text-white cursor-pointer"
        >
          <FiArrowLeft className="mr-2" /> Back to Blogs
        </button>
      </div>
      <h1 className="lg:text-3xl text-[16px] font-bold mb-6 underline text-blue-900">
        {blog.title}
      </h1>

      {blog.image && (
        <div className="relative w-full min-h-screen mx-auto overflow-hidden ">
          <img
            src={blog.image}
            alt={blog.title}
            className="absolute w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className=" ">
        <article className="relative w-full min-h-screen">
          <div className=" ">
            <div className="flex gap-2 justify-between items-center  my-6 mx-8 text-sm">
              <span className="lg:text-[18px] text-[14px] text-gray-700 flex items-center gap-2 ">
                <FaRegPenToSquare />
                Posted By : {blog.author}
              </span>
              <span className="lg:text-[18px] text-[14px] text-gray-700 flex items-center gap-2">
                <CgCalendarDates size={23} />
                Posted On :{" "}
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="bg-gradient-to-b from-white to-white rounded-xl shadow-2xl border-b-2 border-blue-900 p-8 mb-10 ">
              {/* <h1 className="lg:text-3xl text-[16px] font-bold mb-6 underline text-blue-900">{blog.title}</h1> */}

              <div className="prose max-w-none lg:text-lg text-[15px] text-gray-800 ">
                {blog.content.split("\n").map((paragraph, i) => (
                  <p key={i} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </article>

        {relatedBlogs.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">
              You might also like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedBlogs.map((relatedBlog, index) => (
                <BlogCard
                  key={relatedBlog.id}
                  blog={relatedBlog}
                  index={index}
                  onReadMore={() =>
                    navigate(`/blog/${relatedBlog.id}`, {
                      state: { blog: relatedBlog },
                    })
                  }
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
