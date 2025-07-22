import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import feasibilityImage from "/tbel-abuseridze-eBW1nlFdZFw-unsplash.jpg";
import Dropdown_contentpage from "../component/Dropdown_contentpage";
import HeroSection from "../pages/HeroSection";

const Trainings = () => {
  const serviceName = "trainings";

  const serviceDetails = {
    trainings: {
      details: [
        "Training plays a crucial role in the pharmaceutical industry, ensuring employees stay updated with the latest regulations, technologies, and best practices. Various types of trainings and workshops are conducted to enhance knowledge, skills, and compliance in different areas. Some common types of trainings and areas that require regular training are as follows:",
      ],
      details2: [
        "Regular trainings and workshops in these areas ensure that pharmaceutical companies maintain a skilled and compliant workforce. By investing in continuous learning and development, companies can enhance product quality, achieve regulatory compliance, and foster a culture of excellence in the pharmaceutical industry.",
      ],
      image: feasibilityImage,
      bgImg: feasibilityImage,
    },
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <HeroSection backgroundImage="/lab-technic.jpg" title="Trainings" />

      <section className=" bg-gradient-to-br from-white to-white px-6 lg:px-20 lg:py-14 py-7">
        <div className="max-w-[1210px] mx-auto">
          <h2
            className="lg:text-4xl text-[20px] font-bold text-blue-900 underline text-center lg:mb-8 mb-4"
            data-aos="fade-up"
          >
            Trainings
          </h2>
          {serviceDetails[serviceName]?.details.map((text, index) => (
            <p
              key={index}
              className="lg:text-lg text-[14px] text-gray-800 mb-6 leading-relaxed"
              data-aos="fade-up"
            >
              {text}
            </p>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1210px] mx-auto">
          {[
            "Good Manufacturing Practices (GMP) Training",
            "Regulatory Compliance Training",
            "Safety and Environmental Training",
            "Current Good Clinical Practice (cGCP) Training",
            "Data Integrity Training",
            "Pharmacovigilance Training",
            "Process Validation Training",
            "Computer System Validation Training",
            "SOP and Documentation Training",
            "Health and Hygiene Training",
            "Product Specific Training",
            "Leadership and Soft Skills Training",
            "QA /QC Related Training – Market complaints, Deviation handling, CAPA, OOT/OOS, & Investigation.",
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white/70 hover:bg-red-400  backdrop-blur-md border border-gray-200 lg:p-5 p-4 rounded-xl shadow hover:shadow-2xl transition duration-300 "
              data-aos="fade-up"
              data-aos-delay={i * 50}
            >
              <h3 className="text-blue-900 underline  group-hover:text-white  font-semibold lg:text-lg text-[14px]">
                {item}
              </h3>
            </div>
          ))}
        </div>

        <div className="lg:mt-16 mt-10 max-w-[1210px] mx-auto">
          {serviceDetails[serviceName]?.details2.map((text, index) => (
            <p
              key={index}
              className="lg:text-lg text-[14px] text-gray-800 leading-relaxed"
              data-aos="fade-up"
            >
              {text}
            </p>
          ))}
        </div>

        <Dropdown_contentpage />
      </section>
    </>
  );
};

export default Trainings;
