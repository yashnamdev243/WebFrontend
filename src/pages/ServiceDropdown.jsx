import { Link } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { MdMiscellaneousServices } from "react-icons/md";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const services = [
  {
    id: "engineering",
    category: " Turnkey Projects Solutions ",

    subitems: [
      { key: "feasibility-studies", label: "Feasibility Studies" },
      { key: "site-selection", label: "Site Selection" },
      { key: "facility-design", label: "Facility Design and Layout" },
      { key: "design-risk", label: "Design Risk Assessment" },
      { key: "detailed-engineering", label: "Detailed Engineering Design" },
      // { key: "regulatory-compliance", label: "Regulatory Compliance" },
      { key: "project-management", label: "Project Management" },
      { key: "tech-equipment", label: "Technology and Equipment Selection" },
      { key: "commissioning", label: "Commissioning and Qualification" },
      { key: "quality-assurance", label: "Quality Assurance and Control" },
      { key: "training-capacity", label: "Training and Capacity Building" },
      { key: "licensing", label: "Licensing" },
      { key: "contractual-closeout", label: "Contractual Closeout" },
      { key: "post-project", label: "Post Project Review" },
      { key: "supply-chain", label: "Supply Chain Management" },
      {
        key: "financial-analysis",
        label: "Financial Analysis and Business Planning",
      },
    ],
  },
  {
    id: "engineering-design-solutions",
    category: "Engineering Design Solutions",
    subitems: [
      {
        key: "general-process-flow",
        label: "General & Process Flow",
        subitems: [
          {
            key: " general-process-flow-layout",
            label: " General and Process Flow Layout according to GMP",
          },
          {
            key: "man-material-scrap-movement-layout",
            label: " Man, Material and Scrap Movement Layout",
          },
          { key: "FDA-layout", label: "FDA Layout" },
        ],
      },
      {
        key: "architectural-structural",
        label: " Architectural & Structural",
        subitems: [
          {
            key: "site-selection-general-architectural",
            label: "Site selection and General Architectural Layout",
          },
          {
            key: "general-structural-layout",
            label: " General Structural Layout",
          },
          {
            key: "material-selection-Façade",
            label: "Material selection, Façade and Elevation Layout",
          },
          {
            key: " walkthrough-rendering-layout",
            label: " Walkthrough and Rendering Layout",
          },
        ],
      },
      {
        key: "mechanical-HVAC",
        label: "Mechanical & HVAC",
        subitems: [
          {
            key: "AHU-zoning",
            label:
              " AHU Zoning, Area Classification and Pressure Zoning Layout",
          },
          {
            key: "reflected-ceiling-plan",
            label: " Reflected Ceiling Plan (RCP) Layout",
          },
          {
            key: "air-Conditioning",
            label: " Air Conditioning and Ventilation Ducting Layout",
          },
          { key: "air-flow-diagrams ", label: "Air Flow Diagrams (AFD)" },
          {
            key: "AHU-placement",
            label: "AHU Placement and Technical Area Layout",
          },
          {
            key: "low-RH-area-dehumidifier",
            label: "Low RH Area Dehumidifier Process Schematic Layout",
          },
          {
            key: "chilled-water",
            label: " Chilled Water and Hot Water Piping Layout",
          },
          { key: "plant-room-layout", label: "Plant Room Layout" },

          {
            key: "general-schematic-layout",
            label:
              " General Schematic Layout for Chilled Water and Hot Water System",
          },
          { key: "P&ID-layout", label: " P&ID Layout" },
          {
            key: "EMS-BMS-control",
            label: " EMS and BMS Control and Logic Diagram",
          },
          { key: "", label: "" },
        ],
      },
      {
        key: "electrical-ELV",
        label: "Electrical & ELV",
        subitems: [
          {
            key: "MASTER-SITE-PLAN",
            label: " MASTER SITE PLAN WITH EARTHING LAYOUT",
          },
          {
            key: "STREET-LIGHTING-LAYOUT",
            label: " MASTER SITE PLAN WITH STREET LIGHTING LAYOUT",
          },
          {
            key: "LIGHTNING-PROTECTION-LAYOUT",
            label: "LIGHTNING PROTECTION LAYOUT",
          },
          { key: " SLD-OF-PROCESS-PANEL", label: "SLD OF PROCESS PANEL" },
          { key: "SLD-OF-HVAC-PANEL", label: " SLD OF HVAC PANEL" },
          { key: "SLD-OF-PDB-PANEL", label: "SLD OF PDB PANEL" },
          { key: " SLD-OF-UPS-PANEL", label: " SLD OF UPS PANEL" },
          { key: "SLD-OF-MAIN-LT-PCC", label: " SLD OF MAIN LT PCC" },
          { key: " SLD-OF-UTILITY-PANEL", label: " SLD OF UTILITY PANEL" },
          {
            key: " FLOOR-PLAN-WITH-LIGHTING-LAYOUT",
            label: " FLOOR PLAN WITH LIGHTING LAYOUT",
          },
          {
            key: "FLOOR-PLAN-WITH-POWER-LAYOUT",
            label: " FLOOR PLAN WITH POWER LAYOUT",
          },
          {
            key: "FLOOR-PLAN-WITH-ELV-LAYOUT",
            label: " FLOOR PLAN WITH ELV LAYOUT",
          },
          {
            key: " FLOOR-PLAN-WITH-FAS-LAYOUT",
            label: " FLOOR PLAN WITH FAS LAYOUT",
          },
          {
            key: "FLOOR-PLAN-WITH-CABLE-TRAY-ROUTING-LAYOUT",
            label: " FLOOR PLAN WITH CABLE TRAY ROUTING LAYOUT",
          },
          {
            key: "SLD-OF-SWITCHBOARD-WIRING-DETAIL",
            label: "SLD OF SWITCHBOARD WIRING DETAIL",
          },
        ],
      },
      {
        key: "utility-plumbing",
        label: "Utility & Plumbing",
        subitems: [
          {
            key: "general-utility-placement",
            label: " General Utility Placement Layout",
          },
          {
            key: "general-utility-pendent ",
            label: "General Utility and Pendent Layout",
          },
          {
            key: "general-process-drain",
            label: " General and Process Drain Layout",
          },
          { key: "RO-PW-piping", label: "RO and PW Piping Layout" },
          { key: " WFI-PSG-piping", label: " WFI and PSG Piping Layout" },
          {
            key: "compressed-air",
            label: "Compressed Air, Nitrogen, Co2 & Vacuum Piping Layout",
          },
          {
            key: " ETP-WTP-STP-schematic",
            label: " ETP, WTP, STP schematic and detailed process layout",
          },
          {
            key: "general-fixture-details",
            label: " General Fixture Details and Placement Layout",
          },
          {
            key: "raw-water",
            label: "Raw water, Fire Tank and overhead tank details",
          },
          { key: "fire-fighting", label: " Fire fighting Layout" },
        ],
      },
      {
        key: "engineering-documents-qualification",
        label: "Engineering Documents & Qualification",
        subitems: [
          {
            key: "risk-assessments-documentation",
            label: " Risk Assessments Documentation",
          },
          {
            key: " detailed-project-report",
            label: " Detailed Project Report (DPR)",
          },
          {
            key: "bill-quantity-architectural",
            label: "Bill of Quantity of Architectural and Structural Work",
          },
          {
            key: "bill-quantity-HVAC ",
            label: "Bill of Quantity of HVAC System",
          },
          {
            key: "bill-quantity-electrical",
            label: "Bill of Quantity of Electrical System",
          },
          {
            key: " bill-quantity-utility",
            label: " Bill of Quantity of Utility System",
          },
          { key: " URS-HVAC-utility", label: "URS of HVAC and Utility System" },
          {
            key: "qualification-HVAC",
            label: "Qualification (DQ, IQ, OQ, PQ) of HVAC and Utility System",
          },
          {
            key: " method-statement-MEPF",
            label: "Method Statement for MEPF System",
          },
          {
            key: "factory-assessment-test",
            label: " Factory Assessment Test (FAT) Reports",
          },
          {
            key: "validation-qualification-documentation",
            label: " Validation & Qualification Documentation",
          },
        ],
      },
    ],
  },

  {
    id: "regulatory_submissions",
    category: "Regulatory Submissions",

    subitems: [
      {
        key: "regulatory-authorities",
        label: "Submissions to Regulatory Authorities",
      },
      {
        key: "document-review",
        label: "Document Review and Elimination of Queries/Rejection",
      },
      { key: "dmf-compilation", label: "Drug Master File (DMF) Compilation" },
      { key: "regulatory-queries", label: "Response to Regulatory Queries" },
      {
        key: "compliance-gap-analysis",
        label: "Regulatory Compliance and Gap Analysis",
      },
      { key: "post-approval", label: "Post-Approval Changes Submissions" },
      { key: "anda-guidance", label: "Guidance for ANDA and DMFs Preparation" },
      { key: "quality-assurance", label: "Quality Assurance and Compliance" },
      { key: "lifecycle-management", label: "Lifecycle Management (LCM)" },
      {
        key: "inda-submission",
        label: "Investigational New Drug Applications (INDA) Submission",
      },
      {
        key: "anda-review",
        label: "Review of Abbreviated New Drug Application (ANDA) Submissions",
      },
      {
        key: "dmf-review",
        label: "Review of Drug Master File (DMF) Submissions",
      },
      {
        key: "rap-support",
        label: "Support for Remedial Action Plan (RAP) Post FDA Inspection",
      },
    ],
  },
  {
    id: "qualification&validation",
    category: "Qualification & Validation",
    subitems: [
      { key: "urs", label: "User Requirements Specification (URS)" },
      {
        key: "design-qualification",
        label: "Design Qualification and Design Reviews",
      },
      {
        key: "fat-sat",
        label: "FAT (Factory Acceptance Tests) / SAT (Site Acceptance Test)",
      },
      {
        key: "installation-qualification",
        label: "Installation Qualification",
      },
      { key: "operation-qualification", label: "Operation Qualification (OQ)" },
      { key: "sop", label: "Standard Operating Procedure" },
      { key: "performance-qualification", label: "Performance Qualification" },
      {
        key: "process-cleaning-validation",
        label: "Process Validation/ Cleaning Validation",
      },
      { key: "risk-assessment", label: "Risk Assessment" },
    ],
  },

  {
    id: "audit",
    category: "Supplier Audit & Qualification ",
    items: [{ key: "api-audit" }],
  },
  {
    id: "qms-consult-implement",
    category: "QMS Consulting & Implementation ",
    items: [{ key: "qms-consult-implement" }],
  },

  {
    id: "gmp-certificat-service",
    category: "GMP Certification/Upgradation ",
    items: [{ key: "gmp-certificat-service" }],
  },

  {
    id: "regulatory-service",
    category: " Regulatory Services ",
    items: [{ key: "regulatory-service" }],
  },

  {
    id: "technology-transfer",
    category: "Technology Transfer ",
    items: [{ key: "technology-transfer" }],
  },

  {
    id: "regulated-market-access",
    category: "Regulated Market Access ",
    items: [{ key: "regulated-market-access" }],
  },

  {
    id: "trainings",
    category: " Trainings ",
    items: [{ key: "trainings" }],
  },
];

