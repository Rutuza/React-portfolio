import React from "react";
import { Navbutton } from "../img/icon";
function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <div className="container">
        <div className="logo">
          <div className="symbol">J</div>
          <h5>Jyotika <br />Dalal</h5>
        </div>

        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
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
