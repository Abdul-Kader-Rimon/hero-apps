import React, { useState } from 'react';
import logoImage from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router';
const Navbar = () => {

    const [active, setActive] = useState("Home");
  const menuItems = [
    { name: "Home", path: "/apps" },
    { name: "Apps", path: "" },
    { name: "Installation", path: "" }
  ];
 
    return (
      <div className="navbar bg-base-100 max-w-11/12 md:max-w-10/12 lg:max-w-10/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    onClick={() => setActive(item)}
                    className={
                      active === item
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-lg font-semibold"
                        : "text-gray-800 text-lg font-semibold"
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          <div>
            <a className="flex justify-center items-center gap-2 text-xl md:text-2xl  lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
              <img className="h-8 w-8" src={logoImage} alt="" /> HERO.IO
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItems.map((item) => (
              <li key={item}>
                <Link to={item.path}
                  onClick={() => setActive(item)}
                  className={
                    active === item
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-lg font-semibold "
                      : " text-gray-800 text-lg font-semibold"
                  }
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/Abdul-Kader-Rimon" target='_blank'
            className="btn text-white  bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
          >
            <FaGithub />
            Contribute
          </a>
        </div>
      </div>
    );
};

export default Navbar;