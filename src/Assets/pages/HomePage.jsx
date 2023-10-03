import React from "react";
import Navbar from "../components/Navbar";
import { Fingerprint } from "../img/icon";
import {
  BiLogoInstagram,
  BiLogoPinterestAlt,
  BiLogoLinkedin,
} from "react-icons/bi";
function HomePage() {
  const numberOfItems = 1000;
  return (
    <div>
      <Navbar />
      <div id="home">
        <div className="hero">
          <div className="heading">
            <h1>Hi</h1>
            <h1>I am JYOTIKA DALAL</h1>
            <h6 className="quote">Design and code what you think</h6>
          </div>
          <div className="socials">
            <div className="text">
              <h6>Follow me on:</h6>
              <BiLogoInstagram className="icon instagram" />
              <BiLogoPinterestAlt className="icon pinterest" />
              <BiLogoLinkedin className="icon linkedin" />
            </div>
          </div>
        </div>
        <div className="dots">
        {Array.from({ length: numberOfItems }, (_, index) => (
          <div className="dot"></div>
        ))}
        <div className="image">
          <Fingerprint/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
