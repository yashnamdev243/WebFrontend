import React from "react";

const BlogHero = () => (
  <section className="w-full px-4 min-h-screen lg:px-2 bg-gradient-to-b from-gray-100 to-blue-100 grid lg:grid-cols-2 mx-auto text-white py-10 pt-20 lg:py-25 lg:pt-35 text-center"   data-aos="fade-down">
    <div className="flex flex-col mt-5 lg:items-end lg:pr-5 lg:w-full w-full justify-center" >
      <div 
        className="border-b-8 shadow-2xl border-white bg-gradient-to-r from-[#4682B4] to-[#04080B] transition-all duration-300 lg:p-4 p-4 text-white"
        style={{ borderRadius: '15px 50px' }}
      >
        <h2 className="lg:text-5xl text-3xl lg:mt-6 mt-4 font-bold  lg:mr-[15%]">
         Our Blog
        </h2>
        <p className="lg:text-lg text-sm lg:max-w-2xl leading-relaxed lg:mt-4 lg:pt-4 pt-3 lg:px-10 px-4 pb-8 text-left">
        The MSGMP Blog delivers insights, emerging trends, and expert
             knowledge to keep you informed and ahead in the industry. From
             market analysis and professional tips to in-depth guides and success
             stories, our content is designed to educate and inspire. Stay
             updated with the latest innovations, strategies, and best practices
             that shape the future. Whether you're seeking thought leadership,
             industry news, or actionable advice, you'll find valuable resources
             here. Engage with our community, explore fresh perspectives, and
             enhance your expertise. Check back regularly for new articles,
             expert opinions, and cutting-edge discussions tailored to your
             interests.
        </p>
      </div>
    </div>
    <div className="lg:w-150 mx-auto h-fit relative mt-8 flex justify-center items-center overflow-hidden">
      <img 
        src="/Blog.png" 
        alt="Blog Illustration" 
        className="lg:w-full w-80 h-auto object-cover" 
        loading="lazy"
      />
    </div>
  </section>
);

export default BlogHero;