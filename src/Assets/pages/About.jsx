import React from 'react';
import Profile from '../components/Profile';
import Aboutme from '../components/Aboutme';
// import DownloadCV from '../components/DownloadCV';
import Education from '../components/Education';
import Experience from '../components/Experience';

function About() {
  return (
    <div>
        <Profile/>
        <Aboutme/>
        <Education/>
        <Experience/>
    </div>
  );
}

export default About;
