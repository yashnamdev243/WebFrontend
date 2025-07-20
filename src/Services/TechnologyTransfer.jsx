import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import feasibilityImage from "/tbel-abuseridze-eBW1nlFdZFw-unsplash.jpg";
import Dropdown_contentpage from "../component/Dropdown_contentpage";
import HeroSection from "../pages/HeroSection";

const TechnologyTransfer = () => {
  const serviceName = "technology-transfer";

  const serviceDetails = {
    "technology-transfer": {
      text2: [
        { type: "strong", content: "Our Approach to Technology Transfer :" },
        " We employ a systematic, risk-based approach to technology transfer that ensures quality, compliance, and efficiency at every stage of the process. Our comprehensive approach includes :",
      ],

      details: [
        "Technology transfer of a drug substance is a multifaceted activity with inherent technical, regulatory, and quality risks that must be addressed to ensure a successful outcome. At GxPro, we specialize in technology transfer services that ensure smooth and efficient transitions of drug substance development across all phases—from early discovery to commercial-scale production. Our team combines deep expertise, advanced infrastructure, and a commitment to quality to facilitate the seamless transfer of processes, technologies, and knowledge throughout your project’s lifecycle.",
        "We offer a proven and adaptable approach to technology transfer, whether for scale-up or transitioning to a different facility. Our experts meticulously assess the inherent complexity of your project, ensuring that our transfer scope and strategy are perfectly aligned with your specific needs. From small-scale development to large-scale commercial manufacturing, our goal is to ensure the efficiency and success of the transfer process at every phase.",
        "With a strong emphasis on reducing delays, safeguarding product integrity, and ensuring compliance with international regulatory standards, we expertly guide each critical transition. Our objective is to streamline your journey to market, ensuring efficiency, compliance, and a seamless transfer process.",
      ],

      image: feasibilityImage,
      bgImg: feasibilityImage,
    },
  };

  const validService = serviceDetails[serviceName]
    ? serviceName.replace(/-/g, " ")
    : "Service Not Found";

  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);

  return (
    <>
    
      <HeroSection
        backgroundImage="/polygo.avif"
        title="Technology Transfer"
      />

      <div className=" bg-gradient-to-br from-white to-white lg:px-16">
        <section className="lg:py-10 py-5 ">
          <h1
            className="lg:text-4xl text-[20px] font-bold text-blue-900 text-center underline lg:px-20 lg:my-8 my-4"
            data-aos="fade-up"
          >
            {" "}
            Technology Transfer{" "}
          </h1>
          <div className="container mx-auto px-4">
            {(
              serviceDetails[serviceName]?.details || [
                "Service details not found!",
              ]
            ).map((line, index) => (
              <p
                key={index}
                className="lg:text-lg text-[14px] text-gray-800 lg:px-20 lg:my-8 my-4 "
                data-aos="fade-right"
              >
                {line}
              </p>
            ))}
            <div className="lg:mb-10 mb-5">
              {(
                serviceDetails[serviceName]?.text2 || [
                  "Service details not found!",
                ]
              ).map((line, index) => (
                <h1
                  key={index}
                  className="lg:text-lg text-[14px] text-gray-800 lg:px-20 my-2 "
                  data-aos="fade-right"
                >
                  {typeof line === "string" ? (
                    line
                  ) : line.type === "strong" ? (
                    <strong className="lg:text-2xl text-[16px] text-blue-900 underline">
                      {line.content}
                    </strong>
                  ) : null}
                </h1>
              ))}
            </div>
            <div
              className="lg:text-[17px] text-[14px] text-gray-800 lg:px-20 my-2 lg:space-y-9 space-y-5 "
              data-aos="fade-up"
            >
              <li>
                <strong className="lg:text-xl text-[16px] text-blue-900 underline">
                  {" "}
                  Initial Assessment & Feasibility Study :
                </strong>{" "}
                We begin with a detailed assessment of the current process,
                identify CPPs and CQAs during development, and create a
                customized technology transfer plan.
              </li>

              <li>
                <strong className="lg:text-xl text-[16px] text-blue-900 underline">
                  Documentation & Knowledge Transfer :
                </strong>{" "}
                Ensuring thorough knowledge transfer is key. We work closely
                with your team to provide process documentation, standard
                operating procedures (SOPs), and other critical protocols.
              </li>

              <li>
                {" "}
                <strong className="lg:text-xl text-[16px] text-blue-900 underline">
                  {" "}
                  Process Validation & Scale-Up :{" "}
                </strong>
                Our team supports you through the critical steps of process
                validation, ensuring that scaling up is both technically sound
                and compliant with regulatory requirements.
              </li>
              <li>
                {" "}
                <strong className="lg:text-xl text-[16px] text-blue-900 underline">
                  {" "}
                  Regulatory Strategy & Compliance :{" "}
                </strong>
                We navigate complex global regulatory frameworks to ensure
                alignment with FDA, EMA, ICH, and other international standards.
              </li>
              <li>
                {" "}
                <strong className="lg:text-xl text-[16px] text-blue-900 underline">
                  {" "}
                  Ongoing Support & Monitoring :{" "}
                </strong>
                Technology transfer doesn’t end with the handover. We provide
                continuous support to monitor process performance, troubleshoot
                issues, and implement improvements.
              </li>
            </div>
          </div>
        </section>
        <Dropdown_contentpage />
      </div>
    </>
  );
};

export default TechnologyTransfer;
