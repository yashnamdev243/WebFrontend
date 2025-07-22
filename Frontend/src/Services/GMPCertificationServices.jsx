import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import feasibilityImage from "/tbel-abuseridze-eBW1nlFdZFw-unsplash.jpg";
import Dropdown_contentpage from "../component/Dropdown_contentpage";
import HeroSection from "../pages/HeroSection";

const GMPCertificationServices = () => {
  const serviceName = "gmp-certificat-service";

  const serviceDetails = {
    "gmp-certificat-service": {
      text2: [
        { type: "strong", content: "Pre and Post Inspection Readiness : " },
        "  We conduct thorough audits to support regulatory compliance before and after inspections, ensuring readiness for any assessments. Identifying gaps, implementing corrective actions, and preparing your team for regulatory inspections. ",
      ],
      text3: [
        {
          type: "strong",
          content: "Facility Upgradation for GMP Compliance : ",
        },
        "We assist in upgrading existing facilities to meet GMP compliance requirements, enhancing productivity and quality",
      ],

      text4: [
        {
          type: "strong",
          content: "On-Site & Remote Support : ",
        },
        "Our experts provide hands-on assistance during regulatory inspections, ensuring your team is well-prepared and confident throughout the process. We guide you in real time to address inspector queries, present documents effectively, and mitigate potential compliance concerns. Whether on-site or remotely, we help manage regulatory expectations, reducing the risk of major observations and ensuring a smooth audit process.",
      ],
      text5: [
        { type: "strong", content: "Mock Audits :" },
        " Our experts conduct mock audits of clients' sites to assess their readiness for Regulatory or corporate inspections, identifying areas for improvement.",
      ],
      text6: [
        { type: "strong", content: "Surveillance Audit :" },
        " Regular surveillance audits are conducted to monitor ongoing compliance and ensure sustained adherence to GMP standards.",
      ],
      text7: [
        { type: "strong", content: "Audit Compliance Reports :" },
        "We prepare and submit audit compliance reports to regulatory agencies, such as MHRA, USFDA, TGA, MCC, MHRA, and WHO, demonstrating adherence to GMP standards ",
      ],
      text8: [
        { type: "strong", content: "Follow-up Audit and CAPA Review :" },
        "  We perform follow-up audits and review Corrective and Preventive Actions (CAPAs) to verify the effectiveness of addressing regulatory observations and compliance status.",
      ],
      text9: [
        {
          type: "strong",
          content: "Audit Remediation & Observation Response : ",
        },
        "We assist in drafting precise, well-structured, and scientifically justified responses to regulatory observations. Our team develops Corrective and Preventive Action (CAPA) plans, ensures effective implementation, and provides follow-up support to demonstrate compliance. We help close observations efficiently, ensuring a positive outcome in regulatory reviews. ",
      ],
      text10: [
        { type: "strong", content: "Due Diligence Audits : " },
        "Our due diligence audits help clients thoroughly assess the compliance status of potential partners or acquisitions. ",
      ],

      text11: [
        { type: "strong", content: "GAP Assessment Audit : " },
        " We conduct GAP assessment audits to identify gaps in current practices and develop strategies to bridge these gaps for GMP compliance.",
      ],

      details: [
        "Achieving GMP certification is crucial for product quality, safety, and compliance. Our expert team provides end-to-end support for certifications like WHO-GMP, PIC/s, EU-GMP, USFDA, TGA, MHRA, and SFDA. We assist with Gap analysis, Compliance Assessment, Inspection readiness, and audit remediation. Our tailored approach ensures your facility, processes, and documentation meet global GMP standards, reducing compliance risks. We also help draft responses to regulatory observations, ensuring effective corrective actions. Strengthen compliance and operational efficiency with our comprehensive GMP certification support.",
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
        backgroundImage="/GMP-Certification.avif"
        title="GMP Certification/Upgradation"
      />

      <div className=" bg-gradient-to-br from-white to-white lg:px-16">
        <section className="lg:py-12 py-4  ">
          <h1
            className="lg:text-4xl text-[20px] font-bold text-blue-900  text-center underline lg:px-20 my-8"
            data-aos="fade-up"
          >
            {" "}
            GMP Certification/Upgradation{" "}
          </h1>
          <div className="container mx-auto px-4">
            {(
              serviceDetails[serviceName]?.details || [
                "Service details not found!",
              ]
            ).map((line, index) => (
              <p
                key={index}
                className="lg:text-lg text-[14px] text-gray-800 lg:px-20 lg:my-8 my-4"
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
                    <strong className= "lg:text-2xl text-[16px] text-blue-900 underline">
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
                    <strong className= "lg:text-2xl text-[16px] text-blue-900 underline">
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
                    <strong className= "lg:text-2xl text-[16px] text-blue-900 underline">
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
            <div className="lg:mb-10 mb-5">
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
            <div className="lg:mb-10 mb-5">
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
            <div className="lg:mb-10 mb-5">
              {(
                serviceDetails[serviceName]?.text10 || [
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
                    <strong className= "lg:text-2xl text-[16px] text-blue-900 underline">
                      {line.content}
                    </strong>
                  ) : null}
                </h1>
              ))}
            </div>
            <div className="">
              {(
                serviceDetails[serviceName]?.text11 || [
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

export default GMPCertificationServices;
