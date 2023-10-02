import React from "react";
import { Navbutton } from "../img/icon";
function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <div className="container">
        <div className="logo">
          <h6>LOGO</h6>
        </div>

        <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skill</li>
          <li>Work</li>
          <li>Play</li>
          <li>Contact</li>
        </ul>

        <div className="last-btn">
          <Navbutton className="icon" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
