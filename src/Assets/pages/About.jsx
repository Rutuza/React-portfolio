import React from 'react';
import Profile from '../components/Profile';
import Aboutme from '../components/Aboutme';
import DownloadCV from '../components/DownloadCV';
import Qualifications from '../components/Qualifications';

function About() {
  return (
    <div>
        <Profile/>
        <Aboutme/>
        <Qualifications/>
    </div>
  );
}

export default About;
