import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const KedarnathDham = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-cover bg-black bg-center h-[450px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('/blog_card6.jpg')" }}
      >
        <div className="bg-opacity-60 p-10 rounded-xl">
          <h1 className="lg:text-5xl  text-3xl font-extrabold tracking-wide">
            Kedarnath Dham Yatra 2025
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            A Sacred Journey to One of the Twelve Jyotirlingas of Lord Shiva
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-gray-100 via-black-200 py-12 to-gray-200">
      <div className="text-md bg-transparent p-2 text-gray-600 flex items-center justify-center space-x-2">
      <Link to="/blog" className="text-black font-medium hover:font-semibold">
        Blogs
      </Link>
      <span className="text-gray-400">/</span>
      <span className="text-gray-500">Kedarnath Dham</span>
    </div>
        {/* Overview Section */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="container lg:w-340 w-80 mx-auto px-6 md:px-10 py-16 bg-white shadow-xl rounded-lg"
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-[#1f84a6] text-center mb-5 underline underline-offset-6">
            Kedarnath Dham: The Abode of Lord Shiva
          </h2>
          <p className="mt-6 lg:text-lg text-sm text-gray-700 text-center leading-relaxed max-w-6xl mx-auto">
          Kedarnath Dham, located in the serene and rugged Garhwal Himalayas of Uttarakhand, is one of the most revered Hindu pilgrimage sites dedicated to Lord Shiva. Situated at a lofty altitude of 3,583 meters, Kedarnath is not just a temple but a profound spiritual destination that attracts millions of devotees from across the globe. It is one of the twelve Jyotirlingas, which are considered to be the most sacred shrines dedicated to Lord Shiva. The temple holds immense religious significance and is regarded as a powerful symbol of Shiva’s divine presence on Earth.

The journey to Kedarnath is both physically challenging and spiritually enriching, offering devotees a chance to connect with Lord Shiva while surrounded by the awe-inspiring beauty of the Himalayan mountains. The trek to the temple itself is a testament to the devotee's faith and determination. Pilgrims typically start the journey from Gaurikund, which is around 16 kilometers from the temple. The trek, though demanding due to the altitude and steep terrain, is filled with moments of divine awe. Along the way, trekkers pass through scenic landscapes of lush valleys, dense forests, and roaring rivers, which provide a sense of peace and tranquility. For many, the physical hardships of the journey fade away as they experience the spiritual aura that envelops the region.
</p>
<p className="mt-6 lg:text-lg text-sm text-gray-700 text-center leading-relaxed max-w-6xl mx-auto">

The Kedarnath temple is believed to have been built by the Pandavas from the Mahabharata, with legend suggesting that Lord Shiva himself consecrated the shrine. The temple’s unique architecture, made of large, heavy stone slabs, has withstood the test of time and natural calamities. It is famously known for its cylindrical shape and intricate carvings that evoke a sense of devotion and grandeur. The temple is open for worship only during the summer months, from late April to early November, as heavy snowfall makes the area inaccessible during the winter.

The atmosphere around Kedarnath is mystical, with snow-capped peaks, lush green meadows, and the sounds of rushing mountain streams creating a serene and divine ambiance. The temple complex is also home to a series of other smaller shrines dedicated to various deities, including Lord Ganesha and Lord Parvati. Pilgrims not only offer their prayers at the main temple but also take time to meditate and seek blessings from the divine energy of the region.

The trek to Kedarnath is an experience that is deeply transformative. Devotees often feel a sense of spiritual elevation as they ascend through the rugged terrain, knowing that they are walking in the footsteps of countless saints, sages, and mythological figures who have visited the shrine for centuries. Many pilgrims believe that a visit to Kedarnath can lead to the purification of the soul, the removal of accumulated sins, and the granting of divine blessings from Lord Shiva.

The surrounding beauty of the Kedarnath region, combined with the divine presence that many pilgrims feel during their visit, makes this pilgrimage an unforgettable and life-changing experience. Whether one visits for religious reasons or simply to witness the magnificence of nature, Kedarnath Dham remains a symbol of spiritual devotion and connection with the divine.



          </p>
        </motion.section>

        {/* Best Time to Visit */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white mt-10 p-4 lg:w-340 w-80 mx-auto shadow-lg rounded-lg text-center transition"
        >
          <h2 className="text-xl lg:text-3xl font-bold text-[#1f84a6] text-center">
            Best Time to Visit
          </h2>
          <p className="mt-2 lg:text-lg text-sm px-6 py-3 mx-auto text-gray-700">
            The best time to visit Kedarnath is from May to October, when the temple is open to devotees. During these months, the weather is favorable, making the trek easier and more accessible.
          </p>
        </motion.div>

        {/* Booking CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="container mx-auto mt-16 text-center py-8"
        >
          <h2 className="text-xl lg:text-3xl font-bold text-[#1f84a6] text-center mt-3">
            Plan Your Kedarnath Yatra Now!
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            Embark on a spiritual and mesmerizing journey to Kedarnath Dham.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 bg-[#1f84a6] text-white lg:px-8 lg:py-3  px-4 py-2 rounded-lg lg:text-lg text-sm hover:bg-[#116869] transition shadow-md"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default KedarnathDham;