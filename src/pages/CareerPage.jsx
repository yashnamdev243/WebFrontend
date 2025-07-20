// import { useState } from "react";
// import { Modal, Form, Input, Upload, Button, message } from "antd";
// import { FaUpload, FaUser, FaEnvelope, FaPhone, FaLinkedin, FaFileAlt } from "react-icons/fa";
// //import "antd/dist/reset.css";

// const CareerPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [form] = Form.useForm();

//   const handleApply = () => {
//     setIsModalOpen(true);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   const handleSubmit = (values) => {
//     localStorage.setItem("jobApplication", JSON.stringify(values));
//     message.success("Application Submitted Successfully!");
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100   ">
        
//       <section
//           className="lg:w-full  w-full lg:px-2 px-4   bg-gradient-to-b from-gray-100 to-blue-100 grid lg:grid-cols-2 bg-cover lg:h-screen mx-auto text-white py-10 pt-20 lg:py-25 lg:pt-35 text-center"
//           data-aos="fade-down"

//         >
           
//           <div className="flex flex-col mt-5 lg:items-end lg:pr-5 lg:w-full w-80  justify-center">
          
//           <div className="border-b-8 shadow-2xl border-white   bg-gradient-to-r from-[#4682B4] to-[#04080B]  transition-all duration-300 ease-in-out  lg:p-4 p-4 text-white 
//           "
          

//             style={{ borderRadius: '15px 50px' }}>
//             <h2 className="lg:text-5xl text-3xl lg:mt-6  mt-4  font-bold hover:scale-105 lg:mr-[15%]">
//             Grow with GxPro

// </h2>
//             <p className="lg:text-lg text-sm lg:max-w-2xl  leading-relaxed lg:mt-4 lg:pt-4 pt-3 lg:px-10 px-4 pb-8 text-left">
              
//             At MSGMP/GXPRO, we are committed to innovation, excellence, and advancing the pharmaceutical industry. Join our dynamic team and be part of groundbreaking research, quality control, and healthcare solutions. We offer diverse roles in Research, Production, Sales, and Quality Assurance, along with career growth opportunities, competitive salaries, and a collaborative work culture. Our mission is to revolutionize healthcare with cutting-edge technology and dedicated professionals. If you are passionate about making a difference in the world of pharma and healthcare, apply today and take the next step in your career with MSGMP/GXPRO. Your journey starts here! 
//             </p>
//             </div>
//           </div>
//           <div class="lg:w-150  mx-auto h-fit relative  flex justify-center items-center  overflow-hidden">
//   <img src="/career00.png" alt="Premium Image" class="lg:w-full w-60 h-auto object-cover animate-pulse" />
// </div>
//         </section>

//       <div className="text-center mb-10 mt-10 ">
//         <h1 className="text-4xl font-bold ">Join Our Pharma Team</h1>
//         <p className="text-gray-600 mt-2">Exciting career opportunities in the pharmaceutical industry!</p>
//       </div>
// {/* 
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:px-40 mb-12">
//         <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
//           <img src="/career1.png" alt="Pharma Research" className="w-32 h-32 md:w-50 md:h-50 mb-4 rounded-full" />
//           <h2 className="text-lg md:text-xl font-semibold">Pharmaceutical Researcher</h2>
//           <p className="text-gray-600 mt-2">Join our R&D team to innovate in medicine and healthcare.</p>
//           <button className="mt-4  bg-gradient-to-r from-[#4682B4] to-[#04080B]  text-white px-4 py-2 rounded w-full md:w-auto" onClick={handleApply}>Apply Now</button>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
//           <img src="/career2.png" alt="Quality Control" className="w-32 h-32 md:w-55 md:h-45 mb-4 rounded-full" />
//           <h2 className="text-lg md:text-xl font-semibold">Quality Control Specialist</h2>
//           <p className="text-gray-600 mt-2">Ensure top-notch product safety and compliance.</p>
//           <button className="mt-4  bg-gradient-to-r from-[#4682B4] to-[#04080B]  text-white px-4 py-2 rounded w-full md:w-auto" onClick={handleApply}>Apply Now</button>
//         </div>
//       </div> */}

// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  lg:px-40 px-10 mb-12">
//   <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
//     <img src="/career1.png" alt="Pharma Research" className="w-32 h-32 md:w-50 md:h-50 mb-4 rounded-full" />
//     <h2 className="text-lg md:text-xl font-semibold">Pharmaceutical Researcher</h2>
//     <p className="text-gray-600 mt-2">Join our R&D team to innovate in medicine and healthcare.</p>
//     <button className="mt-4 bg-gradient-to-r from-[#4682B4] to-[#04080B] text-white px-4 py-2 rounded w-full md:w-auto" onClick={handleApply}>Apply Now</button>
//   </div>

