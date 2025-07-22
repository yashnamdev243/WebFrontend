// //import { faTrashAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
// //import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "axios";
// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import styles from "./DeleteModal.module.css";

// const DeleteBlogModal = ({ isOpen, onClose, item, fetchBlogs }) => {
//   const [loading, setLoading] = useState(false);

//   if (!isOpen) return null;

//   const handleDelete = async () => {
//     const token = localStorage.getItem("authToken");
//     setLoading(true);
//     try {
//       await toast.promise(
//         axios.delete(
//           `https://gxp-api.mydemosoftware.com/admin/delete-blog/${item}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         ),
//         {
//           pending: "Deleting the blog...",
//           success: "Blog deleted successfully!",
//           error: "Failed to delete the blog.",
//         }
//       );
//       fetchBlogs(); // Refresh blogs after deletion
//       onClose(); // Close the modal
//     } catch (error) {
//       console.error("Error deleting the blog:", error);
//     } finally {
//       setLoading(false); // Reset loading state
//     }
//   };

//   return (
//     <div className={styles.overlay}>
//       <div className={styles.modal}>
//         <button
//           className={styles.closeButton}
//           onClick={onClose}
//           disabled={loading} // Disable close button during loading
//         >
//           <FontAwesomeIcon icon={faTimes} size="lg" />
//         </button>
//         <div className={styles.content}>
//           <div className={styles.iconWrapper}>
//             <FontAwesomeIcon icon={faTrashAlt} className={styles.icon} />
//           </div>
//           <h2 className={styles.title}>Delete Confirmation</h2>
//           <p className={styles.description}>
//             Are you sure you want to delete this blog? This action is permanent
//             and cannot be undone.
//           </p>
//           <div className={styles.buttonGroup}>
//             <button
//               className={styles.cancelButton}
//               onClick={onClose}
//               disabled={loading} // Disable cancel button during loading
//             >
//               Cancel
//             </button>
//             <button
//               className={styles.deleteButton}
//               onClick={handleDelete}
//               disabled={loading} // Disable delete button during loading
//             >
//               {loading ? "Deleting..." : "Delete"} {/* Show status */}
//             </button>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default DeleteBlogModal;

// import React from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const DeleteBlogModal = ({ isOpen, onClose, item, onSuccess }) => {
//   const [isLoading, setIsLoading] = useState(false);

//   if (!isOpen) return null;

//   const handleDelete = async () => {
//     try {
//       setIsLoading(true);
//       const token = localStorage.getItem("authToken");
//       await axios.delete(`https://bkl.gxpro.co.in/admin/delete-blog/${item}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       toast.success("Blog deleted successfully");
//       onSuccess();
//     } catch (error) {
//       console.error("Error deleting blog:", error);
//       toast.error("Failed to delete blog");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold text-gray-800">Confirm Deletion</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//             disabled={isLoading}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>

//         <p className="text-gray-600 mb-6">
//           Are you sure you want to delete this blog? This action cannot be undone.
//         </p>

//         <div className="flex justify-end space-x-4">
//           <button
//             onClick={onClose}
//             disabled={isLoading}
//             className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleDelete}
//             disabled={isLoading}
//             className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200 disabled:opacity-50"
//           >
//             {isLoading ? "Deleting..." : "Delete"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeleteBlogModal;

// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { FiX, FiTrash2, FiLoader } from "react-icons/fi";

// const DeleteBlogModal = ({ isOpen, onClose, item, onSuccess }) => {
//   const [isLoading, setIsLoading] = useState(false);

//   if (!isOpen) return null;

//   const handleDelete = async () => {
//     try {
//       setIsLoading(true);
//       const token = localStorage.getItem("authToken");

//       await toast.promise(
//         axios.delete(`https://bkl.gxpro.co.in/admin/delete-blog/${item}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }),
//         {
//           pending: 'Deleting blog post...',
//           success: 'Blog deleted successfully!',
//           error: {
//             render({ data }) {
//               return data.response?.data?.message || 'Failed to delete blog';
//             }
//           }
//         }
//       );

//       onSuccess();
//       onClose();
//     } catch (error) {
//       console.error("Error deleting blog:", error);
//       if (!toast.isActive('delete-error')) {
//         toast.error(error.response?.data?.message || 'Failed to delete blog', {
//           toastId: 'delete-error'
//         });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
//         <div className="p-6">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-bold text-gray-800 flex items-center">
//               <FiTrash2 className="mr-2 text-red-600" />
//               Confirm Deletion
//             </h2>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700 transition-colors"
//               disabled={isLoading}
//             >
//               <FiX size={24} />
//             </button>
//           </div>

