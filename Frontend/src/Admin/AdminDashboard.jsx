import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdMenuOpen, MdOutlineMenu } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
import { LiaBlogSolid } from "react-icons/lia";
import { IoSettings } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminBlogs from "./AdminBlogs";
import { FaSearch } from "react-icons/fa";

function AdminDashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [contactUsList, setContactUsList] = useState([]);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const itemsPerPage = 6;

  const navigate = useNavigate();
  const userName = "Admin";
  const token = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logged out successfully");
    navigate("/admin-login");
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleServiceChange = (e) => setSelectedService(e.target.value);
  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        navigate("/admin-login");
        return;
      }

      setLoading(true);
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await axios.get(
          "https://bkl.gxpro.co.in/admin/contact-us-list",
          config
        );
        setContactUsList(res.data.data || []);
      } catch (error) {
        console.error("Error fetching contact us list:", error);
        toast.error("Failed to fetch data");
        if (error.response?.status === 401) {
          handleLogout();
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [token, navigate]);

  const filteredItems = contactUsList.filter((contactUs) => {
    const matchesName = contactUs.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesService =
      selectedService === "" || contactUs.service === selectedService;
    return matchesName && matchesService;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // const currentItems = contactUsList.slice(indexOfFirstItem, indexOfLastItem);
  // const totalPages = Math.ceil(contactUsList.length / itemsPerPage);
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedService]);
  const uniqueServices = [
    ...new Set(contactUsList.map((item) => item.service)),
  ].filter((service) => service);
  return (
    <div className="flex min-h-screen bg-white">
      <div
        className={`bg-white shadow-2xl text-sky-900 h-screen text-lg gap-3  transition-all duration-300 fixed ${
          isCollapsed ? "w-20 mx-auto " : "w-64 mx-auto"
        } flex flex-col z-10`}
      >
        <div
          className="flex justify-center items-center p-3 mb-[-20px] cursor-pointer hover:scale-110"
          onClick={toggleSidebar}
        >
          {isCollapsed ? (
            <MdOutlineMenu className=" mt-4 mb-5 " size={24} />
          ) : (
            <img
              src="/MSGMP/GXPROLogo.png"
              alt="Logo"
              className="w-50 h-auto"
            />
          )}
        </div>
        <hr
          className={`border-gray-300   ${
            isCollapsed ? "w-15 mx-auto " : " w-55 mx-auto"
          }`}
        />
        <div className="p-2 space-y-4 mt-[-8px] ">
          <div
            className={`flex items-center  gap-2  p-4  rounded-lg hover:bg-gray-200 cursor-pointer transition-colors ${
              activeSection === "dashboard" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleSectionChange("dashboard")}
          >
            <BiSolidDashboard size={24} />
            {!isCollapsed && <span>Dashboard</span>}
          </div>

          <div
            className={`flex items-center  p-4 gap-2  rounded-lg hover:bg-gray-200 cursor-pointer transition-colors ${
              activeSection === "blogs" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleSectionChange("blogs")}
          >
            <LiaBlogSolid size={24} />
            {!isCollapsed && <span>Blogs</span>}
          </div>

          {/* <div 
            className={`flex items-center  p-4 gap-2  rounded-lg hover:bg-gray-200 cursor-pointer transition-colors ${
              activeSection === "settings" ? "bg-gray-100" : ""
            }`} 
            onClick={() => handleSectionChange("settings")}
          >
            <IoSettings size={24} />
            {!isCollapsed && <span>Settings</span>}
          </div> */}
        </div>
      </div>

      <div
        className={`flex-1 transition-all duration-300 ${
          isCollapsed ? "ml-20" : "ml-64"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-4 shadow-md sticky top-0 z-10">
          <div
            className="p-2 cursor-pointer hover:bg-gray-100 rounded-md "
            onClick={toggleSidebar}
          >
            {/* <MdMenuOpen size={24} /> */}
          </div>
          <h3 className="text-3xl font-semibold p-1 ">
            Welcome to GxPro Admin Dashboard
          </h3>
          <div className="relative">
            <div
              className="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
              onMouseEnter={() => setShowProfileModal(true)}
              onMouseLeave={() => setShowProfileModal(false)}
            >
              <CgProfile size={35} className="text-sky-900" />
            </div>
            {showProfileModal && (
              <div
                className="absolute right-0 bg-white shadow-lg p-4 rounded-md w-48 border border-gray-200"
                onMouseEnter={() => setShowProfileModal(true)}
                onMouseLeave={() => setShowProfileModal(false)}
              >
                <p className="font-bold text-gray-800">{userName}</p>
                <button
                  className="flex items-center gap-2 text-red-500 mt-2 hover:text-red-700"
                  onClick={handleLogout}
                >
                  Logout <FaPowerOff size={15} />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="p-6">
          {activeSection === "dashboard" && (
            <div>
              <div className="text-center bg-gradient-to-r from-[#4682B4] to-[#04080B] text-white p-4  rounded-md text-lg font-bold mb-5 shadow-md">
                Contact Us List
              </div>

              <div className="flex space-x-100 mb-4">
                {/* <input 
                    type="text"
                    placeholder="Search by Name"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="p-2 border border-gray-300 rounded-md w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  /> */}
                <div className="relative w-1/3">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search by Name"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="p-2 pl-10 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-sky-600"
                  />
                </div>

                <select
                  value={selectedService}
                  onChange={handleServiceChange}
                  className="p-2 border border-gray-300 rounded-md w-1/3 focus:outline-none focus:ring-1  focus:ring-sky-600 "
                >
                  <option value="">All Services</option>

                  {uniqueServices.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {loading ? (
                <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-600"></div>
                </div>
              ) : (
                <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                  <table className="w-full border-collapse ">
                    <thead>
                      <tr className="bg-gray-200 text-gray-700">
                        <th className="p-3 text-left border-b border-gray-200">
                          S.No.
                        </th>
                        <th className="p-3 text-left border-b border-gray-200">
                          Name
                        </th>
                        <th className="p-3 text-left border-b border-gray-200">
                          Email
                        </th>
                        <th className="p-3 text-left border-b border-gray-200">
                          Contact
                        </th>
                        <th className="p-3 text-left border-b border-gray-200">
                          Service
                        </th>
                        <th className="p-3 text-left border-b border-gray-200">
                          Message
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.length > 0 ? (
                        currentItems.map((contactUs, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="p-3 border-b border-gray-200">
                              {indexOfFirstItem + index + 1}.
                            </td>
                            <td className="p-3 border-b border-gray-200">
                              {contactUs.name} {contactUs.lastName}
                            </td>
                            <td className="p-3 border-b border-gray-200">
                              <a
                                href={`mailto:${contactUs.recipientEmail}`}
                                className="text-sky-600 hover:underline"
                              >
                                {contactUs.recipientEmail}
                              </a>
                            </td>
                            <td className="p-3 border-b border-gray-200">
                              <a
                                href={`tel:+${contactUs.countryCode}${contactUs.contact}`}
                                className="text-sky-600 hover:underline"
                              >
                                {contactUs.countryCode}-{contactUs.contact}
                              </a>
                            </td>
                            <td className="p-3 border-b border-gray-200">
                              {contactUs.service}
                            </td>
                            <td className="p-3 border-b border-gray-200 max-w-xs truncate">
                              {contactUs.messageBody}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan="6"
                            className="text-center p-4 text-gray-500"
                          >
                            No Data Found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center space-x-2 mt-6">
                  <button
                    className={`px-3 py-1 rounded-md ${
                      currentPage === 1
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg- bg-gradient-to-r from-[#4682B4] to-[#04080B]  text-white"
                    }`}
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>

                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === i + 1
                          ? " bg-gradient-to-r from-[#4682B4] to-[#04080B] text-white"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                      onClick={() => paginate(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    className={`px-3 py-1 rounded-md ${
                      currentPage === totalPages
                        ? "bg-gray-300 cursor-not-allowed"
                        : " bg-gradient-to-r from-[#4682B4] to-[#04080B]  text-white"
                    }`}
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          )}

          {activeSection === "blogs" && (
            <div className="text-center ">
              <AdminBlogs />
            </div>
          )}

          {activeSection === "settings" && (
            <div className="text-center p-10">
              <h2 className="text-2xl font-bold">Settings</h2>
              <p className="text-gray-600 mt-2">Settings section coming soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
