import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; // Import the CSS file
import logo from ".//assests/logo.png";
import { LuInstagram } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import sfsEdit1 from "./assests/sfsHome.jpg";
import {FiMapPin, FiPhoneCall} from "react-icons/fi"
import { TbDeviceLandlinePhone} from "react-icons/tb"
import { SiGmail } from "react-icons/si";

function Header() {
  // const openLinkInNewTab = (url) => {
  //   window.open(url, "_blank");
  // };
  return (
    <header className="header">
      <div className="header-navbar-content">
        <nav className="navbar">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" activeClassName="active-link">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" activeClassName="active-link">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/results" activeClassName="active-link">
                Results
              </NavLink>
            </li>
            <li>
              <NavLink to="/alumni" activeClassName="active-link">
                Alumni
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sfs-alumni-foundation"
                activeClassName="active-link"
              >
                Alumni Foundation
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <img
        className="background-image"
        src={sfsEdit1}
        style={{
          height: "520px",
          width: "100%",
        }}
        alt="sample"
      />
      <img
        className="header-logo"
        src={logo}
        alt="School Logo"
        style={{ height: "90px", width: "90px", borderRadius: "100%" }}
      />

      <div className="address-container1">
        <div className="address">
          <FiMapPin size={25} />
        <p>
          <b>NGO'S Colony, Palangi</b> <br/>
          <b>Tanuku, Andhra Pradesh, 534211</b>
        </p>
        </div>
        <div className="address">
        <TbDeviceLandlinePhone size={25} />
        <p>
         <b>08819 - 224667</b>
        </p>
        </div>
        <div className="address">
          <FiPhoneCall size={25} />
        <p>
         <b>9440828636</b>
        </p>
        </div>
        <div className="address">
          <SiGmail size={25} />
        <p>
          <b>sfstanuku.wg@gmail.com</b>
        </p>
        </div>
        <div className="header-right">
          <a href="https://www.instagram.com/" rel="noreferrer" target={"_blank"}><LuInstagram size={40} color="white" /></a>
          <a href="https://www.instagram.com/" rel="noreferrer" target={"_blank"}><CiFacebook size={40} color="white" /></a>
          <a href="https://www.instagram.com/" rel="noreferrer" target={"_blank"}><FaYoutube size={40} color="white" /></a>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
