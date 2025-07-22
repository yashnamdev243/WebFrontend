import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FiX, FiUpload, FiImage, FiEye, FiTrash2 } from "react-icons/fi";

const UpdateBlogModal = ({ blog, onClose, onSuccess, onPreview }) => {
  const [formData, setFormData] = useState({
    title: blog.title,
    content: blog.description,
    id: blog.id,
  });
  console.log(formData, "formData formData");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(blog.banner_photo);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  useEffect(() => {
    return () => {
      if (file && imagePreview && imagePreview !== blog.banner_photo) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [file, imagePreview, blog.banner_photo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (!selectedFile.type.match("image.*")) {
        toast.error("Please select an image file");
        return;
      }

      if (selectedFile.size > 5 * 1024 * 1024) {
        toast.error("Image must be less than 5MB");
        return;
      }

      setFile(selectedFile);
      const previewUrl = URL.createObjectURL(selectedFile);
      setImagePreview(previewUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const removeImage = () => {
    setFile(null);
    setImagePreview(blog.banner_photo);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.content.trim()) newErrors.content = "Content is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.content);
    if (file) {
      data.append("banner_photo", file);
    }

    try {
      setIsLoading(true);
      const token = localStorage.getItem("authToken");

      const response = await axios.put(
        `https://bkl.gxpro.co.in/admin/update-blog/${blog.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Blog updated successfully!");
      onClose();
    } catch (error) {
      console.error("Error updating blog:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to update blog";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0   flex items-center justify-center z-50 p-4">
      <div
        className="fixed inset-0 transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full ">
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Update Blog</h2>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
                disabled={isLoading}
              >
                <FiX size={24} />
              </button>
            </div>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title <span className=" text-red-500"> *</span>
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  errors.title ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-sky-600`}
                placeholder="Enter blog title"
                disabled={isLoading}
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1">{errors.title}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Banner Image
              </label>

              {imagePreview && (
                <div className="mb-3 relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100"
                    disabled={isLoading}
                  >
                    <FiTrash2 className="text-gray-600" />
                  </button>
                </div>
              )}

              <div className="flex items-center">
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-[#4682B4] to-[#04080B] cursor-pointer text-white rounded-lg  transition duration-300   disabled:opacity-50"
                  disabled={isLoading}
                >
                  <FiUpload className="mr-2" />
                  {file ? "Change Image" : "Upload New Image"}
                </button>
                {file && (
                  <span className="ml-4 text-gray-600 truncate max-w-xs">
                    {file.name}
                  </span>
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
                disabled={isLoading}
              />
              <p className="text-xs text-gray-500 mt-2">
                Recommended size: 1200x630 pixels
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700"
                >
                  Content <span className=" text-red-500"> *</span>
                </label>
                {/* <button
                  type="button"
                  onClick={() => onPreview(formData.title, formData.content)}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                  disabled={isLoading || !formData.content.trim()}
                >
                  <FiEye className="mr-1" /> Preview
                </button> */}
              </div>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={2}
                className={`w-full px-3 py-2 border ${
                  errors.content ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-sky-600`}
                placeholder="Write your blog content here..."
                disabled={isLoading}
              />
              {errors.content && (
                <p className="text-red-500 text-xs mt-1">{errors.content}</p>
              )}
            </div>
            <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border-2 border-gray-500 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={
                  isLoading ||
                  !formData.title.trim() ||
                  !formData.content.trim()
                }
                className="px-6 py-2 bg-gradient-to-r from-[#4682B4] to-[#04080B]  text-white rounded-lg cursor-pointer transition duration-300   disabled:opacity-50 flex items-center"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Updating...
                  </>
                ) : (
                  "Update Blog"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlogModal;