//           {/* Warning Message */}
//           <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-red-700">
//                   This action cannot be undone. The blog post will be permanently deleted.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex justify-end space-x-3">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 transition-colors"
//               disabled={isLoading}
//             >
//               Cancel
//             </button>
//             <button
//               type="button"
//               onClick={handleDelete}
//               className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 disabled:opacity-50 transition-colors flex items-center"
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <>
//                   <FiLoader className="animate-spin mr-2" />
//                   Deleting...
//                 </>
//               ) : (
//                 <>
//                   <FiTrash2 className="mr-2" />
//                   Delete Permanently
//                 </>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeleteBlogModal;

// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { FiX, FiTrash2, FiLoader } from "react-icons/fi";

// const DeleteBlogModal = ({ isOpen, onClose, item, onSuccess }) => {
//   const [isLoading, setIsLoading] = useState(false);

//   if (!isOpen) return null;

//   const handleDelete = async () => {
//     try {
//       setIsLoading(true);
//       const token = localStorage.getItem("authToken");

//       await toast.promise(
//         axios.delete(`https://bkl.gxpro.co.in/admin/delete-blog/15`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }),
//         {
//           pending: 'Deleting blog post...',
//           success: 'Blog deleted successfully!',
//           error: {
//             render({ data }) {
//               return data.response?.data?.message || 'Failed to delete blog';
//             }
//           }
//         }
//       );

//       onSuccess();
//       onClose();
//     } catch (error) {
//       console.error("Error deleting blog:", error);
//       if (!toast.isActive('delete-error')) {
//         toast.error(error.response?.data?.message || 'Failed to delete blog', {
//           toastId: 'delete-error'
//         });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4">

//          {/* Background overlay */}
//          <div
//               className="fixed inset-0 transition-opacity"
//               aria-hidden="true"
//               onClick={onClose}
//             >
//               <div className="absolute inset-0 bg-black opacity-75"></div>
//             </div>

//       <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full ">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-bold text-gray-800 flex items-center">
//               <FiTrash2 className="mr-2 text-red-600" />
//               Confirm Deletion
//             </h2>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700 transition-colors"
//               disabled={isLoading}
//             >
//               <FiX size={24} />
//             </button>
//           </div>

//           <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-red-700">
//                   This action cannot be undone. The blog post will be permanently deleted.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-end space-x-3">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 transition-colors"
//               disabled={isLoading}
//             >
//               Cancel
//             </button>
//             <button
//               type="button"
//               onClick={handleDelete}
//               className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 disabled:opacity-50 transition-colors flex items-center"
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <>
//                   <FiLoader className="animate-spin mr-2" />
//                   Deleting...
//                 </>
//               ) : (
//                 <>
//                   <FiTrash2 className="mr-2" />
//                   Delete Permanently
//                 </>
//               )}
//             </button>
//           </div>
//           </div>

//         </div>
//     </div>
//   );
// };

// export default DeleteBlogModal;

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FiX, FiTrash2, FiLoader } from "react-icons/fi";

const DeleteBlogModal = ({ isOpen, onClose, item, onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("authToken");

      await toast.promise(
        axios.delete(`https://bkl.gxpro.co.in/admin/delete-blog/${item}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        {
          pending: "Deleting blog post...",
          success: {
            render() {
              return "Blog post deleted successfully!";
            },
            icon: "🗑️",
          },
          error: {
            render({ data }) {
              return (
                data.response?.data?.message || "Failed to delete blog post"
              );
            },
          },
        }
      );

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error deleting blog:", error);
      if (!toast.isActive("delete-error")) {
        toast.error(
          error.response?.data?.message || "Failed to delete blog post",
          {
            toastId: "delete-error",
            icon: "❌",
          }
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      {/* Background overlay */}
      <div
        className="fixed inset-0 transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <FiTrash2 className="mr-2 text-red-600" />
              Delete Blog Post
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              disabled={isLoading}
            >
              <FiX size={24} />
            </button>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
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
                  Warning: Permanent Action
                </h3>
                <p className="text-sm text-red-700 mt-1">
                  This will permanently delete the blog post, including all its
                  content and comments.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 transition-colors"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="px-4 py-2 text-white bg-gradient-to-r from-red-600 to-red-800 rounded-md hover:from-red-700 hover:to-red-900 disabled:opacity-50 transition-colors flex items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <FiLoader className="animate-spin mr-2" />
                  Deleting...
                </>
              ) : (
                <>
                  <FiTrash2 className="mr-2" />
                  Confirm Delete
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBlogModal;
