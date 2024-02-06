import React from "react";
import { Navbutton } from "../img/icon";
function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="container">
        <div className="logo">
          <div className="symbol">J</div>
          <h5>Jyotika <br />Dalal</h5>
        </div>

        <div className="nav-item">
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="/about"><li>About</li></a>
            <a href="/skills"><li>Skills</li></a>
            <a href="/work"><li>Work</li></a>
            <a href="/contact"><li>Contact</li></a>
          </ul>
          
          {/* <div className="last-btn">
            <Navbutton className="icon" />
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
