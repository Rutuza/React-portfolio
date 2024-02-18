import React from "react";
import { Navbutton } from "../Assets/img/icon";
import logo from "../Assets/SVG/logo.svg";


function Navbar() {
  return (
    <header id="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" srcset="" />
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/work">Work</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
