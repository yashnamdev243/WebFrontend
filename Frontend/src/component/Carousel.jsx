import React from "react";
const images = [
  { id: 1, src: "/gallery1.jpeg", alt: "Image 1" },
  { id: 2, src: "/gallery2.jpeg", alt: "Image 2" },
  { id: 3, src: "/gallery3.jpg", alt: "Image 3" },
  { id: 4, src: "/gallery4.jpg", alt: "Image 4" },
  { id: 5, src: "/gallery5.avif", alt: "Image 5" },
  { id: 6, src: "/gallery6.jpg", alt: "Image 5" },
  { id: 7, src: "/gallery7.jpg", alt: "Image 5" },
  { id: 8, src: "/gallery8.jpg", alt: "Image 5" },
];

const infiniteImages = [...images, ...images];

const Carousel = () => {
  return (
    <section id="carousel" className="py-4 overflow-hidden relative">
      <div className="carousel-wrapper">
        <div className="carousel-track flex">
          {infiniteImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 lg:w-80 w-40 h-30 lg:h-60 rounded-lg shadow-lg bg-gray-200"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .carousel-wrapper {
            width: 100%;
            overflow: hidden;
            position: relative;
          }

          .carousel-track {
            display: flex;
            gap: 16px;
            width: max-content;
            animation: scrollLoop 15s linear infinite;
          }

          @keyframes scrollLoop {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); } /* Moves half of the duplicated track */
          }
        `}
      </style>
    </section>
  );
};

export default Carousel;
