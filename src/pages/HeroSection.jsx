import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = ({
  backgroundImage,
  title,
  dynamicText,
  description,
  buttonText,
  
  serviceName,
}) => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate();

  const buttonAction = () => {
    navigate('/contact');
  };
  const phrases = dynamicText || [
    "Get in touch with us",
    "We’re here to help",
    "Reach out for inquiries",
  ];

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText(currentPhrase.substring(0, charIndex));
      if (!isDeleting && charIndex < currentPhrase.length) {
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (isDeleting) {
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section
      className="relative lg:h-[420px] h-[330px] flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      data-aos="zoom-in"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-200/50 to-sky-900/90"></div>

      <div className="relative z-10 text-center text-white lg:p-10  max-w-5xl mx-auto">
        <h1 className="text-[22px] md:text-5xl  font-extrabold drop-shadow-2xl lg:mb-6 mb-3 lg:mt-20 mt-8 animate__animated animate__fadeIn">
          {title || serviceName}
        </h1>

        <p className="text-lg md:text-2xl lg:mb-6 mb-3 animate__animated animate__fadeIn animate__delay-1s">
          {text}
          <span className="border-r-2 border-sky-300 animate-pulse ml-1" />
        </p>

        <p className="text-[12px] lg:text-[16px]  text-white lg:mb-6 mb-3 animate__animated animate__fadeIn animate__delay-2s">
          {description ||
            "Have questions or need assistance? Our team is ready to provide the support you need. Reach out to us today, and we'll get back to you as soon as possible."}
        </p>

        <button
          onClick={buttonAction}
          className="lg:px-5 lg:py-2 px-3 py-1.5  text-sm md:text-lg bg-red-400 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300 relative overflow-hidden group"
        >
          {buttonText || "Contact Us"}
          <span className="absolute left-0 top-0 w-full h-full bg-black opacity-20 transform group-hover:scale-150 transition-all duration-300"></span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
