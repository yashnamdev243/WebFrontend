// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper/modules";

// const reviews = [
//   {
//     name: "Gaurav meena ",
//     image: "/review1.jpeg",
//     rating: 5,
//     review: "Fantastic travel experience! The service was top-notch.",
//   },
//   {
//     name: "Pooja Verma",
//     image: "/review2.jpeg",
//     rating: 4,
//     review: "Loved the scenic beauty! Hotels could be better.",
//   },
//   {
//     name: "Rahul Mehta",
//     image: "/review7.jpg",
//     rating: 5,
//     review: "Amazing customer service! Best trip ever.",
//   },
//   {
//     name: "Vikas Yadav",
//     image: "/review3.jpeg",
//     rating: 5,
//     review: "Best spiritual journey of my life! Highly recommended.",
//   },
//   {
//     name: "Anjali Deshmukh",
//     image: "/review4.jpeg",
//     rating: 4,
//     review: "A great experience overall, well-planned and smooth.",
//   },

//   {
//     name: "Meera Nair",
//     image: "/review5.jpeg",
//     rating: 5,
//     review: "Truly divine experience! The arrangements were excellent.",
//   },
//   {
//     name: "Rohit Khanna",
//     image: "/review6.jpeg",
//     rating: 5,
//     review: "An unforgettable trip! The team was very professional.",
//   },
// ];

// const ReviewSection = () => {
//   return (
//     <div className="py-10 lg:px-8 ">
   
// <h2 className="lg:text-3xl text-2xl font-bold text-center py-2 text-white bg-gradient-to-l from-[#2e2b06]  to-[#ffcc70] mb-8">
//  Blessings & Feedback
//       </h2>
//       <div className="w-full max-w-7xl mx-auto  ">
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         loop={true}
//         spaceBetween={20}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           480: { slidesPerView: 1 },
//           640: { slidesPerView: 2 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 4 },
//           1280: { slidesPerView: 4 },
//         }}
//         className="rounded-xl "
//       >
//         {reviews.map((review) => (
//           <SwiperSlide key={review.id}>
//             <div className="group bg-white mb-8 p-6 shadow-md rounded-lg flex flex-col items-center text-center  hover:shadow-2xl transition-all duration-300   border border-[#ffe3c4]">
//               <img
//                 src={review.image}
//                 alt={review.name}
//                 className="w-24 h-24 rounded-full border-4 border-[#ffcc70] shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300"
//               />
//               <h3 className="lg:text-xl text-lg font-semibold text-gray-600">
//                 {review.name}
//               </h3>
//               <div className="flex justify-center mt-2">
//                 {Array.from({ length: review.rating }).map((_, i) => (
//                   <span key={i} className="text-yellow-400 lg:text-2xl text-xl">
//                     ★
//                   </span>
//                 ))}
//               </div>
//               <p className="text-gray-600 lg:text-lg text-sm mt-4 italic fira-sans">
//                 "{review.review}"
//               </p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       </div>
//     </div>
//   );
// };

// export default ReviewSection;



// import { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import { Form, Input, Button, Rate, Upload, message } from "antd";
// import { UploadOutlined } from "@ant-design/icons";

// import "swiper/css";
// import "swiper/css/pagination";

// // LocalStorage Key
// const LOCAL_KEY = "user_reviews";

// const staticReviews = [
//   {
//     name: "Gaurav meena ",
//     image: "/review1.jpeg",
//     rating: 5,
//     review: "Fantastic travel experience! The service was top-notch.",
//   },
//   // {
//   //   name: "Pooja Verma",
//   //   image: "/review2.jpeg",
//   //   rating: 4,
//   //   review: "Loved the scenic beauty! Hotels could be better.",
//   // },
//   // {
//   //   name: "Rahul Mehta",
//   //   image: "/review7.jpg",
//   //   rating: 5,
//   //   review: "Amazing customer service! Best trip ever.",
//   // },
//   // {
//   //   name: "Vikas Yadav",
//   //   image: "/review3.jpeg",
//   //   rating: 5,
//   //   review: "Best spiritual journey of my life! Highly recommended.",
//   // },
//   // {
//   //   name: "Anjali Deshmukh",
//   //   image: "/review4.jpeg",
//   //   rating: 4,
//   //   review: "A great experience overall, well-planned and smooth.",
//   // },
//   // {
//   //   name: "Meera Nair",
//   //   image: "/review5.jpeg",
//   //   rating: 5,
//   //   review: "Truly divine experience! The arrangements were excellent.",
//   // },
//   // {
//   //   name: "Rohit Khanna",
//   //   image: "/review6.jpeg",
//   //   rating: 5,
//   //   review: "An unforgettable trip! The team was very professional.",
//   // },
// ];

