// import React, { useState } from "react";
// import { Form, Input, Button, message } from "antd";

// const ContactForm = () => {
//   const [form] = Form.useForm();

//   const onFinish = (values) => {
//     console.log("Form Submitted:", values);
//     message.success("Message sent successfully!");
//     form.resetFields();
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="bg-gradient-to-r from-[#4682B4] to-[#04080B] p-6 rounded-2xl shadow-lg border-b-8 border-white w-80 lg:w-[550px]" data-aos="fade-right" style={{ borderRadius: '15px 50px' }}>
//         <h2 className="text-lg lg:text-3xl font-semibold text-white text-center mb-4 p-2 rounded-lg">Get in Touch</h2>
        
//         <Form
//           form={form}
//           layout="vertical"
//           onFinish={onFinish}
//         >
//           <Form.Item
//             label={<span className="text-white font-medium">Full Name</span>}
//             name="name"
//             rules={[{ required: true, message: "Please enter your name!" }]}
//           >
//             <Input placeholder="Enter your name" className="bg-gray-200" />
//           </Form.Item>

//           <Form.Item
//             label={<span className="text-white font-medium">Email</span>}
//             name="email"
//             rules={[{ required: true, type: "email", message: "Please enter a valid email!" }]}
//           >
//             <Input placeholder="Enter your email" className="bg-gray-200" />
//           </Form.Item>

//           <Form.Item
//             label={<span className="text-white font-medium">Mobile Number</span>}
//             name="mobileNumber"
//             rules={[{ required: true, message: "Please enter your mobile number!" }]}
//           >
//             <Input placeholder="Enter your mobile number" className="bg-gray-200" />
//           </Form.Item>

//           <Form.Item
//             label={<span className="text-white font-medium">Subject</span>}
//             name="subject"
//             rules={[{ required: true, message: "Please enter the subject!" }]}
//           >
//             <Input placeholder="Enter subject" className="bg-gray-200" />
//           </Form.Item>

//           <Form.Item
//             label={<span className="text-white font-medium">Message</span>}
//             name="message"
//             rules={[{ required: true, message: "Please enter your message!" }]}
//           >
//             <Input.TextArea rows={4} placeholder="Write your message..." className="bg-gray-200" />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit" className="w-full bg-red-500 hover:bg-red-600 border-none shadow-lg" style={{ borderRadius: '5px 5px' }}>
//               Send Message
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
