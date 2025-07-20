import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Dr. Ananya Mehta",
    role: "Chief Pharmacist, MediCare",
    image: "/testimonials1.jpg",
    feedback:
      "GxPro has revolutionized our pharmacy management. The automated inventory tracking and prescription handling are seamless and efficient!",
  },
  {
    name: "Rahul Khanna",
    role: "Supply Chain Manager, PharmaPlus",
    image: "/testimonials2.jpg",
    feedback:
      "Managing pharmaceutical logistics has never been easier! GxPro ensures real-time updates and accurate stock monitoring.",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Head of R&D, BioGen Labs",
    image: "/testimonials3.jpg",
    feedback:
      "As a research scientist, having a well-organized medicine database is crucial. GxPro makes information access smooth and effective!",
  },
  {
    name: "Suresh Patil",
    role: "Owner, HealthFirst Pharmacy",
    image: "/testimonials4.jpg",
    feedback:
      "Since integrating GxPro, our customer service and prescription handling have improved drastically. Highly recommended!",
  },
  {
    name: "Neeraj Gupta",
    role: "Medical Representative, MedLife",
    image: "/testimonials5.jpg",
    feedback:
      "This platform helps us track medical supplies and sales effortlessly. A must-have tool for the pharmaceutical industry!",
  },
];

const Testimonials = () => {
  return (
    <section className="mt-12 flex flex-col items-center">
      <div className="w-85 lg:w-full lg:max-w-[600px] mx-auto lg:px-6 px-4 py-3 pb-20 text-center">
        <h2
          className="lg:text-4xl text-xl font-bold text-black hover:scale-105"
          data-aos="fade-up"
        >
          Our Testimonials
        </h2>
        <p className="text-gray-600 lg:mt-5 mt-3 lg:text-lg text-sm drop-shadow-lg">
          Real stories from real users who love GxPro
        </p>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mt-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center p-6  bg-gradient-to-r from-[#04080B] to-[#4682B4] rounded-xl shadow-lg max-w-2xl mx-auto">
                <img
                  src={testimonial.image}
                  alt={`Photo of ${testimonial.name}`}
                  className="w-42 h-42 object-cover rounded-full mb-4 border-4 border-white shadow-md"
                />
                <h3 className="text-2xl font-semibold text-white underline mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-200 mb-2">{testimonial.role}</p>
                <p className="text-base text-gray-100 italic mb-4">
                  "{testimonial.feedback}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
