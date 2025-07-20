import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import QMS_Cons from "/QMS_Cons.avif";
import Dropdown_contentpage from "../component/Dropdown_contentpage";
import HeroSection from "../pages/HeroSection";

const QMSConsulting = () => {
  const serviceName = "qms-consult-implement";

  const serviceDetails = {
    "qms-consult-implement": {
      text2: [
        { type: "strong", content: "Development of QMS Policies and SOP’s :" },
        " We create essential QMS documentation and provide comprehensive training to ensure seamless adoption across your organization. By developing and standardizing SOPs, we enhance consistency and reliability in operations across various departments, including Warehouse, Quality Control, Production, Packing, Quality Assurance, and Engineering, ensuring compliance and efficiency throughout your organization. ",
      ],
      text3: [
        { type: "strong", content: "Comprehensive gap analysis :" },
        "Assessing gaps in your current Quality Management System (QMS) and formulating a strategic remediation plan. Our experts conduct comprehensive gap analyses of your existing quality systems to pinpoint areas requiring enhancement to align with regulatory standards and industry expectations. These insights drive the creation of targeted improvement plans for compliance and operational excellence.",
      ],

      text4: [
        {
          type: "strong",
          content: "Investigation Support & Root Cause Analysis :",
        },
        "Our team supports and prepares investigation reports for non-conformities, including market complaints, deviations, OOS, OOT, batch failures, and microbiological investigations. We identify probable root causes using tools such as brainstorming, fishbone diagrams, scatter diagrams, control charts, fault tree analysis, FMEA, and 5-Why analysis, ensuring scientific justification. Based on our findings, we propose appropriate CAPAs.",
      ],
      text5: [
        { type: "strong", content: "QMS Monitoring and Measurement :" },
        "We assess the effectiveness of implemented processes and procedures, measuring the performance of the QMS. Our support ensures the site remains inspection-ready while fostering a culture of continuous improvement. We analyze existing workflows, optimize processes for efficiency, and enhance the QMS using industry best practices to maintain compliance and drive excellence.",
      ],
      text6: [
        { type: "strong", content: "Quality Due Diligence :" },
        "We provide Quality Due Diligence support, offering a comprehensive review of your company’s facility from both Compliance and Investment perspectives. Our due diligence audits enable clients to accurately evaluate the compliance status of potential partners or acquisitions, ensuring informed decision-making.",
      ],

      details: [
        "Our Quality Management System (QMS) remediation and establishment services are tailored to meet the rigorous compliance requirements of the Life Sciences industry. We specialize in developing robust QMS frameworks that align with global regulatory standards, mitigate risks, and enhance operational efficiency. From initial gap assessments to full-scale implementation and continuous improvement, we ensure a streamlined, compliant, and effective QMS for your organization.",
      ],

      image: QMS_Cons,
      bgImg: QMS_Cons,
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
  backgroundImage="/tbel-abuseridze-eBW1nlFdZFw-unsplash.jpg"
  title="QMS Consulting & Implementation"
  
/>

      <div className=" bg-gradient-to-br from-white to-white lg:px-16">
        <section className="lg:py-12 pt-10  ">
             <h1 className=" lg:text-4xl text-[20px] font-bold text-blue-900 text-center underline lg:px-20 lg:my-8 "  data-aos="fade-up">
            {" "}
             QMS Consulting & Implementation{" "}
          </h1>
          <div className="container mx-auto px-4">
            {(
              serviceDetails[serviceName]?.details || [
                "Service details not found!",
              ]
            ).map((line, index) => (
              <p key={index} className=" lg:text-lg text-[14px] text-gray-800 lg:px-20 lg:my-8 my-4 " data-aos="fade-right">
                {line}
              </p>
            ))}
            <div className="lg:mb-10 mb-5">
              {(
                serviceDetails[serviceName]?.text2 || [
                  "Service details not found!",
                ]
              ).map((line, index) => (
                <h1 key={index} className="lg:text-lg text-[14px] text-gray-800 lg:px-20 my-2 "data-aos="fade-right">
                  {typeof line === "string" ? (
                    line
                  ) : line.type === "strong" ? (
                    <strong className="lg:text-2xl text-[16px] text-blue-900 underline"  >{line.content}</strong>
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
                <h1 key={index} className="lg:text-lg text-[14px] text-gray-800 lg:px-20 my-2"data-aos="fade-right">
                  {typeof line === "string" ? (
                    line
                  ) : line.type === "strong" ? (
                    <strong className="lg:text-2xl text-[16px] text-blue-900 underline">{line.content}</strong>
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
                <h1 key={index} className="lg:text-lg text-[14px] text-gray-800 lg:px-20 my-2"data-aos="fade-right">
                  {typeof line === "string" ? (
                    line
                  ) : line.type === "strong" ? (
                    <strong className="lg:text-2xl text-[16px] text-blue-900 underline">{line.content}</strong>
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
                <h1 key={index} className="lg:text-lg text-[14px] text-gray-800 lg:px-20 my-2"data-aos="fade-right">
                  {typeof line === "string" ? (
                    line
                  ) : line.type === "strong" ? (
                    <strong className="lg:text-2xl text-[16px] text-blue-900 underline">{line.content}</strong>
                  ) : null}
                </h1>
              ))}
            </div>
            <div className="">
              {(
                serviceDetails[serviceName]?.text6 || [
                  "Service details not found!",
                ]
              ).map((line, index) => (
                <h1 key={index} className="lg:text-lg text-[14px] text-gray-800 lg:px-20 my-2"data-aos="fade-right">
                  {typeof line === "string" ? (
                    line
                  ) : line.type === "strong" ? (
                    <strong className="lg:text-2xl text-[16px] text-blue-900 underline">{line.content}</strong>
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

export default QMSConsulting;
