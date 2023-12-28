import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
// import homebg from '../SVG/homepage bg.svg';
import Navbar from '../components/Navbar';
function Homepage2() {
    const {text} = useTypewriter({
        words: ['Jyotika Dalal', 'Developer', 'UI/UX Designer', 'Photographer', 'Eppigrammatist'],
        loop: {},
        typeSpeed: 120,
    })
  return (
    <div id='home'>
        <div>
            <Navbar/>
            <div id="inn-container">
                <div className='lhs'>
                    <h1>Hi <br /> I am <span id='text'>{text}</span>
                    <span id='cursor'><Cursor cursorStyle='|'/></span></h1>
                    <h5>Design and code what you think</h5>
                </div>
                <div className='rhs'></div>
            </div>
        </div>
      
    </div>
  );
}

export default Homepage2;
