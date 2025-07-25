import { useNavigate } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { travelDestinations } from "../Data/Tours_package_data";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Mobile dropdown icon
import { GoDot } from "react-icons/go";
import { FaMapLocationDot } from "react-icons/fa6";

const TourDropdown = ({ setIsOpen }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpened] = useState(false);

  const handleNavigate = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top of the page

    navigate(`/tour/${id}`);
    setIsOpened(false); // Close mobile dropdown on selection
    setIsOpen(false);
  };

  const menu = (
    <Menu>
      {travelDestinations.map((destination) => (
        <Menu.Item
          key={destination.id}
          onClick={() => handleNavigate(destination.id)}
        >
          <span className="text-gray-700 flex items-center gap-x-2">
            <GoDot />
            {destination.title}
          </span>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="relative">
      {/* Desktop Dropdown (Hover) - Hidden on Mobile */}
      <div className="hidden sm:inline">
        <Dropdown overlay={menu} trigger={["hover"]}>
          <a
            href="#"
            className="sm:text-xl font-italic sm:text-white transition relative inline-block text-[16px] font-semibold text-gray-800 before:absolute before:-bottom-[2px] before:left-1/2 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full hover:before:left-0"
          >
            Tour Packages
            <AppstoreOutlined className="ml-2" />
          </a>
        </Dropdown>
      </div>

      {/* Mobile Dropdown (Click) - Hidden on Desktop */}
      <div className="sm:hidden inline-block">
        <button
          onClick={() => setIsOpened(!isOpen)}
          className="text-lg font-semibold text-gray-800 flex items-center gap-2"
        >
          <FaMapLocationDot />
          Tour Packages
          {isOpen ? (
            <FaChevronUp size={"12px"} className="ml-5" />
          ) : (
            <FaChevronDown size={"12px"} className="ml-5" />
          )}
        </button>

        {isOpen && (
          <div className=" top-full left-0 mt-2 w-full z-50">
            {travelDestinations.map((destination) => (
              <button
                key={destination.id}
                onClick={() => handleNavigate(destination.id)}
                className="flex items-center gap-x-1 text-nowrap w-full text-sm text-left py-2 hover:bg-gray-100 text-gray-800 active:bg-[#1f84a6] active:text-white rounded-lg"
              >
                <GoDot />
                {destination.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TourDropdown;
