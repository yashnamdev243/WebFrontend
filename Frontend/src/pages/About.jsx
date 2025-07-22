import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa";
import EngineeringServices from "../component/EngineeringServices";
import ShapeDivider from "../component/ShapeDivider";
import WorldMap from "../component/WorldMap";

const leaders = [
  {
    name: "Mr. Rajesh Patidar",
    bio: "Mr. Rajesh Patidar having Masters in Pharmacy and working as Quality Lead with over 15+ years in the pharmaceutical industry, specializing in GxP compliance, quality assurance, and regulatory strategy. Proven track record in leading quality management systems (QMS), conducting audits (internal and external), and supporting clients through regulatory inspections and remediation. Adept at translating complex regulatory requirements into practical, risk-based solutions tailored to each client’s operations.",
    image: "/img.png",
  },
  {
    name: "Mr. Zuber Mughal",
    bio: "Mr. Zuber Mughal having Batchelor's in Electrical Engineering. He is Dynamic and technically proficient Electrical Design Lead with 12+ years of experience in electrical systems design, project leadership, and cross-functional engineering collaboration across industries such as power systems and construction.  Recognized for delivering innovative, code-compliant, and cost-effective electrical design solutions that align with project objectives and industry standards. Expert in leading multidisciplinary teams through the full design lifecycle—from concept development and detailed engineering to installation support and commissioning.",
    image: "/img.png",
  },
  {
    name: "Mr. Swapnil Singh",
    bio: "Mr. Swapnil Singh having Batchelor's in Mechanical Engineering along with Diploma in Product Design He is Experienced and detail-oriented HVAC and Utility Design Lead with over 12+ years of experience in designing, developing, and managing HVAC and utility systems for industrial, pharmaceutical & healthcare projects. Specialized in delivering energy-efficient, regulatory-compliant, and sustainable mechanical systems, with a strong focus on GMP environments and cleanroom design for pharmaceutical and biotech facilities. He is  fellow member of ASHRAE, ISHRAE & IGBC.",
    image: "/img.png",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);

  const [expanded, setExpanded] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = (name) => {
    setExpanded((prev) => {
      const newState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = false;
      });
      newState[name] = !prev[name];
      return newState;
    });
  };
  // const toggleReadMore = (name) => {
  //   setExpanded((prev) => ({
  //     ...prev,
  //     [name]: !prev[name],
  //   }));
  // };
  const fullBio = `Mr. Manish has a master's degree in Biotechnology, also completed his M.Tech in Pharmaceutical Operations and Management from BITS Pilani, with over 16 years of experience in the field. He is the CEO and Founder of MSGMP | GxPro, leading a team of young and dynamic professionals. He provides consulting services for Sterile formulation (Injectable), Sterile API, Oral formulation, API, Microbiology, In Vitro Diagnostics (IVD), and regulatory audit preparation (USFDA, MHRA, EU-GMP, WHO-Geneva, etc.).`;

  const shortBio = fullBio.slice(0, 180);
  return (
    <div
      className="inset-0 lg:w-full w-full overflow-hidden bg-cover bg-white bg-center"
      Ww
    >
      <section
        className=" lg:w-full w-full min-h-screen   lg:min-h-screen   text-center  bg-gradient-to-r from-[#e98948] to-[#4f342f]  "
        data-aos="fade-down"
      >
        {" "}
        <ShapeDivider />
        <h2 className="lg:text-5xl text-3xl font-bold   text-center lg:mt-4 mt-5 lg:mb-12 mb-4 text-gray-100 relative ">
          About Us
        </h2>
        <p
          className="lg:text-lg text-sm  text-justify lg:w-[100vh] w-[42vh] mx-auto flex text-gray-200"
          data-aos="zoom-in"
        >
          GxPro is a leading turnkey project and GMP consultancy firm
          specializing in the pharmaceutical industry. With a team of seasoned
          experts, we offer a wide range of services that help pharmaceutical
          companies navigate the complex landscape of new and brown field
          facility formation, drug development, regulatory compliance,
          manufacturing, market access, and commercialization. Our mission is to
          deliver innovative, efficient, and practical solutions tailored to
          meet the unique needs of our clients.
        </p>
        <p
          className="lg:text-lg text-sm leading-relaxed text-justify lg:w-[100vh]  w-[42vh] mx-auto flex text-gray-200 mt-4"
          data-aos="zoom-in"
        >
          With years of experience across the pharmaceutical value chain, our
          team bring in-depth knowledge and technical expertise to each project.
          At GxPro, we believe in a collaborative, client-centered approach.
          Whether you're a startup developing a new drug or an established
          organization looking to optimize processes, we’re here to help guide
          you every step of the way.
        </p>
      </section>

      <section className="max-w-[1210px] mx-auto mt-20 px-4" data-aos="fade-up">
        <h2 className="lg:text-4xl text-2xl font-bold  text-center  mb-16 text-[#04080B] relative ">
          <span className="inline-block relative">Leadership Team</span>
        </h2>

        {/* Root Leader */}
        <div className="flex flex-col items-center relative" data-aos="zoom-in" >
          <div onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={()=>setIsExpanded(false)}
           className="border-t-4 border-blue-900  p-8 rounded-2xl shadow-2xl bg-white hover:bg-gradient-to-b from-blue-100 to-gray-50 text-center max-w-2xl mx-auto transition-all duration-300 hover:scale-103 overflow-hidden">
            <img
              src="/Mr-Manish-Sharma.jpeg"
              alt="Mr. Manish Sharma"
              className="w-40 h-40 lg:w-52 lg:h-52 mx-auto rounded-full border-b-4 border-blue-900 mb-4 object-cover shadow-2xl"
            />
            <h3 className="text-2xl font-semibold text-blue-900">
              Mr. Manish Sharma
            </h3>

            <p className="text-gray-600 text-sm mt-3 text-justify">
              {isExpanded ? fullBio : `${shortBio}...`}
            </p>

            <button
            
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 text-blue-900 text-sm hover:underline"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20"
            data-aos="zoom-in"
          >
            {leaders.map((leader) => {
              const isExpanded = expanded[leader.name];
              const shortBio = leader.bio.slice(0, 120);

              return (
                <div
                onMouseEnter={() => toggleReadMore(leader.name)}
          onMouseLeave={()=>toggleReadMore(leader.name)}
                  key={leader.name}
                  className={`bg-white p-6 rounded-xl shadow-lg border-b-2 border-blue-900 hover:shadow-2xl  hover:bg-gradient-to-b from-gray-50 to-blue-100 transition-all duration-300 ease-in-out mx-auto  ${
                    isExpanded ? "max-w-md h-auto" : "max-w-md h-[200px]"
                  } overflow-hidden transform hover:-translate-y-5`}
                >
                  {/* <img
              src={leader.image}
              alt={leader.name}
              className="w-28 h-28 mx-auto rounded-full mb-4 object-cover shadow-2xl transition-transform duration-300 hover:scale-105"
            /> */}
                  <h3 className="text-xl font-semibold mt-2 text-blue-900 text-center">
                    {leader.name}
                  </h3>
                  <div className="text-gray-600 text-[14px] mt-4 text-justify relative">
                    <p
                      className={`transition-all duration-300 ${
                        isExpanded ? "line-clamp-none" : "line-clamp-3"
                      }`}
                    >
                      {leader.bio}
                    </p>
                    <button
                      onClick={() => toggleReadMore(leader.name)}
                      className="mt-2 text-blue-900 hover:text-blue-900  hover:underline text-sm"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="lg:max-w-[1210px] lg:w-full w-80  mx-auto mt-16 text-center"
        data-aos="fade-up"
      >
        <h2
          className="lg:text-4xl text-2xl font-bold text-center  mb-8 text-[#04080B] relative "
          data-aos="fade-up"
        >
          What Makes Us Apart
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-white lg:p-6 p-4 shadow-md rounded-lg hover:shadow-2xl !transition-all transform duration-300 hover:scale-105 border-l-4 border-[#4682B4] "
            data-aos="fade-right"
          >
            <FaCheckCircle className="text-green-700 lg:text-4xl text-2xl mx-auto mb-4" />
            <h3 className="lg:text-xl  text-[#0B2E33] font-semibold">
              Industry Expertise
            </h3>
            <p className="text-[#4F7C82] lg:text-[16px] text-xs">
              We bring decades of experience and deep knowledge across multiple
              pharmaceutical domains.
            </p>
          </div>
          <div
            className="bg-white lg:p-6 p-4  shadow-md rounded-lg hover:shadow-2xl !transition-all transform duration-300 hover:scale-105 border-r-4 border-[#4682B4]
"
            data-aos="fade-left"
          >
            <FaCheckCircle className="text-green-700 lg:text-4xl text-2xl  mx-auto mb-4" />
            <h3 className="lg:text-xl text-[#0B2E33]  font-semibold">
              Global Reach
            </h3>
            <p className="text-[#4F7C82] lg:text-[16px] text-xs">
              {" "}
              With a network of partners worldwide, we offer insights into
              international markets and regulatory environments.
            </p>
          </div>
          <div
            className="bg-white lg:p-6 p-4  shadow-md rounded-lg        hover:shadow-2xl !transition-all transform duration-300 hover:scale-105 border-l-4 border-[#4682B4]
"
            data-aos="fade-right"
          >
            <FaCheckCircle className="text-green-700 lg:text-4xl text-2xl  mx-auto mb-4" />
            <h3 className="lg:text-xl text-[#0B2E33]  font-semibold">
              Innovative Solutions
            </h3>
            <p className="text-[#4F7C82] lg:text-[16px] text-xs">
              We harness the power of emerging technologies and methodologies to
              deliver cutting-edge solutions.
            </p>
          </div>
          <div
            className="bg-white lg:p-6 p-4  shadow-md rounded-lg        hover:shadow-2xl !transition-all transform duration-300 hover:scale-105 border-r-4 border-[#4682B4]
"
            data-aos="fade-left"
          >
            <FaCheckCircle className="text-green-700 lg:text-4xl text-2xl  mx-auto mb-4" />
            <h3 className="lg:text-xl text-[#0B2E33]  font-semibold">
              Client Success
            </h3>
            <p className="text-[#4F7C82] lg:text-[16px] text-xs">
              We are committed to the success of our clients and work diligently
              to ensure that every project is a step toward achieving their
              business objectives.
            </p>
          </div>
        </div>
      </section>

      <div className=" mt-40 mb-20  ">
        <h2
          className="lg:text-4xl mb-10 px-1 text-2xl font-bold  text-center text-[#04080B] relative "
          data-aos="fade-up"
        >
          Where We Are Around the World
        </h2>
        <WorldMap />
        {/* <EngineeringServices /> */}
      </div>
    </div>
  );
};

export default About;
