import React from "react";
import "../Navbar/Navbar.css";
import twitter from "../icons_navbar/twitter.png";
import linkedin from "../icons_navbar/linkedin.png";
import github from "../icons_navbar/github.png";
import instagram from "../icons_navbar/instagram-.png";
import fiverr from "../icons_navbar/fiverr.png";
import youtube from "../icons_navbar/youtube.png";
import mentor from "../icons_navbar/favicon-32x32.png";

//MAKE FUNCTION FOR NAVBAR COMP

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo_place">
        {/* <img src={logo}></img> */}
        <h2>ZAKARIA ELAROUSSI</h2>
        <span id="social_icon"></span>
      </div>
      {/* ELEMENT FOR THE DIRECT LINKS SECTION */}
      <div className="direct_to_section">
        {/* UL ELEMENTS */}
        <ul id="ul_direct_links">
          <a href="#langs">
            <li className="direct_li">LANGUAGES</li>
          </a>
          <a href="#pr_section">
            <li className="direct_li">PROJECTS</li>
          </a>
          <a href="#contact">
            <li className="direct_li">CONTACT</li>
          </a>
        </ul>
      </div>
      <div className="items_nav">
        <ul className="ul_nav">
          <a
            href="https://www.linkedin.com/in/zakaria-elaroussi-609121223/"
            target="blank"
          >
            <img src={linkedin} alt="linkedin Logo" />
          </a>
          <a href="https://github.com/DepressedPenguin" target="blank">
            <img src={github} alt="github Logo" />
          </a>
          <a href="https://www.instagram.com/ignite_z02/" target="blank">
            <img src={instagram} alt="instagram Logo" />
          </a>
          <a href="https://twitter.com/DP_0_PENGUIN" target="blank">
            <img src={twitter} alt="twitter Logo" />
          </a>
          <a
            href="https://www.fiverr.com/zioncoder?up_rollout=true"
            target="blank"
          >
            <img src={fiverr} alt="twitter Logo" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCr_zrVSawkZ_wDtGh1UP5ng"
            target="blank"
          >
            <img src={youtube} alt="twitter Logo" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCr_zrVSawkZ_wDtGh1UP5ng"
            target="blank"
          >
            <img src={mentor} alt="twitter Logo" />
          </a>
        </ul>
      </div>
    </div>
  );
}
