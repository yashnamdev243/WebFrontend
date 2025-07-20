import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import feasibilityImage from "/tbel-abuseridze-eBW1nlFdZFw-unsplash.jpg";
import Dropdown_contentpage from "../component/Dropdown_contentpage";
import HeroSection from "../pages/HeroSection";

const RegulatoryServices = () => {
  const serviceName = "regulatory-service";

  const serviceDetails = {
    "regulatory-service": {
      text2: [
        {
          type: "strong",
          content: "Submissions to Regulatory Authorities :  ",
        },
        "  We handle the process of making submissions to regulatory authorities for marketing authorizations and quality certifications, ensuring compliance with the regulations of the EUGMP, USFDA, MCC, TGA and international Regulatory Authorities. ",
      ],
      text3: [
        {
          type: "strong",
          content: "Compilation and submission of DMF : ",
        },
        "We meticulously compile DMFs, covering both open and closed parts, by thoroughly organizing the required information and documentation. Our team conducts a comprehensive review of DMF submissions to verify their accuracy and completeness.",
      ],

      text4: [
        {
          type: "strong",
          content: "Dossier Preparations & Submissions : ",
        },
        "We will review your dossier and provide a detailed gap analysis to ensure your submissions are successful on the first attempt. We identify gaps, and help you draft and submit it in the correct eCTD format for a successful first-time submission.",
      ],
      text5: [
        {
          type: "strong",
          content:
            "Response to Regulatory Queries & Post Approval Changes Submissions :",
        },
        "We assist in crafting well-structured and compliant responses to regulatory agency queries, ensuring clarity and adherence to guidelines. Our expertise helps navigate complex regulatory requirements, addressing concerns effectively and facilitating seamless communication. With a thorough understanding of global regulations, we provide precise, timely, and strategic responses to support regulatory approvals and compliance.",
      ],
      text6: [
        {
          type: "strong",
          content: "Guidance for INDA / ANDA Review & Submission :",
        },
        "We provide expert guidance and support in preparing ANDAs and INDAs while ensuring adherence to regulatory guidelines. Additionally, we conduct comprehensive reviews of ANDA submissions to confirm compliance with regulatory requirements. ",
      ],
      text7: [
        {
          type: "strong",
          content: "Remedial Action Plan (RAP) Post Regulatory Inspection :",
        },
        "In the aftermath of regulatory inspections, we offer expert guidance in formulating and implementing effective Remedial Action Plans (RAPs). Our approach ensures that all identified issues are thoroughly addressed, compliance requirements are met, and sustainable improvements are achieved to enhance regulatory readiness. ",
      ],
      text8: [
        { type: "strong", content: "Regulatory Strategy and Insights :" },
        "In the highly regulated pharma and biotech industries, a strong Regulatory strategy is key to market entry and compliance. We provide expert guidance to meet global Regulatory requirements, streamline approvals, and ensure compliance. Our strategic insights help you navigate evolving regulations, enabling successful product development and commercialization. ",
      ],
      text9: [
        {
          type: "strong",
          content: "Post Approval/ Life Cycle Management : ",
        },
        "Managing post-approval changes is crucial for maintaining regulatory compliance and ensuring product lifecycle continuity. Health authorities require submission, review, and approval of any modifications before implementation. We provide end-to-end support, including change control assessment, submission strategy, and variation package preparation. Our expertise ensures seamless regulatory approvals, keeping drug products compliant and competitive.",
      ],

      details: [
        "Our Regulatory Affairs experts possess the knowledge and experience required to navigate the complex landscape of regulatory submissions. With a focus on compliance and quality, we are committed to helping your products gain necessary approvals and meet regulatory standards effectively. Contact us today to benefit from our specialized regulatory support.",
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
        backgroundImage="/standar.avif"
        title="Regulatory Services"
      />

      <div className=" bg-gradient-to-br from-white to-white lg:px-16">
        <section className="lg:py-10 py-5 ">
          <h1
            className="lg:text-4xl text-[20px] font-bold text-blue-900 underline text-center lg:px-20 lg:my-8 my-4"
            data-aos="fade-up"
          >
            {" "}
            Regulatory Services{" "}
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
                  className="lg:text-lg text-[14px] text-gray-800 lg:px-20 my-2  "
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
            <div className="lg:mb-10 mb-5">
              {(
                serviceDetails[serviceName]?.text3 || [
                  "Service details not found!",
                ]
              ).map((line, index) => (
                <h1
                  key={index}
                  className="lg:text-lg text-[14px] text-gray-800 lg:px-20 my-2"
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
            <div className="lg:mb-10 mb-5">
              {(
                serviceDetails[serviceName]?.text4 || [
                  "Service details not found!",
                ]
              ).map((line, index) => (
                <h1
                  key={index}
                  className="lg:text-lg text-[14px] text-gray-800 lg:px-20 my-2"
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
            <div className="lg:mb-10 mb-5">
              {(
                serviceDetails[serviceName]?.text5 || [
                  "Service details not found!",
                ]
              ).map((line, index) => (
                <h1
                  key={index}
                  className="lg:text-lg text-[14px] text-gray-800 lg:px-20 my-2"
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
            <div className="lg:mb-10 mb-5">
              {(
                serviceDetails[serviceName]?.text6 || [
                  "Service details not found!",
                ]
              ).map((line, index) => (
                <h1
                  key={index}
                  className="lg:text-lg text-[14px] text-gray-800 lg:px-20 my-2"
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
            <div className="lg:mb-10 mb-5">
              {(
                serviceDetails[serviceName]?.text7 || [
                  "Service details not found!",
                ]
              ).map((line, index) => (
                <h1
                  key={index}
                  className="lg:text-lg text-[14px] text-gray-800 lg:px-20 my-2"
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
            <div className="mblg:mb-10 mb-5">
              {(
                serviceDetails[serviceName]?.text8 || [
                  "Service details not found!",
                ]
              ).map((line, index) => (
                <h1
                  key={index}
                  className="lg:text-lg text-[14px] text-gray-800 lg:px-20 my-2"
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
            <div className="">
              {(
                serviceDetails[serviceName]?.text9 || [
                  "Service details not found!",
                ]
              ).map((line, index) => (
                <h1
                  key={index}
                  className="lg:text-lg text-[14px] text-gray-800 lg:px-20 my-2"
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
          </div>
        </section>
        <Dropdown_contentpage />
      </div>
    </>
  );
};

export default RegulatoryServices;
