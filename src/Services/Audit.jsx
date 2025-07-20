
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Dropdown_contentpage from "../component/Dropdown_contentpage";
import Timeline from "../component/timelineData";
import GMP_Audits from "/GMP_Audits .avif";
import HeroSection from "../pages/HeroSection";
const Audit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const serviceName = "api-audit";

  const serviceDetails = {
    "api-audit": {
      text: [
        "API / API intermediates (sterile and non-sterile)",
        "Finished pharmaceutical products (sterile and non-sterile)",
        "Biological and fermentation-based APIs and formulation products",
        "Excipients, key starting materials (KSMs), raw materials, and cosmetics",
        "GLP audits, including contract testing laboratories",
        "Various service providers",
        "Distributors, ensuring compliance with Good Distribution Practices (GDP)",
        "Packaging materials (primary, secondary, and tertiary)",
        "Components used in pharmaceutical manufacturing",
        "Third part Manufacturing Execution",
        "Mock Audits",
        "Target Audit",
        "Processing sites specializing in Micronization, sterilization, radiation, and more",
      ],
      text2: [
        { type: "strong", content: "MSGMP Audit Process :" },
        "We manage the entire audit lifecycle from preparation and execution to reporting and CAPA follow-up, enabling you to check supplier audits off your list with confidence.",
      ],
      text3: [
        { type: "strong", content: "Comprehensive Audit Report Package :" },
        "We deliver a comprehensive Audit Report Package within 3-4 weeks after the audit. For urgent requests, we offer expedited reporting to meet tighter deadlines.As industry leaders in GMP auditing, we provide high-quality, cost-effective audit reports that meet all necessary criteria for supplier qualification. Our thorough and detailed reporting ensures you have all the information needed to qualify your suppliers efficiently.",
      ],
      details: [
        "We conduct rigorous GMP audits of pharmaceutical manufacturers across the supply chain to ensure compliance with applicable regulations and uphold patient safety. Our audits cover various types of suppliers worldwide, adhering to multiple regulatory standards such as EU GMP, ICH Q7, 21 CFR 210/211, and ISO. Additionally, we offer tailored/customized audits based on client requirements, including specific focus areas, regulatory standards, products/systems, criticality assessments, and even for-cause audits.",
        "Our audit reports are meticulously detailed and of exceptional quality, earning global acceptance by regulators, QPs, subject matter experts, and more. We conduct GMP audits on a diverse range of suppliers, including but not limited to:",
      ],
      details2: [
        "Our model, designed to meet the needs and expectations of pharmaceutical companies facing supplier auditing pressures, delivers premium audit services. We ensure impartiality and independence from supplier-customer dynamics, prioritizing regulatory compliance and standards adherence while remaining free from conflicts of interest.",
      ],
      image: GMP_Audits,
      
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
        backgroundImage="/busi.avif"
        title="Supplier Audit & Qualification"
        
      />

    

      <div className=" bg-gradient-to-br from-white to-white lg:px-16">
        <section className="lg:py-12 py-6  ">
          <h1
            className=" lg:text-4xl text-[20px] text-center font-bold text-blue-900 underline lg:px-20 lg:my-10 my-4"
            data-aos="fade-up"
          >
            {" "}
            Supplier Audit & Qualification{" "}
          </h1>

          <div className="container mx-auto px-4   ">
            <div className="container mx-auto lg:px-18   ">
              <div
                className="border-b-2 border-blue-900 rounded-lg shadow-2xl px-6  "
                data-aos="fade-up"
              >
                <h1 className="lg:text-2xl text-[16px] font-bold text-blue-900 text-center underline lg:px-20 my-4">
                  {" "}
                  Whatever your supply-chain inspection needs, we’ve got you
                  covered.{" "}
                </h1>
                {(
                  serviceDetails[serviceName]?.details || [
                    "Service details not found!",
                  ]
                ).map((line, index) => (
                  <p key={index} className="lg:text-lg text-[14px] text-gray-800 px-2 my-8">
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-20 mt-10 items-center">
              <div data-aos="fade-up">
                {(
                  serviceDetails[serviceName]?.text || [
                    "Service details not found!",
                  ]
                ).map((line, index) => (
                  <p
                    key={index}
                    className="lg:text-lg text-[14px] text-gray-600 pl-4 lg:my-8 my-4"
                    style={{
                      borderLeft: "6px solid",
                      borderImage:
                        "linear-gradient(to bottom, #E3010F, #4682B4) 1",
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>

              <img
                src={serviceDetails[serviceName]?.image || backgroundImage}
                alt={validService}
                className="rounded-lg shadow-lg w-full object-cover"
                data-aos="flip-left"
              />
            </div>

            {(
              serviceDetails[serviceName]?.details2 || [
                "Service details not found!",
              ]
            ).map((line, index) => (
              <p
                key={index}
                className="lg:text-lg text-[14px] text-gray-800 lg:px-20 my-2"
                data-aos="fade-right"
              >
                {line}
              </p>
            ))}
            <div className="container mx-auto lg:px-18  py-10 ">
              <div
                className="border-b-2 border-blue-900 rounded-lg shadow-2xl px-6 py-2  "
                data-aos="fade-up"
              >
                {(
                  serviceDetails[serviceName]?.text2 || [
                    "Service details not found!",
                  ]
                ).map((line, index) => (
                  <h1
                    key={index}
                    className="lg:text-lg text-[14px] text-gray-800 lg:px-2 my-2"
                    data-aos="fade-up"
                  >
                    {typeof line === "string" ? (
                      line
                    ) : line.type === "strong" ? (
                      <strong className="lg:text-xl text-[16px] text-blue-900 underline">
                        {line.content}
                      </strong>
                    ) : null}
                  </h1>
                ))}
              </div>
            </div>
            <div className="lg:px-15 lg:py-10">
              <Timeline />
            </div>
            <div className="container mx-auto lg:px-18  py-10 ">
              <div
                className="border-b-2 border-blue-900 rounded-lg shadow-2xl px-6  py-2 "
                data-aos="fade-up"
              >
                {(
                  serviceDetails[serviceName]?.text3 || [
                    "Service details not found!",
                  ]
                ).map((line, index) => (
                  <h1
                    key={index}
                    className="lg:text-lg text-[14px] text-gray-800 px-2 my-2"
                    data-aos="fade-up"
                  >
                    {typeof line === "string" ? (
                      <span>{line}</span>
                    ) : line.type === "strong" ? (
                      <strong className="lg:text-xl text-[16px] text-blue-900 underline">
                        {line.content}
                      </strong>
                    ) : null}
                  </h1>
                ))}
              </div>
            </div>

            <div className="w-full">
              <button
                className="text-white lg:text-[16px] text-[14px] font-medium lg:w-32 w-24 mx-auto block lg:mt-10 bg-gradient-to-r from-[#4682B4] to-[#04080B] p-2 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-200"
                onClick={handleOpenModal}
              >
                {" "}
                Click here
              </button>
            </div>
          </div>
        </section>

        {isModalOpen && (
          <div
            className="fixed inset-0 bg-gradient-to-r from-black/60 to-gray-900/60 flex items-center justify-center z-50"
            onClick={handleCloseModal}
          >
            <div className="bg-gradient-to-r from-[#4682B4] to-[#04080B] lg:p-8 p-3 rounded-2xl shadow-2xl lg:w-full w-90 max-w-3xl relative">
              <div className="p-2">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-1 lg:right-4 right-1.5 text-gray-100 hover:text-red-400 lg:text-4xl font-bold"
                >
                  &times;
                </button>
                <h2 className="lg:text-3xl font-medium text-black lg:mb-4 bg-white shadow-2xl lg:py-2 text-center">
                  Audit Report Package
                </h2>
              </div>
              <div>
                <p className="text-white lg:text-lg text-[14px] lg:mb-4 lg:px-4 leading-relaxed">
                  Our Audit Report Package is very thorough and includes all of
                  the following which is sufficient enough to qualify the
                  supplier:
                </p>
              </div>
              <ul className="list-disc list-inside lg:space-y-2  lg:text-[16px] text-[12px] text-white lg:pl-4">
                <li>Full Audit Report</li>
                <li>Auditor’s CV</li>
                <li>Auditor’s Non-Conflict of Interest Declaration</li>
                <li>
                  Corrective and Preventive Action (CAPA) Plan with supporting
                  evidence, if applicable
                </li>
                <li>
                  Audit Closure Document signed by the Lead Auditor, including
                  CAPA review confirmation
                </li>
                <li>
                  Attachments (e.g., equipment lists, certificates, licenses,
                  facility layout)
                </li>
                <li>
                  Additional Documents, if available (e.g., Site Master File
                  (SMF), SOP index, site presentation)
                </li>
              </ul>
            </div>
          </div>
        )}

        <Dropdown_contentpage />
      </div>
    </>
  );
};

export default Audit;
