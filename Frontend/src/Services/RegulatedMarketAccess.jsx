import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import feasibilityImage from "/tbel-abuseridze-eBW1nlFdZFw-unsplash.jpg";
import Dropdown_contentpage from "../component/Dropdown_contentpage";
import HeroSection from "../pages/HeroSection";

const RegulatedMarketAccess = () => {
  const serviceName = "regulated-market-access";

  const serviceDetails = {
    "regulated-market-access": {
      text2: [
        {
          type: "strong",
          content: "Product, Market & Regulatory Pathway Strategy :",
        },
        "We provide strategic guidance to help you chart the optimal pathway for your product, market, and regulatory approval. Our experts analyze the regulatory landscape and market requirements to develop a well-informed strategy for market entry and expansion.",
      ],
      text3: [
        {
          type: "strong",
          content: "Regulatory Strategy for Emerging Markets :",
        },
        "For companies looking to enter emerging markets, our regulatory team offers tailored strategies to navigate the unique regulatory requirements of these regions. We ensure that your products meet the necessary standards for successful market access in these dynamic markets.",
        "At GxPro we are committed to simplifying the process of market access and regulatory compliance. Our experienced regulatory team will work closely with you to develop effective strategies, ensuring that your products meet all the necessary regulatory requirements, and enabling your business to thrive in regulated markets. Contact us today to leverage our expertise and achieve seamless market access.",
      ],

      details: [
        "Accessing regulated markets and navigating regulatory challenges can be a complex task, particularly for companies operating internationally or within highly regulated industries such as pharmaceuticals. Our dedicated regulatory team offers comprehensive support to ensure compliance and develop effective strategies for successful market growth.",
        "Our services include:",
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
        backgroundImage="/standard.avif"
        title=" Regulated Market Access"
      />

      <div className=" bg-gradient-to-br from-white to-white lg:px-16">
        <section className="lg:py-10 py-5  ">
          <h1
            className="lg:text-4xl text-[20px] font-bold text-blue-900 underline text-center lg:px-20 lg:my-8 my-4"
            data-aos="fade-up"
          >
            {" "}
            Regulated Market Access{" "}
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
          </div>
        </section>
        <Dropdown_contentpage />
      </div>
    </>
  );
};

export default RegulatedMarketAccess;
