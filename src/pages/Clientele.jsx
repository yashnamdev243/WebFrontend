import React from "react";
import { motion } from "framer-motion";

const Clientele = () => {
  const clients = [
    {
      name: "Company 1",
      logo: "/Clientele1.jpeg",
      review: "Alpa Laboratories Ltd.",
    },
    {
      name: "Company 2",
      logo: "/Clientele2.jpeg",
      review: "Bhandari Labs Pvt. Ltd.",
    },
    {
      name: "Company 3",
      logo: "/Clientele3.jpeg",
      review: "Penam Biosciences Pvt. Ltd.",
    },
    {
      name: "Company 4",
      logo: "/Clientele4.jpeg",
      review: "Zest Pharmaceuticals Pvt. Ltd.",
    },
    {
      name: "Company 5",
      logo: "/Clientele05.png",
      review: "Rusoma Laboratories Pvt. Ltd.",
    },
    {
      name: "Company 6",
      logo: "/Clientele6.jpeg",
      review: "Zenith Pharmaceuticals Ltd.",
    },
    {
      name: "Company 7",
      logo: "/Clientele7.jpeg",
      review: "True Care Biomedix Pharma",
    },
    {
      name: "Company 8",
      logo: "/Clientele08.png",
      review: "Indo SMC  Pvt. Ltd.",
    },
    {
      name: "Company 9",
      logo: "/1631304580201.jpg",
      review: "Wockhardt Pvt. Ltd.",
    },
    {
      name: "Company 10",
      logo: "/himalayanlogo.png",
      review: "Himalayan Foods and Derivatives Pvt. Ltd.",
    },
    {
      name: "Company 11",
      logo: "/zenith_drugs_logo.jpg",
      review: "Zenith Drugs Pvt. Ltd.",
    },
    {
      name: "Company 12",
      logo: "/hindpharma_logo.jpg",
      review: "Hind Pharma",
    },
    {
      name: "Company 13",
      logo: "/centrient_logo.jpg",
      review: "Centrient Pharmaceuticals ",
    },
    {
      name: "Company 14",
      logo: "/soft_medicaps_limited_logo.jpg",
      review: "SOFT MEDICAPS Ltd.",
    },
    {
      name: "Company 15",
      logo: "/novazing_pharma_private_limited_logo.jpg",
      review: "NOVAZING PHARMA Pvt. Ltd.",
    },

    {
      name: "Company 17",
      logo: "/aurobindopharma_logo.jpg",
      review: "AUROBINDO PHARMA Ltd.",
    },
    {
      name: "Company 18",
      logo: "/sun_pharma_logo.jpg",
      review: "SUN PHARMA",
    },
    {
      name: "Company 19",
      logo: "/teva_pharmaceuticals_logo.jpg",
      review: "Teva Pharmaceuticals ",
    },
    {
      name: "Company 20",
      logo: "/1631392606905.jpg",
      review: "ASTRAL SteriTech Pvt. Ltd. ",
    },
    {
      name: "Company 21",
      logo: "/inventia_healthcare_logo.jpg",
      review: "Inventia Healthcare Ltd. ",
    },
    {
      name: "Company 22",
      logo: "/neuland_laboratories_limited_logo.jpg",
      review: "Neuland Laboratories Ltd. ",
    },
    {
      name: "Company 23",
      logo: "/1734287726697.jpg",
      review: "Eskayef Pharmaceuticals Ltd. ",
    },
    {
      name: "Company 24",
      logo: "/adcock_ingram_logo.jpg",
      review: " Adcock Ingram",
    },
    {
      name: "Company 25",
      logo: " /vamsi_labs_ltd_logo.jpg",
      review: "Vamsi Labs Ltd. ",
    },
    {
      name: "Company 26",
      logo: "/1630578644446.jpg",
      review: "BO CHEM Pvt. Ltd. ",
    },
    {
      name: "Company 26",
      logo: "/1732775850867.jpg",
      review: "Amartara Pvt. Ltd. ",
    },
    {
      name: "Company 27",
      logo: "/1631355415034.jpg",
      review: "SHRIJI POLYMERS (INDIA) Ltd ",
    },
    {
      name: "Company 28",
      logo: "/gerresheimer_logo.jpg",
      review: "Gerresheimer ",
    },
    {
      name: "Company 29",
      logo: "/1631323726852.jpg",
      review: "Makson Healthcare Pvt. Ltd.",
    },
    {
      name: "Company 30",
      logo: "/1678119515379.jpg",
      review: "MEDIOINT LIFE SCIENCE Pvt. Ltd.",
    },
    {
      name: "Company 31",
      logo: "/1631326658435.jpg",
      review: "Lupin ",
    },
    {
      name: "Company 32",
      logo: "/1631361060931.jpg",
      review: "Ipca Laboratories Limited  ",
    },
    {
      name: "Company 32",
      logo: "/nectar_life_science_logo.jpg",
      review: "Nectar Lifesciences Limited  ",
    },
    {
      name: "Company 33",
      logo: " /vista_labs_logo.jpg",
      review: "Vista Labs  ",
    },
    {
      name: "Company 34",
      logo: " /zen_pharma_logo.jpg",
      review: "ZEN PHARMA  ",
    },
    {
      name: "Company 35",
      logo: " /Lifespan_Biotech.jpg",
      review: "Lifespan Biotech   ",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <section
        className="lg:w-full  w-full lg:px-2 px-4   bg-gradient-to-b from-gray-100 to-blue-100 grid lg:grid-cols-2 bg-cover lg:h-screen mx-auto text-white py-10 pt-25 lg:py-25 lg:pt-35  text-center"
        data-aos="fade-down"
      >
        <div class="lg:w-120 mx-auto h-fit relative flex justify-center items-center  overflow-hidden">
          <img
            src="/Client.png"
            alt="Premium Image"
            class="lg:w-full w-60 h-auto object-cover "
          />
        </div>
        <div className="flex flex-col mt-10 lg:items-end lg:pr-5 mx-auto  lg:w-full w-80 justify-center">
          <div
            className=" border-b-8 shadow-2xl border-white   bg-gradient-to-r from-[#4682B4] to-[#04080B]  transition-all duration-300 ease-in-out p-4 text-white 
          "
            style={{ borderRadius: "15px 50px" }}
          >
            <h2 className="lg:text-5xl text-3xl lg:mt-6 font-bold  lg:mr-[15%]">
              Our Clients
            </h2>

            <p className="lg:text-lg text-sm lg:max-w-2xl  leading-relaxed lg:mt-4 lg:pt-4 pt-3 lg:px-10 px-4 pb-8 text-left">
              We take pride in collaborating with some of the best companies
              across various industries. Our clientele is a testament to our
              commitment to quality, innovation, and customer satisfaction. Here
              are some of the amazing businesses that trust us.
            </p>
          </div>
        </div>
      </section>
      <div className="  bg-gradient-to-b from-white mx-auto w-full  to-white">
        <div className="lg:w-[1400px]  pt-10 w-85 mx-auto text-center">
          <div className="overflow-hidden whitespace-nowrap lg:py-6   bg-white py-2 shadow-lg rounded-lg mb-10 relative">
            <div className="flex lg:space-x-30 space-x-8 animate-marquee">
              {[...clients, ...clients].map((client, index) => (
                <img
                  key={index}
                  src={client.logo}
                  alt={client.name}
                  className="lg:h-16 h-10 w-auto hover:scale-110"
                />
              ))}
            </div>
          </div>

          <h2
            className="lg:text-4xl text-2xl font-bold  text-center  mb-2 mt-6 text-[#04080B] relative "
            data-aos="fade-up"
          >
            Clients We Work With
          </h2>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-24 py-12 "
            data-aos="fade-up"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="relative  mx-auto bg-white  bg-opacity-90 shadow-lg rounded-sm p-6 text-center lg:w-full w-70 transition duration-500 transform hover:scale-[1.05] hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-[#4682B4]  opacity-20 lg:w-full w-90 rounded-xl"></div> */}

                <motion.img
                  src={client.logo}
                  alt={client.name}
                  className="lg:h-30  h-26 lg:w-40 w-35 mx-auto rounded-2xl   mb-4 transition-transform duration-300 hover:scale-110"
                />

                <h3 className="lg:text-xl text-lg font-semibold text-gray-100  mb-3">
                  {/* {client.name} */}
                </h3>

                <motion.p className="text-sky-950  font-semibold lg:text-lg text-sm">
                  {client.review}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientele;
