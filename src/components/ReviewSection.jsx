
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Button, Modal } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import ReviewModalForm from "./ReviewModalForm";
import { MessageCircleHeart, UsersRound } from "lucide-react";
import { Spin } from "antd";
import { FaRegCommentDots } from "react-icons/fa";


const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const handleCardClick = (review) => {
    setSelectedReview(review);
    setOpenModal(true);
  };

 const fetchReviews = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://namdevshivlingart.vercel.app/api/reviews");
      if (!res.ok) throw new Error("Failed to fetch reviews");
      const data = await res.json();
      setReviews(data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchReviews();
  }, []);


  return (
    <>
    <div className="py-10 lg:px-0">
      <h2 className="lg:text-3xl text-2xl font-bold text-center py-2 text-white bg-gradient-to-r from-[#ffcc70] to-[#ff8c00] mb-8 leading-tight [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">
        Blessings & Feedback
      </h2>

      <ReviewModalForm open={open} onClose={() => setOpen(false)} onSubmit={fetchReviews} />

      {/* Swiper: no change needed */}
      <div className="w-full max-w-7xl mx-auto px-4 py-6">
        {reviews.length === 0 ? (
        
           <div className="flex flex-col items-center justify-center gap-4 text-gray-500">
      <MessageCircleHeart className="w-12 h-12 text-red-400 animate-pulse" />
      <p className="text-center italic text-lg sm:text-xl">
        No reviews yet. <span className="text-red-600 font-semibold">Be the first</span> to share your blessings!
      </p>
    </div>
        ) : (<div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="lg:text-3xl font-semibold text-orange-400 flex items-center gap-2 ">
          <UsersRound className="w-6 h-6 text-orange-400 " />
          What Devotees Say
        </h2>
        <span className="lg:text-lg text-orange-400">
          {reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
        </span>
      </div>
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
            {/* {reviews.map((review, idx) => (
              <SwiperSlide key={idx}>
                <div className="group bg-white mb-8 p-6 shadow-md rounded-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 border border-[#ffe3c4]">
                  <img
                     src={`http://namdevshivlingart.vercel.app${review.image}`} 
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
                 
               {review.reply && (
                <p className="!text-blue-600 italic mt-2">
                  Admin Reply: {review.reply}
                </p>
         )}


                </div>
              </SwiperSlide>
            ))} */}
         
                    {reviews.map((review, idx) => (
          // <SwiperSlide key={idx}>
          //   <div
          //     onClick={() => handleCardClick(review)}
          //     className="relative bg-gradient-to-r from-[#ffcc70] to-[#ff8c00] p-6 h-80 shadow-md rounded-2xl flex flex-col items-center text-center 
          //     border border-[#ffe3c4] transition-all duration-300 hover:shadow-2xl overflow-hidden cursor-pointer hover:-translate-y-2"
          //   >
          //     <img
          //       src={
          //         review.image
          //           ? `http://namdevshivlingart.vercel.app${review.image}`
          //           : "/default-avatar.jpg"
          //       }
          //       alt={review.name}
          //       className="w-28 h-28 rounded-full border-4 border-[#ffff] shadow-md mb-3 object-cover"
          //     />

          //     <h3 className="text-lg font-semibold text-white leading-tight [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">
          //       {review.name}
          //     </h3>

          //     <div className="flex justify-center mt-1 mb-2">
          //       {Array.from({ length: review.rating }).map((_, i) => (
          //         <span key={i} className="text-yellow-400 text-lg leading-tight [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">
          //           ★
          //         </span>
          //       ))}
          //     </div>

          //     <p className="text-white italic text-sm leading-snug line-clamp-3 ">
          //    {review.name} Review : <span className="text-gray-600 ">"{review.review}"</span>
          //     </p>

          //     {review.reply && (
          //       <p className="text-white italic text-xs mt-2 line-clamp-2">
          //         Namdev Narmadeshwar Shivling Arts
          //       Reply: <span className="text-gray-600">  {review.reply}</span>
          //       </p>
          //     )}
          //   </div>
          // </SwiperSlide>
          <SwiperSlide key={idx}>
  <div
    onClick={() => handleCardClick(review)}
    className="
      relative 
      p-6
      h-80 
      rounded-2xl 
      cursor-pointer
      overflow-hidden
      flex flex-col items-center text-center
      transition-all duration-500 

      /* Background */
      bg-gradient-to-br from-[#ffcc70]/90 to-[#ff8c00]/90 

      /* Glass Glow */
      backdrop-blur-md 
      border border-white/30

      /* Hover */
      hover:-translate-y-3 
      hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)]
    "
  >

    {/* 🎇 Floating Glow Border */}
    <div className="
      absolute inset-0 rounded-2xl 
      bg-gradient-to-r from-transparent via-white/20 to-transparent 
      opacity-0 hover:opacity-100 
      transition-all duration-700
      animate-pulse
    " />

    {/* PROFILE IMAGE */}
    <img
      src={
        review.image
          ? `http://namdevshivlingart.vercel.app${review.image}`
          : "/default-avatar.jpg"
      }
      alt={review.name}
      className="
        w-32 h-32 
        rounded-full 
        border-4 border-white 
        shadow-lg 
        object-cover
        mb-2
        transition-all duration-300
        group-hover:scale-105
      "
    />

    {/* NAME */}
    <h3 className="
      text-lg font-bold text-white 
      tracking-wide 
      [text-shadow:_0_3px_6px_rgb(0_0_0_/_0.6)]
    ">
      {review.name}
    </h3>

    {/* ⭐ RATING */}
    <div className="flex justify-center mt-1 mb-2">
      {Array.from({ length: review.rating }).map((_, i) => (
        <span
          key={i}
          className="
            text-yellow-300 
            text-xl 
            drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]
          "
        >
          ★
        </span>
      ))}
    </div>

    {/* USER REVIEW */}
    <p className="text-white text-sm italic leading-snug line-clamp-1 px-1">
      <span className="font-semibold">{review.name} says:</span>
      <span className="text-gray-100"> “{review.review}”</span>
    </p>

    {/* ADMIN REPLY */}
    {review.reply && (
      <p className="
        text-white text-sm mt-2 italic opacity-90 line-clamp-2
        px-2
      ">
        <span className="font-semibold">
          Namdev Narmadeshwar Shivling Arts:
        </span>{" "}
        <span className="text-gray-100">“{review.reply}”</span>
      </p>
    )}
  </div>
</SwiperSlide>

        ))}

          </Swiper>
                {/* Modal for Full Review */}
      <Modal
        open={openModal}
        onCancel={() => setOpenModal(false)}
        footer={null}
        centered
        width={600}
        className="rounded-xl"
      >
        {selectedReview && (
          <div className="p-2 flex flex-col items-center text-center">
            <img
              src={
                selectedReview.image
                  ? `http://namdevshivlingart.vercel.app${selectedReview.image}`
                  : "/default-avatar.jpg"
              }
              alt={selectedReview.name}
              className="w-32 h-32 rounded-full border-4 border-[#ffcc70] shadow-lg mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {selectedReview.name}
            </h3>

            <div className="flex justify-center mt-2 mb-4">
              {Array.from({ length: selectedReview.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>

            <div className="bg-[#fefaf5] rounded-lg p-4 w-full shadow-inner mb-3">
              <p className="text-orange-600 font-semibold text-base mb-1">
                  {selectedReview.name} Review :
                </p>
              <p className="text-orange-500 italic text-sm leading-relaxed">
                “{selectedReview.review}”
              </p>
            </div>

            {selectedReview.reply && (
              <div className="bg-[#eef3ff] rounded-lg p-4 w-full shadow-inner border border-blue-200">
                <p className="text-blue-700 font-semibold text-base mb-1">
                  Namdev Narmadeshwar Shivling Arts Reply :
                </p>
                <p className="text-blue-600 italic text-sm leading-relaxed">
                  {selectedReview.reply}
                </p>
              </div>
            )}
          </div>
        )}
      </Modal>

              </div>

        )}
      </div>
      
    </div>
   {/* <div className="flex justify-end mb-10">
  <button
    onClick={() => setOpen(true)}
    className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-yellow-300 via-yellow-400 to-yellow-500 text-black font-bold shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl group overflow-hidden drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
  >
    <span className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-20 transition-all duration-300 blur-sm rounded-full " />

    <span className="text-2xl sm:text-3xl animate-bounce-slow ">✍️</span>

    <span className="absolute right-full top-1/2 transform -translate-y-1/2 pr-2 text-sm sm:text-base bg-white px-3 py-1 rounded-md shadow-md text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300">
      Share Review
    </span>
  </button>
</div> */}
<div className="flex justify-start mb-10">
  <FaRegCommentDots
    onClick={() => setOpen(true)}
    className="
      w-14 h-14 sm:w-16 sm:h-16 
      p-3
      rounded-full 
      bg-gradient-to-r from-[#ffcc70] to-[#ff8c00] 
      text-white
      shadow-xl 
      hover:scale-110 
      transition-all duration-300 
      cursor-pointer
    "
  />
</div>


    </>
  );
};

export default ReviewSection;
