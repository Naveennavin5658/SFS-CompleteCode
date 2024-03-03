import React from 'react';

import logo from ".//assests/logo.png";
import { LuInstagram } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import {FiMapPin, FiPhoneCall} from "react-icons/fi"
import { TbDeviceLandlinePhone} from "react-icons/tb"
import { SiGmail } from "react-icons/si";
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="logo-footer">
          <img src={logo} alt="School Logo" className="logo" />
        </div>
        <div className="address-container">
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
        </div>
      </div>
      <div className="footer-right">
      <a href="https://www.instagram.com/" rel="noreferrer" target={"_blank"}><LuInstagram size={40} color="black" /></a>
      <a href="https://www.instagram.com/" rel="noreferrer" target={"_blank"}><CiFacebook size={40} color="black" /></a>
      <a href="https://www.instagram.com/" rel="noreferrer" target={"_blank"}><FaYoutube size={40} color="black" /></a>
      </div>
    </footer>
  );
}

export default Footer;