// const ReviewSection = () => {
//   const [reviews, setReviews] = useState(staticReviews);
//   const [form] = Form.useForm();

//   // Load local reviews on mount
//   useEffect(() => {
//     const stored = localStorage.getItem(LOCAL_KEY);
//     if (stored) {
//       const userReviews = JSON.parse(stored);
//       setReviews([...staticReviews, ...userReviews]);
//     }
//   }, []);

//   // Convert uploaded file to base64
//   const getBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });

//   const handleFormSubmit = async (values) => {
//     const newReview = {
//       name: values.name,
//       review: values.review,
//       rating: values.rating || 5,
//       image: values.image || "/default-avatar.jpg",
//     };

//     // Add to localStorage
//     const stored = localStorage.getItem(LOCAL_KEY);
//     const userReviews = stored ? JSON.parse(stored) : [];
//     const updated = [...userReviews, newReview];
//     localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));

//     // Update in component
//     setReviews((prev) => [...prev, newReview]);

//     message.success("Thank you for your feedback!");
//     form.resetFields();
//   };

//   return (
//     <div className="py-10 lg:px-8">
//       <h2 className="lg:text-3xl text-2xl font-bold text-center py-2 text-white bg-gradient-to-l from-[#2e2b06] to-[#ffcc70] mb-8">
//         Blessings & Feedback
//       </h2>

//       {/* Ant Design Review Form */}
//       <div className="w-full max-w-xl mx-auto mb-12 bg-white p-6 rounded-lg shadow-md border border-[#ffe3c4]">
//         <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
//           <Form.Item name="name" label="Your Name" rules={[{ required: true }]}>
//             <Input />
//           </Form.Item>

//           <Form.Item
//             name="review"
//             label="Your Review"
//             rules={[{ required: true, message: "Please share your thoughts!" }]}
//           >
//             <Input.TextArea rows={4} />
//           </Form.Item>

//           <Form.Item name="rating" label="Rating">
//             <Rate defaultValue={5} />
//           </Form.Item>

