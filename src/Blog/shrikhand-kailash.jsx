import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const ShrikhandKailash = () => {
    const navigate=useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-cover bg-black/20 bg-center h-[450px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('/blog_card22.jpg')" }}
      >
        <div className="bg-black/20 p-10 w-full h-[450px] flex flex-col justify-center items-center">
          <h1 className="lg:text-5xl text-3xl font-extrabold tracking-wide">
            Shrikhand Kailash Yatra 2025
          </h1>
          <p className="mt-3 text-lg text-gray-200 shadow-2xl font-semibold backdrop-blur-md px-2">
            A Challenging Trek to Lord Shiva’s Sacred Peak
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-gray-100 via-black-200 py-12 to-gray-200">

        <div className="text-md bg-transparent p-2 text-gray-600 flex items-center justify-center space-x-2">
              <Link to="/blog" className="text-black font-medium hover:font-semibold">
                Blogs
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-500">Shrikhand Kailash</span>
            </div>
        {/* Overview Section */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="container lg:w-340   w-80 mx-auto px-6 md:px-10 py-16 bg-white  shadow-xl rounded-lg"
        >
          <div className="text-center mx-auto">
            <span className="text-2xl lg:text-4xl text-[#1f84a6] mb-6 font-bold relative inline-block stroke-current">
              Shrikhand Kailash: The Sacred Journey
              <svg
                className="absolute left-0 right-0 mx-auto -bottom-0.5 w-full max-h-1.5"
                viewBox="0 0 55 5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                  strokeWidth="2"
                ></path>
              </svg>
            </span>
          </div>
          <p className="mt-6 lg:text-lg text-sm text-gray-700 leading-relaxed max-w-6xl mx-auto fira-sans text-justify">
            <b className="text-[#1f84a6]">Shrikhand Kailash</b>, located in the{" "}
            <b>Kullu district</b> of&nbsp;
            <b>Himachal Pradesh</b>, is one of the most <b>sacred</b> and{" "}
            <b>challenging pilgrimage&nbsp;</b>
            destinations in India. Standing at an imposing altitude of &nbsp;
            <b>5,150 meters (16,900 feet)</b>, it is dedicated to{" "}
            <b>Lord Shiva</b>, the Supreme God in Hinduism. The trek to{" "}
            <b>Shrikhand Kailash</b> is considered one of the{" "}
            <b>most difficult</b> in the Himalayan region, attracting thousands
            of <b>devotees</b> and <b>adventure enthusiasts</b> every year. The
            journey is <b>physically demanding</b>, with pilgrims required to
            traverse <b>steep ascents</b>,<b>treacherous paths</b>, and{" "}
            <b>unpredictable weather conditions</b> to reach the summit. The
            route is fraught with <b>challenges</b>, from <b>rocky terrains</b>{" "}
            to <b>narrow ridges</b>, making it a test of{" "}
            <b>endurance and determination</b>. However, for those who undertake
            this <b>arduous journey</b>, the <b>rewards</b> are immense—both
            <b>spiritually and physically</b>. The <b>spiritual significance</b>{" "}
            of <b>Shrikhand Kailash</b> is deeply rooted in{" "}
            <b>Hindu mythology</b>, with the summit believed to be the place
            where&nbsp;
            <b>Lord Shiva</b> meditates. According to legends, the peak’s unique
            shape resembles a&nbsp;
            <b>Shiva Lingam</b>, further elevating its sanctity.
            <b>Devotees believe</b> that completing the trek to{" "}
            <b>Shrikhand Kailash</b> <b>purifies the soul</b>&nbsp; and brings
            them closer to <b>Lord Shiva’s divine blessings</b>. Along the way,
            pilgrims stop to &nbsp;<b>perform rituals</b> and{" "}
            <b>offer prayers</b> at various <b>sacred spots</b>, each one
            amplifying their <b>connection with the deity</b>.
          </p>

          <p className="mt-6 lg:text-lg text-sm text-gray-700 text-justify leading-relaxed max-w-6xl mx-auto fira-sans">
            The surrounding landscape of <b>Shrikhand Kailash</b> is
            equally&nbsp;
            <b>awe-inspiring</b>, offering breathtaking views of{" "}
            <b>snow-capped peaks</b>,<b>deep valleys</b>, and{" "}
            <b>pristine rivers</b>. The <b>serenity</b> of the place and
            the&nbsp;
            <b>mystic aura</b> of <b>Lord Shiva</b> create a sense of{" "}
            <b>peace</b> and <b>devotion</b> that is unmatched. Despite its{" "}
            <b>challenges</b>, the trek to <b>Shrikhand Kailash</b> is also
            a&nbsp;
            <b>life-changing experience</b>, with the difficult journey serving
            as a form of&nbsp;
            <b>spiritual cleansing</b> and <b>reflection</b>. The{" "}
            <b>rugged terrain</b> and <b>remote location</b>
            add to the allure of the <b>pilgrimage</b>, making it not only a{" "}
            <b>physical endeavor</b>
            but also a <b>spiritual quest</b>. As pilgrims approach the summit,
            the feeling of <b>accomplishment</b> and
            <b>divine connection</b> overwhelms them, making every step
            worthwhile.&nbsp;
            <b>Shrikhand Kailash</b> is not just a <b>trekking destination</b>;
            it is a <b>pilgrimage</b> that tests one’s <b>faith</b>,{" "}
            <b>strength</b>, and <b>devotion</b>, offering a profound experience
            for those who seek both <b>adventure</b> and{" "}
            <b>spiritual awakening</b> in the lap of the <b>Himalayas</b>.
          </p>

          <p className="mt-6 lg:text-lg text-sm text-gray-700 text-justify leading-relaxed max-w-6xl mx-auto fira-sans">
            According to <b>Hindu mythology</b>, <b>Shrikhand Kailash</b> is the{" "}
            <b>abode of Lord Shiva</b>, and the summit is believed to be the
            place where the deity <b>meditates</b>. The peak’s shape is said to
            resemble a <b>Shiva Lingam</b>, adding to its{" "}
            <b>spiritual importance</b>. <b>Devotees believe</b> that the trek{" "}
            <b>purifies their soul</b> and brings them closer to{" "}
            <b>Lord Shiva’s blessings</b>. The surrounding <b>mountains</b> and{" "}
            <b>valleys</b>, steeped in <b>mythological tales</b>, are said to be inhabited by{" "}
            <b>divine beings</b>, adding to the <b>mystery</b> of the place.
            <b>Devotees often perform rituals</b> at various points along the
            trek, enhancing their <b>spiritual connection</b> with the deity.
          </p>
        </motion.section>

        {/* Mythological Significance */}
        {/* <motion.section
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 px-6 py-8"
        >
          
        </motion.section> */}

        {/* Trek Itinerary */}
        <motion.section
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 px-6 py-8"
        >
          <h2 className=" text-xl lg:text-3xl font-bold text-[#1f84a6] text-center mt-3">
            Route Map & Trek Itinerary
          </h2>
          <p className="mt-4 text-lg text-gray-700 text-center">
            Starting Point: Jalori Pass (Jalori to Shrikhand Kailash Trek)
          </p>
          <ul className="mt-4 space-y-4 lg:text-lg text-sm lg:w-340 w-80 mx-auto text-gray-100 text-center">
            <li className="bg-gradient-to-r from-[#0999a6]  to-[#0999a6]  p-4  rounded-lg shadow-lg">
              Jalori Pass (3,130 meters) to Raghupur Fort (3,700 meters) – 5 km
            </li>
            <li className="bg-gradient-to-r from-[#0999a6]  to-[#0999a6]  p-4 rounded-lg shadow-lg">
              Raghupur Fort to Shrikhand Kailash Peak (5,150 meters) – 8 km
            </li>
            <li className="bg-gradient-to-r from-[#0999a6]  to-[#0999a6]  p-4 rounded-lg shadow-lg">
              Return Journey – Descend back to Jalori Pass
            </li>
          </ul>
        </motion.section>

        {/* Best Time to Visit */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white  mt-10 p-4 lg:w-340 w-80 mx-auto shadow-lg rounded-lg text-center transition"
        >
          <h2 className=" text-xl lg:text-3xl font-bold text-[#1f84a6] text-center ">
            Best Time to Visit
          </h2>
          <p className="mt-2 lg:text-lg text-sm px-6 py-3 mx-auto text-gray-700 fira-sans md:text-center font-medium">
            "The best time to undertake the Shrikhand Kailash Yatra is from late
            June to early September. During this period, the weather is more
            favorable, and the snow has melted in most areas, making the trek
            more accessible. However, trekkers should always be prepared for
            sudden weather changes in the high altitudes." For those planning
            the pilgrimage, it is also advisable to avoid the monsoon season
            (July-August), as the trails can become slippery and the risk of
            landslides increases. The peak season is during the summer months
            when the skies are clear and the trek is slightly less demanding.
          </p>
        </motion.div>

        {/* Booking CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="container mx-auto mt-16 text-center py-8"
        >
          <h2 className=" text-xl lg:text-3xl font-bold text-[#1f84a6] text-center mt-3">
            Book Your Trip Now!
          </h2>
          <p className="mt-2 mx-5 md:text-lg text-gray-700 font-medium fira-sans">
            Join the Shrikhand Kailash Yatra for an unforgettable spiritual and
            physical experience amidst the stunning Himalayas.
          </p>
           <motion.button
                   onClick={()=>navigate("/contact")}
                     animate={{ scale: 1.1 }}
                     className="mt-6 border-1 bg-white border-[#1f84a6] text-[#1f84a6] hover:text-white lg:px-6 lg:py-2  px-4 py-2 rounded-lg lg:text-lg text-sm hover:bg-[#116869] transition shadow-md cursor-pointer"
                   >
                     Contact Us
                   </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ShrikhandKailash;
