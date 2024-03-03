import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from ".//assests/logo.png";
import { LuInstagram } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import sfsEdit1 from "./assests/sfsHome.jpg";
import { FiMapPin, FiPhoneCall } from "react-icons/fi";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { SiGmail } from "react-icons/si";
import DrawerExample from "./DrawerExample";


function Header() {
  return (
    <header className="header relative">
        <nav className="absolute right-0 top-6 flex items-center justify-between w-full px-4 pl-10 nav1">
        <img
        src={logo}
        alt="School Logo"
        className="h-24 w-24 rounded-full"
      />
          <ul className="ml-auto flex gap-5 w-fit">
            <li className="list-item">
              <NavLink  to="/" activeClassName="border border-white" className="text-white hover:border hover:border-white py-3 px-1.5 cursor-pointer">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink  to="/about-us" activeClassName="border border-white" className="text-white hover:border hover:border-white py-3 px-1.5 cursor-pointer">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" activeClassName="border border-white" className="text-white hover:border hover:border-white py-3 px-1.5 cursor-pointer">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/results" activeClassName="border border-white" className="text-white hover:border hover:border-white py-3 px-1.5 cursor-pointer">
                Results
              </NavLink>
            </li>
            <li>
              <NavLink to="/alumni" activeClassName="border border-white" className="text-white hover:border hover:border-white py-3 px-1.5 cursor-pointer">
                Alumni
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sfs-alumni-foundation"
                activeClassName="border border-white"
                className="text-white hover:border hover:border-white py-3 px-1.5 cursor-pointer"
              >
                Alumni Foundation
              </NavLink>
            </li>
          </ul>
        </nav>
      <img
        className="background-image"
        src={sfsEdit1}
        alt="sample"
      />
      <div className="absolute bottom-0 flex flex-col md:flex-row items-start md:items-center justify-between w-full px-10 pb-5 nav-m">
        <div className="flex flex-col gap-5">
        <div className="flex items-center text-white gap-5">
          <FiMapPin size={25} />
          <p>
            <b>NGO'S Colony, Palangi</b> <br />
            <b>Tanuku, Andhra Pradesh, 534211</b>
          </p>
        </div>
        <div className="flex items-center text-white gap-5">
          <TbDeviceLandlinePhone size={25} />
          <p>
            <b>08819 - 224667</b>
          </p>
        </div>
        <div className="flex items-center text-white gap-5">
          <FiPhoneCall size={25} />
          <p>
            <b>9440828636</b>
          </p>
        </div>
        <div className="flex items-center text-white gap-5">
          <SiGmail size={25} />
          <p>
            <b>sfstanuku.wg@gmail.com</b>
          </p>
        </div>
        </div>
        
        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/"
            rel="noreferrer"
            target={"_blank"}
          >
            <LuInstagram size={40} color="white" />
          </a>
          <a
            href="https://www.instagram.com/"
            rel="noreferrer"
            target={"_blank"}
          >
            <CiFacebook size={40} color="white" />
          </a>
          <a
            href="https://www.instagram.com/"
            rel="noreferrer"
            target={"_blank"}
          >
            <FaYoutube size={40} color="white" />
          </a>
        </div>
      </div>
      <DrawerExample/>
    </header>
  );
}

export default Header;