//           <Form.Item name="image" label="Upload Image">
//             <Upload
//               accept="image/*"
//               maxCount={1}
//               showUploadList={false}
//               beforeUpload={async (file) => {
//                 const base64 = await getBase64(file);
//                 form.setFieldValue("image", base64); // Save base64 directly
//                 return false; // prevent upload
//               }}
//             >
//               <Button icon={<UploadOutlined />}>Upload</Button>
//             </Upload>
//             {form.getFieldValue("image") && (
//               <img
//                 src={form.getFieldValue("image")}
//                 alt="Preview"
//                 className="w-16 h-16 rounded-full mt-3 border object-cover"
//               />
//             )}
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit" className="bg-[#ffcc70] text-black hover:bg-yellow-400">
//               Submit Review
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>

//       {/* Review Cards in Swiper */}
//       <div className="w-full max-w-7xl mx-auto">
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           pagination={{ clickable: true }}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           loop={true}
//           spaceBetween={20}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             480: { slidesPerView: 1 },
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//             1280: { slidesPerView: 4 },
//           }}
//           className="rounded-xl"
//         >
//           {reviews.map((review, idx) => (
//             <SwiperSlide key={idx}>
//               <div className="group bg-white mb-8 p-6 shadow-md rounded-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 border border-[#ffe3c4]">
//                 <img
//                   src={review.image || "/default-avatar.jpg"}
//                   alt={review.name}
//                   className="w-24 h-24 rounded-full border-4 border-[#ffcc70] shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300 object-cover"
//                 />
//                 <h3 className="lg:text-xl text-lg font-semibold text-gray-600">
//                   {review.name}
//                 </h3>
//                 <div className="flex justify-center mt-2">
//                   {Array.from({ length: review.rating }).map((_, i) => (
//                     <span key={i} className="text-yellow-400 lg:text-2xl text-xl">
//                       ★
//                     </span>
//                   ))}
//                 </div>
//                 <p className="text-gray-600 lg:text-lg text-sm mt-4 italic fira-sans">
//                   "{review.review}"
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default ReviewSection;


// import { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import { Form, Input, Button, Rate, Upload, message } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
// import "swiper/css";
// import "swiper/css/pagination";

// const LOCAL_KEY = "user_reviews";

// const ReviewSection = () => {
//   const [form] = Form.useForm();
//   const [reviews, setReviews] = useState([]);
//   const [previewImage, setPreviewImage] = useState("");

//   // Load dynamic reviews from localStorage only
//   useEffect(() => {
//     const stored = localStorage.getItem(LOCAL_KEY);
//     const userReviews = stored ? JSON.parse(stored) : [];
//     setReviews(userReviews);
//   }, []);

//   // Convert uploaded image to base64
//   const getBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = reject;
//     });

//   const handleFormSubmit = async (values) => {
//     const newReview = {
//       name: values.name,
//       review: values.review,
//       rating: values.rating || 5,
//       image: values.image || "/default-avatar.jpg",
//     };

//     const stored = localStorage.getItem(LOCAL_KEY);
//     const userReviews = stored ? JSON.parse(stored) : [];
//     const updated = [...userReviews, newReview];

//     localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
//     setReviews(updated);

//     form.resetFields();
//     setPreviewImage("");
//     message.success("Review submitted successfully!");
//   };

//   return (
//     <div className="py-10 lg:px-8">
//       <h2 className="lg:text-3xl text-2xl font-bold text-center py-2 text-white bg-gradient-to-l from-[#2e2b06] to-[#ffcc70] mb-8">
//         Blessings & Feedback
//       </h2>
// {/* Modern Review Form UI */}
// {/* <div className="w-full max-w-xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-lg border border-[#ffe3c4]">
//   <h3 className="text-2xl font-semibold mb-6 text-center text-gray-700">
//     Share Your Experience ✨
//   </h3>
//   <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//       <Form.Item
//         name="name"
//         label={<span className="font-medium text-gray-700">Full Name</span>}
//         rules={[{ required: true, message: "Please enter your name" }]}
//       >
//         <Input placeholder="Enter your full name" size="large" />
//       </Form.Item>

//       <Form.Item
//         name="rating"
//         label={<span className="font-medium text-gray-700">Your Rating</span>}
//       >
//         <Rate defaultValue={5} />
//       </Form.Item>
//     </div>

//     <Form.Item
//       name="review"
//       label={<span className="font-medium text-gray-700">Your Review</span>}
//       rules={[{ required: true, message: "Please write a review" }]}
//     >
//       <Input.TextArea
//         rows={4}
//         placeholder="Write your thoughts here..."
//         size="large"
//       />
//     </Form.Item>

//     <Form.Item
//       name="image"
//       label={<span className="font-medium text-gray-700">Upload Your Photo</span>}
//     >
//       <Upload
//         accept="image/*"
//         maxCount={1}
//         showUploadList={false}
//         beforeUpload={async (file) => {
//           const base64 = await getBase64(file);
//           form.setFieldValue("image", base64);
//           setPreviewImage(base64);
//           return false;
//         }}
//       >
//         <Button icon={<UploadOutlined />} size="large">
//           Upload Image
//         </Button>
//       </Upload>

//       {previewImage && (
//         <div className="mt-4 flex items-center gap-4">
//           <img
//             src={previewImage}
//             alt="Preview"
//             className="w-16 h-16 rounded-full border object-cover"
//           />
//           <span className="text-gray-500 text-sm italic">Profile preview</span>
//         </div>
//       )}
//     </Form.Item>

//     <Form.Item>
//       <Button
//         type="primary"
//         htmlType="submit"
//         className="w-full bg-gradient-to-r from-[#ffcc70] to-[#ffd480] text-black hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300"
//         size="large"
//       >
//         Submit Review
//       </Button>
//     </Form.Item>
//   </Form>
// </div> */}
// <div className="w-full max-w-2xl mx-auto mb-16 px-6 sm:px-10 py-10 bg-white/80 backdrop-blur-md border border-[#ffe3c4] rounded-3xl shadow-[0_10px_40px_rgba(255,204,112,0.25)] transition-all">
//   <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//     🌟 Share Your Experience
//   </h2>

//   <Form
//     form={form}
//     layout="vertical"
//     onFinish={handleFormSubmit}
//     className="space-y-6"
//   >
//     {/* Name & Rating Row */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//       <Form.Item
//         name="name"
//         label={<span className="text-gray-700 font-medium">Your Name</span>}
//         rules={[{ required: true, message: "Please enter your name" }]}
//       >
//         <Input
//           size="large"
//           placeholder="e.g., Priya Sharma"
//           className="rounded-xl border-gray-300 focus:ring-yellow-400"
//         />
//       </Form.Item>

//       <Form.Item
//         name="rating"
//         label={<span className="text-gray-700 font-medium">Rating</span>}
//       >
//         <Rate defaultValue={5} className="text-yellow-400" />
//       </Form.Item>
//     </div>

//     {/* Review Message */}
//     <Form.Item
//       name="review"
//       label={<span className="text-gray-700 font-medium">Your Review</span>}
//       rules={[{ required: true, message: "Please share your feedback" }]}
//     >
//       <Input.TextArea
//         rows={4}
//         size="large"
//         placeholder="What did you love about the trip?"
//         className="rounded-xl border-gray-300 focus:ring-yellow-400"
//       />
//     </Form.Item>

//     {/* Upload Image */}
//     <Form.Item
//       name="image"
//       label={<span className="text-gray-700 font-medium">Upload Photo</span>}
//     >
//       <Upload
//         accept="image/*"
//         maxCount={1}
//         showUploadList={false}
//         beforeUpload={async (file) => {
//           const base64 = await getBase64(file);
//           form.setFieldValue("image", base64);
//           setPreviewImage(base64);
//           return false;
//         }}
//       >
//         <Button icon={<UploadOutlined />} size="large" className="rounded-lg">
//           Choose Image
//         </Button>
//       </Upload>

//       {previewImage && (
//         <div className="mt-4 flex items-center gap-4">
//           <img
//             src={previewImage}
//             alt="Preview"
//             className="w-16 h-16 rounded-full object-cover border-2 border-yellow-300 shadow-md"
//           />
//           <span className="text-sm text-gray-500 italic">Profile preview</span>
//         </div>
//       )}
//     </Form.Item>

//     {/* Submit */}
//     <Form.Item>
//       <Button
//         type="primary"
//         htmlType="submit"
//         size="large"
//         className="w-full rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 text-black font-semibold hover:from-yellow-400 hover:to-yellow-500 shadow-lg transition"
//       >
//         Submit Review
//       </Button>
//     </Form.Item>
//   </Form>
// </div>

//       {/* Form */}
//       {/* <div className="w-full max-w-xl mx-auto mb-12 bg-white p-6 rounded-lg shadow-md border border-[#ffe3c4]">
//         <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
//           <Form.Item name="name" label="Your Name" rules={[{ required: true }]}>
//             <Input />
//           </Form.Item>

//           <Form.Item
//             name="review"
//             label="Your Review"
//             rules={[{ required: true, message: "Please enter your review." }]}
//           >
//             <Input.TextArea rows={4} />
//           </Form.Item>

//           <Form.Item name="rating" label="Rating">
//             <Rate defaultValue={5} />
//           </Form.Item>

//           <Form.Item name="image" label="Upload Image">
//             <Upload
//               accept="image/*"
//               maxCount={1}
//               showUploadList={false}
//               beforeUpload={async (file) => {
//                 const base64 = await getBase64(file);
//                 form.setFieldValue("image", base64);
//                 setPreviewImage(base64);
//                 return false;
//               }}
//             >
//               <Button icon={<UploadOutlined />}>Upload Image</Button>
//             </Upload>
//             {previewImage && (
//               <img
//                 src={previewImage}
//                 alt="Preview"
//                 className="w-16 h-16 mt-2 rounded-full border object-cover"
//               />
//             )}
//           </Form.Item>

//           <Form.Item>
//             <Button
//               type="primary"
//               htmlType="submit"
//               className="bg-[#ffcc70] text-black hover:bg-yellow-400"
//             >
//               Submit Review
//             </Button>
//           </Form.Item>
//         </Form>
//       </div> */}

//       {/* Swiper (only dynamic reviews shown) */}
//       <div className="w-full max-w-7xl mx-auto">
//         {reviews.length === 0 ? (
//           <p className="text-center text-gray-500 italic">
//             No reviews yet. Be the first to share your blessings!
//           </p>
//         ) : (
//           <Swiper
//             modules={[Pagination, Autoplay]}
//             pagination={{ clickable: true }}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//             loop={true}
//             spaceBetween={20}
//             breakpoints={{
//               320: { slidesPerView: 1 },
//               480: { slidesPerView: 1 },
//               640: { slidesPerView: 2 },
//               768: { slidesPerView: 3 },
//               1024: { slidesPerView: 4 },
//               1280: { slidesPerView: 4 },
//             }}
//             className="rounded-xl"
//           >
//             {reviews.map((review, idx) => (
//               <SwiperSlide key={idx}>
//                 <div className="group bg-white mb-8 p-6 shadow-md rounded-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 border border-[#ffe3c4]">
//                   <img
//                     src={review.image || "/default-avatar.jpg"}
//                     alt={review.name}
//                     className="w-24 h-24 rounded-full border-4 border-[#ffcc70] shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300 object-cover"
//                   />
//                   <h3 className="lg:text-xl text-lg font-semibold text-gray-600">
//                     {review.name}
//                   </h3>
//                   <div className="flex justify-center mt-2">
//                     {Array.from({ length: review.rating }).map((_, i) => (
//                       <span key={i} className="text-yellow-400 lg:text-2xl text-xl">
//                         ★
//                       </span>
//                     ))}
//                   </div>
//                   <p className="text-gray-600 lg:text-lg text-sm mt-4 italic fira-sans">
//                     "{review.review}"
//                   </p>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReviewSection;



import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import ReviewModalForm from "./ReviewModalForm";

const LOCAL_KEY = "user_reviews";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    setReviews(stored ? JSON.parse(stored) : []);
  }, []);

  const refreshReviews = () => {
    const stored = localStorage.getItem(LOCAL_KEY);
    setReviews(stored ? JSON.parse(stored) : []);
  };

  return (
    <>
    <div className="py-10 lg:px-8">
      <h2 className="lg:text-3xl text-2xl font-bold text-center py-2 text-white bg-gradient-to-l from-[#2e2b06] to-[#ffcc70] mb-8">
        Blessings & Feedback
      </h2>

      {/* Button to open modal */}
     

      {/* Modal Form Component */}
      <ReviewModalForm open={open} onClose={() => setOpen(false)} onSubmit={refreshReviews} />

      {/* Swiper: no change needed */}
      <div className="w-full max-w-7xl mx-auto">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            No reviews yet. Be the first to share your blessings!
          </p>
        ) : (
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 4 },
            }}
            className="rounded-xl"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx}>
                <div className="group bg-white mb-8 p-6 shadow-md rounded-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 border border-[#ffe3c4]">
                  <img
                    src={review.image || "/default-avatar.jpg"}
                    alt={review.name}
                    className="w-24 h-24 rounded-full border-4 border-[#ffcc70] shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300 object-cover"
                  />
                  <h3 className="lg:text-xl text-lg font-semibold text-gray-600">
                    {review.name}
                  </h3>
                  <div className="flex justify-center mt-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400 lg:text-2xl text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 lg:text-lg text-sm mt-4 italic fira-sans">
                    "{review.review}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      
    </div>
   <div className="flex justify-end mb-10">
  <button
    onClick={() => setOpen(true)}
    className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-yellow-300 via-yellow-400 to-yellow-500 text-black font-bold shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl group overflow-hidden"
  >
    {/* Sparkling background on hover */}
    <span className="absolute inset-0 bg-yellow-100 opacity-0 group-hover:opacity-20 transition-all duration-300 blur-sm rounded-full" />

    {/* Animated Pen Emoji */}
    <span className="text-2xl sm:text-3xl animate-bounce-slow">✍️</span>

    {/* Tooltip-style label on hover */}
    <span className="absolute right-full top-1/2 transform -translate-y-1/2 pr-2 text-sm sm:text-base bg-white px-3 py-1 rounded-md shadow-md text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300">
      Share Review
    </span>
  </button>
</div>

    </>
  );
};

export default ReviewSection;