const generateMenuItems = (items) => {
  return items.map((item) => {
    if (item.subitems && item.subitems.length > 0) {
      return {
        key: item.key || item.id,
        label: item.label || item.category,
        children: generateMenuItems(item.subitems),
      };
    }

    return {
      key: item.key,
      label: (
        <div
          // to={`/service/${item.key}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          // className="block px-4 transition-all duration-200 rounded font-semibold text-gray-800 hover:text-blue-600"
        >
          {item.label || item.category}
        </div>
      ),
    };
  });
};
const menuItems = services.map((service) => {
  if (service.subitems && service.subitems.length > 0) {
    return {
      key: service.id,
      label: (
        <span className="font-semibold text-gray-800 px-4">
          {service.category}
        </span>
      ),
      // children: service.subitems.map((sub) => ({
      //   key: sub.key,
      //   label: sub.label || <div></div>,
      // })),
      children: generateMenuItems(service.subitems),
    };
  }

  const firstItem = service.items?.[0];
  if (!firstItem) return null;

  return {
    key: service.id,
    label: (
      <Link
        to={`/service/${firstItem.key}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="block px-4 transition-all duration-200 rounded font-semibold text-gray-800 "
      >
        {service.category}
      </Link>
    ),
  };
});

const ServiceDropdown = ({ toggleDrawer }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [openKeys, setOpenKeys] = useState([]);
  const [openKey, setOpenKey] = useState(null); // only one key open at a time

  const toggleDropdown = (key) => {
    // setOpenKey((prev) =>
    //    prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]

    // );
    setOpenKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <div className="relative">
      {/* Desktop View */}
      <div className="hidden md:block">
        <Dropdown menu={{ items: menuItems }} trigger={["hover"]}>
          <span className="cursor-pointer ">
            <button
              className="relative text-lg font-semibold transition-all duration-300 ease-in-out flex items-center gap-2 
      hover:scale-110 hover:text-blue-900
      after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-900 after:left-0 after:bottom-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Services <FaAngleDown />
            </button>
          </span>
        </Dropdown>
      </div>

      <div className="md:hidden relative">
        <button
          className="flex items-center gap-2  font-semibold  text-gray-900 text-lg "
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {" "}
          <MdMiscellaneousServices className="text-2xl" />
          Services
          <FaAngleDown
            className={`transition-transform duration-300 ${
              mobileOpen ? "rotate-180" : "rotate-0"
            }`}
          />{" "}
        </button>

        {mobileOpen && (
          <div className="absolute bg-white  mt-2   rounded z-50 w-64 max-h-[calc(100vh-100px)] overflow-y-auto">
            {/* {menuItems.map((item) => (
        <div key={item.key} className="py-2">
          <div className="font-bold ml-[-16px] text-blue-700">{item.label}</div>
          
          {item.children && (
            <div className=" mt-1 space-y-1">
              {item.children.map((child) => (
                <div
                  key={child.key}
                  className="text-gray-700 text-sm py-0.5 hover:text-blue-600 transition"
                >
                  {child.label}
                </div>
              ))}
            </div>
          )}
        </div>
      ))} */}
            <div className="">
              {menuItems.map((item) => (
                <div key={item.key} className="py-2">
                  <div
                    className=" !text-gray-700 cursor-pointer text-[15px] ml-[-16px] flex items-center justify-between "
                    // onClick={() => toggleDropdown(item.key)}
                    onClick={() => {
                      if (item.children) {
                        toggleDropdown(item.key);
                      } else {
                        setMobileOpen(false);
                        toggleDrawer();
                      }
                    }}
                  >
                    {/* {item.label}  */}
                    <span>{item.label}</span>
                    {item.children && (
                      <span className="ml-2 text-xs">
                        {openKey === item.key ? (
                          <FiChevronDown size={16} />
                        ) : (
                          <FiChevronRight size={16} />
                        )}
                      </span>
                    )}
                  </div>

                  {/* {item.children && openKeys.includes(item.key) && ( */}
                  {item.children && openKey === item.key && (
                    <div className="mt-1  space-y-1 ">
                      {item.children.map((child) => (
                        <div
                          key={child.key}
                          className="text-gray-600 font-normal text-sm py-0.5 hover:text-blue-600 transition cursor-pointer"
                        >
                          {child.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDropdown;
