import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const CarouselComponent = () => {
  const navigate = useNavigate(); // Navigation Hook

  const slides = [
    "At Spiritual Hikes, we specialize in organizing sacred pilgrimages and adventure treks across the Himalayas, offering a perfect blend of spirituality, nature, and adventure. With 5+ years of experience and 50+ successful treks, we have guided thousands of travelers on life-changing journeys to Char Dham Yatra, Kedarnath Dham, Mansarovar Kailash, Shrikhand Kailash, Kinnaur Kailash, and Adi Kailash. Our well-planned itineraries, expert guidance, and commitment to safety ensure that every trip is not just a travel experience but a deeply transformative spiritual journey that connects you with the divine energy of the mountains.",

    "Our tours are designed to provide peace, adventure, and devotion, catering to both pilgrims and adventure seekers. We take care of every aspect, including accommodations, transport, permits, and expert local guides, so you can focus on the spiritual essence of the journey. Whether you seek the serenity of Char Dham, the challenge of Shrikhand Kailash, or the divinity of Mansarovar Kailash, we ensure a smooth and enriching experience. Each journey is crafted with care, authenticity, and respect for tradition, making it safe, comfortable, and truly memorable.",

    "At Spiritual Hikes, we prioritize safety, eco-friendly travel, and personalized service, ensuring every traveler enjoys a worry-free journey. Our team of experienced trek leaders, mountaineers, and spiritual guides makes sure that all treks are well-organized and adapted to different fitness levels. From first-time pilgrims to seasoned trekkers, we offer customized travel experiences that align with your needs. With a dedicated support team, modern safety measures, and hassle-free arrangements, we guarantee a trekking experience that is as peaceful and divine as the sacred destinations themselves.",

    "Join Spiritual Hikes and embark on a journey of a lifetime, walking in the footsteps of saints and sages. Experience the power of the Himalayas, immerse yourself in sacred traditions, and witness the breathtaking beauty of nature. Whether you are looking for self-discovery, adventure, or divine blessings, our well-planned spiritual treks will leave you inspired and rejuvenated. Book your journey today and let us guide you to the most sacred places on Earth.",
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center mt-5">
      <h2 className="lg:text-4xl text-xl font-bold text-center mb-10 mx-4 text-[#1f84a6] [text-shadow:_0_4px_4px_rgb(255_255_255_/_0.8)]">
        {" "}
        Spiritual Hikes – Your Journey to the Divine
      </h2>

      <div className="w-full max-w-7xl  bg-gradient-to-b from-[#1b7391] to-gray-300 shadow-lg rounded-xl overflow-hidden lg:p-4 ">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="h-auto"
        >
          {slides.map((text, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center justify-center min-h-[130px] md:min-h-[180px] lg:min-h-[270px] px-4 py-8"
            >
              <p className="text-center text-gray-100 text-md md:text-base lg:text-lg leading-relaxed max-w-[90%] mx-auto fira-sans">
                {text}
              </p>
              <button
                type="button"
                onClick={() => navigate("/about")}
                className="mt-6 bg-[#1b7391] text-white px-4 py-2 lg:text-lg text-sm rounded-md hover:bg-gradient-to-r from-[#2592b7] to-[#16787a] transition cursor-pointer fira-sans"
              >
                Read More
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons Fix */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #fff !important;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 50%;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px !important;
        }
      `}</style>
    </div>
  );
};

export default CarouselComponent;
