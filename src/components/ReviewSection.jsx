
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import ReviewModalForm from "./ReviewModalForm";
import { MessageCircleHeart, UsersRound } from "lucide-react";

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
      <div className="w-full max-w-7xl mx-auto px-4 py-6">
        {reviews.length === 0 ? (
          // <p className="text-center text-gray-500 italic">
          //   No reviews yet. Be the first to share your blessings!
          // </p>
           <div className="flex flex-col items-center justify-center gap-4 text-gray-500">
      <MessageCircleHeart className="w-12 h-12 text-red-400 animate-pulse" />
      <p className="text-center italic text-lg sm:text-xl">
        No reviews yet. <span className="text-red-600 font-semibold">Be the first</span> to share your blessings!
      </p>
    </div>
        ) : (<div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="lg:text-3xl font-semibold text-gray-800 flex items-center gap-2">
          <UsersRound className="w-6 h-6 text-gray-900" />
          What Devotees Say
        </h2>
        <span className="lg:text-lg text-gray-600">
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
              </div>

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
