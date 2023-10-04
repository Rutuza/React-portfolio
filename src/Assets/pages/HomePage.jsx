import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Fingerprint } from "../img/icon";
import Loading from '../components/Loading'
import {
  BiLogoInstagram,
  BiLogoPinterestAlt,
  BiLogoLinkedin,
} from "react-icons/bi";
function HomePage() {
  const [isLoading,setisLoading]=useState(false);
  const numberOfItems = 1000;
  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(true)
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {
        isLoading?
        <div>
        <Navbar />
      <div id="home">
        <div className="hero">
          <div className="heading">
            <h1>Hi</h1>
            <h1>I am JYOTIKA DALAL</h1>
            <h6>Design and code what you think</h6>
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
          <Fingerprint className='finger'/>
        </div>
        </div>
      </div>
        </div>
      :
        <Loading/>
      
      }
    </div>
  );
}

export default HomePage;
