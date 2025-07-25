

// import { useParams } from "react-router-dom";
// import { Card, Button } from "antd";
// import { blogs } from "../Data/Blogs_data";
// import {
//   FacebookOutlined,
//   TwitterOutlined,
//   InstagramOutlined,
//   WhatsAppOutlined,
// } from "@ant-design/icons";

// const BlogDetails = () => {
//   const { id } = useParams();
//   const blog = blogs.find((post) => post.id === parseInt(id));

//   if (!blog) {
//     return <h2 className="text-center text-red-500 mt-10">Blog not found</h2>;
//   }

//   return (
//     <>
//       {/* Hero Section */}
//       <div className="relative w-full h-[500px]">
//         <img
//           src={blog.image}
//           alt={blog.title}
//           className="w-full h-full object-cover brightness-75"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
//           <h1 className="text-5xl font-extrabold drop-shadow-lg">
//             {blog.title}
//           </h1>
//           <p className="text-lg mt-4 max-w-2xl drop-shadow-md">
//             {blog.description}
//           </p>
//           <p className="text-sm mt-2">
//             By {blog.author} - {blog.date}
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto p-6 flex flex-col items-center min-h-screen bg-gray-100">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl">
//           {/* Left Side - Image */}
//           <div>
//             <img
//               src="/path-to-your-image.jpg"
//               alt="Trek Overview"
//               className="w-full h-auto rounded-lg shadow-md"
//             />
//           </div>

//           {/* Right Side - Trek Details */}
//           <div>
//             <h2 className="text-3xl font-semibold text-gray-900 border-b pb-3">
//               Trek Overview
//             </h2>
//             <p className="text-gray-700 mt-4 text-lg leading-relaxed">
//               This trek takes you through mesmerizing landscapes with panoramic
//               views of Mt. Trishul and Nanda Ghunti. Witness the frozen lakes,
//               lush oak forests, and surreal snow-covered meadows.
//             </p>
//             <ul className="mt-6 space-y-3 text-gray-800 text-lg">
//               <li>
//                 📍 <strong>Region:</strong> Uttarakhand, India
//               </li>
//               <li>
//                 ⛰ <strong>Max Altitude:</strong> 12,250 ft
//               </li>
//               <li>
//                 🚶‍♂️ <strong>Trekking Distance:</strong> 22 km
//               </li>
//               <li>
//                 💪 <strong>Difficulty:</strong> Easy to Moderate
//               </li>
//               <li>
//                 📅 <strong>Duration:</strong> 5 Days / 4 Nights
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="flex justify-center space-x-6 mt-8">
//           <Button
//             icon={<FacebookOutlined />}
//             // className="bg-blue-600 text-white px-6 py-2 rounded-lg"
//             style={{ backgroundColor: '#1877f2', color: 'white', padding: '8px 24px ' , borderRadius: '8px' }}

//           >
//             Share
//           </Button>
//           <Button
//             icon={<TwitterOutlined />}
//             // className="bg-blue-400 text-white px-6 py-2 rounded-lg"
//             style={{ backgroundColor: '#1DA1F2', color: 'white', padding: '8px 24px', borderRadius: '8px' }}

//           >
//             Tweet
//           </Button>
//           <Button
//   icon={<InstagramOutlined />}
//   style={{
//     background: 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
//     color: 'white',
//     padding: '8px 24px',
//     borderRadius: '8px'
//   }}
// >
//   Instagram
// </Button>
//           <Button
//             icon={<WhatsAppOutlined />}
//             // className="bg-green-500 text-white px-6 py-2 rounded-lg"
//             style={{ backgroundColor: '#25D366', color: 'white', padding: '8px 24px', borderRadius: '8px' }}

//           >
//             WhatsApp
//           </Button>
//         </div>

//         <div className="w-full max-w-6xl mt-12">
//           <h3 className="text-4xl font-semibold text-blue-900 border-b pb-3">
//             Related Blogs
//           </h3>
//           <div className="grid md:grid-cols-4 gap-6 mt-6">
//             {blogs
//               .filter((b) => b.id !== blog.id)
//               .slice(0, 4)
//               .map((relatedBlog) => (
//                 <Card
//                   key={relatedBlog.id}
//                   hoverable
//                   className="shadow-md rounded-lg overflow-hidden"
//                 >
//                   <img
//                     src={relatedBlog.image}
//                     alt={relatedBlog.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <h4 className="text-lg font-semibold">
//                       {relatedBlog.title}
//                     </h4>
//                   </div>
//                 </Card>
//               ))}
//           </div>
//         </div>

//         <div className="mt-10 bg-gray-200 p-6 rounded-lg text-center w-full max-w-3xl shadow-md">
//           <h3 className="text-2xl font-semibold">Help & Support</h3>
//           <p className="text-lg text-gray-700">📞 +91-96961 87592</p>
//           <p className="text-lg text-gray-700">
//             📧 spiritualhikesteam@gmail.com
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogDetails;
