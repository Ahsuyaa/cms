import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-white relative z-10">
      <div className="flex justify-between mx-auto container py-5 text-lg md:items-center">
        <div>
          <img className="w-24" src={logo} alt="logo image" />
        </div>

        <div
          className={`${
            showMenu
              ? "block  absolute right-10 p-10  bg-white top-20 "
              : "hidden"
          } md:flex md:items-center md:gap-20`}
        >
          <ul className="flex-col md:flex md:flex-row md:items-center gap-5 font-semibold">
            <li className="hover:text-[#fa6559]">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-[#fa6559]">
              {" "}
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li className="hover:text-[#fa6559]">
              {" "}
              <NavLink to="/events">Events</NavLink>
            </li>
            <li className="hover:text-[#fa6559]">
              {" "}
              <NavLink to="/notice">Notice</NavLink>
            </li>
            <li className="hover:text-[#fa6559]">
              {" "}
              <NavLink to="/news">Events</NavLink>
            </li>
            <li className="hover:text-[#fa6559]">
              {" "}
              <NavLink to="/login">dashboard</NavLink>
            </li>
          </ul>
          {/* {isLoggedIn ? ( */}
          {/* <div className="flex-col flex  gap-5 items-center md:flex-row">
            <span className="text-gray-600">Welcome, User</span>

            <button
              onClick={handleLogout}
              className="bg-[#fa6559] inline-flex px-6 md:px-10 py-2 font-semibold text-white"
            >
              Logout
            </button>
          </div> */}
          {/* ) : ( */}
          <div>
            <button
              onClick={handleLogin}
              className="bg-[#fa6559] inline-flex px-6 md:px-10 py-2 font-semibold text-white"
            >
              <NavLink to="/loginuser"> Login</NavLink>
            </button>
          </div>
          {/* )} */}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex  p-2 rounded-md text-gray-600 hover:text-[#fa6559]"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
