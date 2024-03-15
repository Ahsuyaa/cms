import { useState } from "react";
import logo from "../assets/logo.png";
import girl from "../assets/logo.png";
import {
  FaAngleRight,
  FaAppStore,
  FaFile,
  FaHome,
  FaNewspaper,
  FaUser,
  FaUserFriends,
} from "react-icons/fa";
import DashboardNews from "./DashboardNews";

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setMenuOpen(false); // Close the menu when an item is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between py-2 px-10 shadow-md items-center">
          <div>
            <img src={logo} alt="logonimage" className="w-[100px] h-[100px]" />
          </div>
          <div className="flex items-center gap-5">
            <div className={`md:hidden cursor-pointer`} onClick={toggleMenu}>
              {isMenuOpen ? (
                // Render cross button when the menu is open
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Render hamburger icon when the menu is closed
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </div>
            <div>
              <img
                src={girl}
                alt="img"
                className="w-14 h-14 rounded-full p-2 bg-slate-200"
              />
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[20%]">
              <div
                className={`md:flex ${
                  isMenuOpen ? "flex" : "hidden"
                } flex-col  absolute z-20 md:static md:backdrop-blur-0 backdrop-blur-md `}
              >
                <div className="shadow-md md:p-5 lg:p-8 xl:p-10  ">
                  <ul>
                    <li
                      className={`flex gap-4 items-center mb-4 ${
                        selectedItem === "Dashboard" ? "text-blue-500" : ""
                      }`}
                      onClick={() => handleItemClick("Dashboard")}
                    >
                      <FaHome className="flex justify-center text-center" />
                      Dashboard
                    </li>
                    <li
                      className={`flex gap-4 items-center mb-4 ${
                        selectedItem === "Application" ? "text-blue-500" : ""
                      }`}
                      onClick={() => handleItemClick("Application")}
                    >
                      <FaNewspaper className="flex justify-center text-center" />
                      News
                    </li>
                    <li
                      className={`flex gap-4 items-center mb-4 ${
                        selectedItem === "Document" ? "text-blue-500" : ""
                      }`}
                      onClick={() => handleItemClick("Document")}
                    >
                      <FaFile className="flex justify-center text-center" />
                      Notice
                    </li>
                    <li
                      className={`flex gap-4 items-center mb-4 ${
                        selectedItem === "Profile" ? "text-blue-500" : ""
                      }`}
                      onClick={() => handleItemClick("Profile")}
                    >
                      <FaUserFriends className="flex justify-center text-center" />
                      Events
                    </li>
                  </ul>
                  <div className="my-20  ">
                    <div className="flex  gap-4  mb-4">
                      <h6 className="w-36">Help and Support</h6>
                      <h6 className=" w-4 flex items-center justify-center ">
                        <FaAngleRight />
                      </h6>
                    </div>
                    <div className="flex  gap-4 mb-4">
                      <h6 className="w-36"> Know about us</h6>
                      <h6 className="w-4 flex items-center justify-center ">
                        <FaAngleRight />
                      </h6>
                    </div>
                    <div className="flex  gap-4 mb-4">
                      <h6 className="w-36">Other Links</h6>
                      <h6 className="w-4 flex items-center justify-center ">
                        <FaAngleRight />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Render content based on the selected item */}
            <div className="md:w-[80%]">
              {selectedItem === "Dashboard" && <DashboardNews />}
              {selectedItem === "Application" && <p>eij</p>}
              {selectedItem === "Document" && <p>Profile Content</p>}
              {selectedItem === "Profile" && <p>Profile Content</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