//   <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
//     <img src="/career2.png" alt="Quality Control" className="w-32 h-32 md:w-50 md:h-50 mb-4 rounded-full" />
//     <h2 className="text-lg md:text-xl font-semibold">Quality Control Specialist</h2>
//     <p className="text-gray-600 mt-2">Ensure top-notch product safety and compliance.</p>
//     <button className="mt-4 bg-gradient-to-r from-[#4682B4] to-[#04080B] text-white px-4 py-2 rounded w-full md:w-auto" onClick={handleApply}>Apply Now</button>
//   </div>

//   <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
//     <img src="/career3.png" alt="Production Manager" className="w-32 h-32 md:w-50 md:h-50 mb-4 rounded-full" />
//     <h2 className="text-lg md:text-xl font-semibold">Production Manager</h2>
//     <p className="text-gray-600 mt-2">Oversee pharmaceutical production processes for efficiency.</p>
//     <button className="mt-4 bg-gradient-to-r from-[#4682B4] to-[#04080B] text-white px-4 py-2 rounded w-full md:w-auto" onClick={handleApply}>Apply Now</button>
//   </div>

//   <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
//     <img src="/career4.png" alt="Regulatory Affairs" className="w-32 h-32 md:w-50 md:h-50 mb-4 rounded-full" />
//     <h2 className="text-lg md:text-xl font-semibold">Regulatory Affairs Specialist</h2>
//     <p className="text-gray-600 mt-2">Ensure compliance with pharmaceutical regulations.</p>
//     <button className="mt-4 bg-gradient-to-r from-[#4682B4] to-[#04080B] text-white px-4 py-2 rounded w-full md:w-auto" onClick={handleApply}>Apply Now</button>
//   </div>

//   <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
//     <img src="/career5.png" alt="Sales & Marketing" className="w-32 h-32 md:w-50 md:h-50 mb-4 rounded-full" />
//     <h2 className="text-lg md:text-xl font-semibold">Pharma Sales & Marketing</h2>
//     <p className="text-gray-600 mt-2">Promote pharmaceutical products to healthcare professionals.</p>
//     <button className="mt-4 bg-gradient-to-r from-[#4682B4] to-[#04080B] text-white px-4 py-2 rounded w-full md:w-auto" onClick={handleApply}>Apply Now</button>
//   </div>

//   <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
//     <img src="/career6.png" alt="Clinical Research" className="w-32 h-32 md:w-50 md:h-50 mb-4 rounded-full" />
//     <h2 className="text-lg md:text-xl font-semibold">Clinical Research Associate</h2>
//     <p className="text-gray-600 mt-2">Conduct trials and research for new drug development.</p>
//     <button className="mt-4 bg-gradient-to-r from-[#4682B4] to-[#04080B] text-white px-4 py-2 rounded w-full md:w-auto" onClick={handleApply}>Apply Now</button>
//   </div>
// </div>

//       <div className=" bg-gradient-to-r from-[#4682B4] to-[#04080B] lg:w-300 w-85 mx-auto text-white p-6 md:p-10 rounded-lg shadow-2xl mb-1 text-center ">
//         <h2 className="text-2xl md:text-3xl font-bold">Why Work With Us?</h2>
//         <div className="flex justify-center">
//   <div className=" text-center">
//     <ul className="mt-4 space-y-2 text-sm md:text-base flex flex-col items-start mx-auto">
//       <li>✅ Competitive Salary & Benefits</li>
//       <li>✅ Cutting-Edge Research & Innovation</li>
//       <li>✅ Career Growth & Learning Opportunities</li>
//       <li>✅ Collaborative Work Culture</li>
//     </ul>
//   </div>
// </div>

//       </div>

//       <Modal title="Apply for a Position" open={isModalOpen} onCancel={handleCancel} footer={null}>
//         <Form form={form} onFinish={handleSubmit} layout="vertical">
//           <Form.Item name="name" label="Full Name" rules={[{ required: true, message: "Please enter your name" }]}>
//             <Input prefix={<FaUser />} placeholder="Your Name" />
//           </Form.Item>
//           <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}>
//             <Input prefix={<FaEnvelope />} placeholder="Your Email" />
//           </Form.Item>
//           <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: "Please enter your phone number" }]}>
//             <Input prefix={<FaPhone />} placeholder="Your Phone Number" />
//           </Form.Item>
//           <Form.Item name="linkedin" label="LinkedIn Profile">
//             <Input prefix={<FaLinkedin />} placeholder="LinkedIn Profile (Optional)" />
//           </Form.Item>
//           <Form.Item name="resume" label="Upload Resume" valuePropName="fileList" getValueFromEvent={(e) => e.fileList} rules={[{ required: true, message: "Please upload your resume" }]}>
//             <Upload beforeUpload={() => false} listType="text">
//               <Button icon={<FaUpload />}>Click to Upload</Button>
//             </Upload>
//           </Form.Item>
//           <Form.Item name="message" label="Tell us about yourself">
//             <Input.TextArea prefix={<FaFileAlt />} rows={4} placeholder="Your Message" />
//           </Form.Item>
//           <Button type="primary" htmlType="submit" className="w-full">Submit Application</Button>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default CareerPage;