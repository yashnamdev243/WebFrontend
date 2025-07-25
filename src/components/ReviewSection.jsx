import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const reviews = [
  {
    name: "Gaurav meena ",
    image: "/review1.jpeg",
    rating: 5,
    review: "Fantastic travel experience! The service was top-notch.",
  },
  {
    name: "Pooja Verma",
    image: "/review2.jpeg",
    rating: 4,
    review: "Loved the scenic beauty! Hotels could be better.",
  },
  {
    name: "Rahul Mehta",
    image: "/review7.jpg",
    rating: 5,
    review: "Amazing customer service! Best trip ever.",
  },
  {
    name: "Vikas Yadav",
    image: "/review3.jpeg",
    rating: 5,
    review: "Best spiritual journey of my life! Highly recommended.",
  },
  {
    name: "Anjali Deshmukh",
    image: "/review4.jpeg",
    rating: 4,
    review: "A great experience overall, well-planned and smooth.",
  },

  {
    name: "Meera Nair",
    image: "/review5.jpeg",
    rating: 5,
    review: "Truly divine experience! The arrangements were excellent.",
  },
  {
    name: "Rohit Khanna",
    image: "/review6.jpeg",
    rating: 5,
    review: "An unforgettable trip! The team was very professional.",
  },
];

const ReviewSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <h2 className="lg:text-4xl text-xl font-bold text-center mb-10 text-[#1f84a6] [text-shadow:_0_4px_4px_rgb(255_255_255_/_0.8)]">
        {" "}
        What Our Clients Say
      </h2>

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
        className="rounded-xl "
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className=" bg-white mb-8 p-6 shadow-md rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 rounded-full border-4 border-[#1b7391] shadow-lg mb-4"
              />
              <h3 className="lg:text-xl text-lg font-semibold text-gray-800">
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
  );
};

export default ReviewSection;
