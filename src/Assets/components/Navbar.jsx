import React from "react";
import { Navbutton } from "../img/icon";
import logo from "../SVG/logo.svg";


function Navbar() {
  return (
    // <header className="navbar" id="navbar">
    //   <div className="container">
    //     <div className="logo">
    //       <div className="symbol">J</div>
    //       <h5>Jyotika <br />Dalal</h5>
    //     </div>

    //     <nav className="nav-item">
    //       <ul>
    //         <a href="/"><li className="list">Home</li></a>
    //         <a href="/about"><li className="list">About</li></a>
    //         <a href="/skills"><li className="list">Skills</li></a>
    //         <a href="/work"><li className="list">Work</li></a>
    //         <a href="/contact"><li className="list">Contact</li></a>
    //       </ul>
          
    //     </nav>
    //   </div>
    // </header>

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
