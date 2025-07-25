

// import { useNavigate } from "react-router-dom";
// import { Dropdown, Menu } from "antd";
// import { AppstoreOutlined } from "@ant-design/icons";
// import { blogs } from "../Data/Blogs_data";
// import { useState } from "react";
// import { FaChevronDown } from "react-icons/fa"; // Mobile dropdown icon
// import { GoDot } from "react-icons/go";
// import { FaBlog } from "react-icons/fa";

// const BlogDropdown = ({setIsOpen}) => {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpened] = useState(false);

//   const handleNavigate = (id) => {
//     navigate(`/blog/${id}`);
//     setIsOpened(false); // Close mobile dropdown on selection
//     setIsOpen(false);
//   };

//   const menu = (
//     <Menu>
//       {blogs.map((blog) => (
//         <Menu.Item key={blog.id} onClick={() => handleNavigate(blog.id)}>
//           <span className="text-gray-700">{blog.title}</span>
//         </Menu.Item>
//       ))}
//     </Menu>
//   );

//   return (
//     <div className="relative">
//       {/* Desktop Dropdown (Hover) - Hidden on Mobile */}
//       <div className="hidden sm:inline">
//         <Dropdown overlay={menu} trigger={["hover"]}>
//           <a
//             href="#"
//             className="sm:text-xl font-italic sm:text-white hover:text-blue-900 transition relative inline-block text-[16px] font-semibold text-gray-800 before:absolute before:-bottom-1 before:left-1/2 before:h-[2px] before:w-0 before:bg-blue-900 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0"
//           >
//             Blogs
//             <AppstoreOutlined className="ml-2" />
//           </a>
//         </Dropdown>
//       </div>

//       {/* Mobile Dropdown (Click) - Hidden on Desktop */}
//       <div className="sm:hidden inline-block">
//         <button
//           onClick={() => setIsOpened(!isOpen)}
//           className="text-[16px] font-semibold text-gray-800 flex items-center  gap-2"
//         >
//          <FaBlog />
//          Blogs <FaChevronDown size={'12px'} className="ml-22" />
//         </button>

//         {isOpen && (
//           <div className=" top-full left-0  mt-2 w-full z-50  ">
//             {blogs.map((blog) => (
//               <button
//                 key={blog.id}
//                 onClick={() => handleNavigate(blog.id)}
//                 className="flex items-center gap-x-1 text-nowrap w-full text-sm text-left py-1 hover:bg-gray-100 text-gray-800"
//               >  <GoDot />
//                 {blog.title}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogDropdown;
