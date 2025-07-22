import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDropright } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

const EngineeringServices = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "General & Process Flow",
      icon: "/workflow-gender-symbol-flowchart.png",
      items: [
        "General and Process Flow Layout according to GMP",
        "	Man, Material and Scrap Movement Layout",
        "	FDA Layout",
      ],
      color: "border-blue-400 shadow-blue-500/50",
    },
    {
      title: " Architectural & Structural",
      icon: "/-liability-compa-9283.png",

      items: [
        "	Site selection and General Architectural Layout",
        "	General Structural Layout",
        "	Material selection, Façade and Elevation Layout",
        "	Walkthrough and Rendering Layout",
      ],
      color: "border-green-400 shadow-green-500/50",
    },
    {
      title: " Mechanical & HVAC ",
      icon: "/093c.png",

      items: [
        "	AHU Zoning, Area Classification and Pressure Zoning Layout",
        "Reflected Ceiling Plan (RCP) Layout",
        "	Air Conditioning and Ventilation Ducting Layout",
        "	Air Flow Diagrams (AFD)",
        "	AHU Placement and Technical Area Layout",
        "	Low RH Area Dehumidifier Process Schematic Layout",
        "	Chilled Water and Hot Water Piping Layout",
        "	Plant Room Layout",
        "General Schematic Layout for Chilled Water and Hot Water System",
        "	P&ID Layout",
        "	EMS and BMS Control and Logic Diagram",
      ],
      color: "border-red-400 shadow-red-500/50",
    },
    {
      title: " Electrical & ELV",
      icon: "/7ed.png",

      items: [
        "MASTER SITE PLAN WITH EARTHING LAYOUT",
        "MASTER SITE PLAN WITH STREET LIGHTING LAYOUT",
        "LIGHTNING PROTECTION LAYOUT",
        "SLD OF PROCESS PANEL",
        "SLD OF HVAC PANEL",
        "SLD OF PDB PANEL",
        "SLD OF UPS PANEL",
        "SLD OF MAIN LT PCC",
        "SLD OF UTILITY PANEL",
        "FLOOR PLAN WITH LIGHTING LAYOUT",
        "FLOOR PLAN WITH POWER LAYOUT",
        "FLOOR PLAN WITH ELV LAYOUT",
        "FLOOR PLAN WITH FAS LAYOUT",
        "FLOOR PLAN WITH CABLE TRAY ROUTING LAYOUT",
        "SLD OF SWITCHBOARD WIRING DETAIL",
        "SLD OF LDB WITH WIRING DETAIL",
        "SLD OF ELDB WITH WIRING DETAIL",
        "SLD OF PSDB_1PH WITH WIRING DETAIL",
        "SLD OF PSDB_3PH WITH WIRING DETAIL",
        "SLD OF UPSDB WITH WIRING DETAIL",
      ],

      color: "border-yellow-400 shadow-yellow-500/50",
    },
    {
      title: " Utility & Plumbing",
      icon: "/289.png",
      items: [
        "General Utility Placement Layout",
        "General Utility and Pendent Layout",
        "General and Process Drain Layout",
        "RO and PW Piping Layout",
        "WFI and PSG Piping Layout",
        "Compressed Air, Nitrogen, Co2 & Vacuum Piping Layout",
        "ETP, WTP, STP schematic and detailed process layout",
        "General Fixture Details and Placement Layout",
        "Raw water, Fire Tank and overhead tank details",
        "Fire fighting Layout",
      ],
      color: "border-purple-400 shadow-purple-500/50",
    },
    {
      title: "Engineering Documents & Qualification",
      icon: "/computer-icons-professional-certification-public-.png",
      items: [
        "Risk Assessments Documentation",
        "Detailed Project Report (DPR)",
        "Bill of Quantity of Architectural and Structural Work",
        "Bill of Quantity of HVAC System",
        "Bill of Quantity of Electrical System",
        "Bill of Quantity of Utility System",
        "URS of HVAC and Utility System",
        "Qualification (DQ, IQ, OQ, PQ) of HVAC and Utility System",
        "Method Statement for MEPF System",
        "Factory Assessment Test (FAT) Reports",
        "Validation & Qualification Documentation",
      ],
      color: "border-cyan-400 shadow-cyan-500/50",
    },
  ];

  return (
    <section className="relative py-16 px-6 lg:px-40 text-gray-900">
      <div className="container mx-auto text-center">
        <h2
          className="text-2xl lg:text-4xl font-bold mb-10  hover:scale-105 text-[#04080B]"
          data-aos="fade-up"
        >
          Engineering Services
        </h2>
        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={index} className="w-full">
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                aria-expanded={activeIndex === index}
                className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-md rounded-lg text-left text-xl font-semibold transition-all duration-300 hover:text-white hover:bg-gradient-to-r from-[#4682B4] to-[#04080B]"
              >
                <div className="flex items-center lg:text-xl text-[16px] gap-3">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-10  h-10"
                  />
                  <span>{service.title}</span>
                </div>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoIosArrowDropright size={25} />
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.ul
                    initial={{ maxHeight: 0, opacity: 0 }}
                    animate={{ maxHeight: "500px", opacity: 1 }}
                    exit={{ maxHeight: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden pl-6 py-4 space-y-2  text-gray-700 bg-gray-100 rounded-lg"
                  >
                    {service.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center  lg:text-[16px] text-[11px] gap-2"
                      >
                        🔹 {item}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringServices;
