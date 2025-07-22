import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const contactItems = [
  
  {
  icon: "📍",
  title: "Location",
  content: (
    <a
           href="https://maps.app.goo.gl/t1Ewtw1vwWQ7WQ4UA"

      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-800 hover:underline"
    >
      First Floor, 394, near Ratina Hospital PU-04, Vijay Nagar, Indore, Madhya Pradesh 452010
    </a>
  )
}
,
  {
    icon: "📞",
    title: "Call us on",
    content: [            

      <a href="tel:+919617770237" className=" block text-blue-800 hover:underline font-medium ">
        +91 9617770237
      </a>,
      <a href="tel:+9691377578" className="block text-blue-800 hover:underline font-medium">
         +91 9691377578
      </a>
    ],       

  },
  {
    icon: "✉️",
    title: "Email",
    content: [
      <a href="mailto:Info@msgmp.co.in" className="block text-blue-800 hover:underline font-medium">
        Info@msgmp.co.in
      </a>,
      <a href="mailto:Info@gxpro.co.in" className="block text-blue-800 hover:underline font-medium">
        Info@gxpro.co.in
      </a>
    ],
  },
];

const Dropdown_contentpage = () => {
  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);

  return (
    <section className="lg:py-16 py-6 lg:px-14 px-6 ">
      <div className="container mx-auto lg:px-4">
        {/* <h2 className="text-4xl font-bold text-center text-blue-900 mb-12" data-aos="fade-up"> */}
           <h2 
              className="lg:text-4xl text-[20px] font-bold   lg:mb-12 mb-6  relative 
              text-blue-900 text-center underline lg:px-20 lg:my-8"
              data-aos="fade-up"
            >
          Contact Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              className=" p-4 rounded-2xl shadow-lg text-center transform transition-transform  hover:scale-105  border-b-2 border-blue-900 bg-white  hover:bg-gradient-to-b from-gray-50 to-blue-100  text-black hover:shadow-2xl"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              data-aos="zoom-in"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full  border-b-2 border-gray-900 bg flex items-center justify-center text-3xl text-blue-700 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2 und">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dropdown_contentpage;
