import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import circles from "../Assets/SVG/circles.svg";
import Navbar from '../components/Navbar';


function Homepage2() {
    const [text] = useTypewriter({
        words: ['Jyotika Dalal', 'Developer', 'UI/UX Designer', 'Photographer', 'Eppigrammatist', 'Senior at Amity University'],
        loop: {},
        typeSpeed: 122,
    });

  return (
    <div id='home'>
        <div>
            <Navbar/>
            <div id="inn-container">
                <div className='lhs'>
                    <h1>Hi <br /> I am {' '}
                        <span>
                            {text}
                        </span>
                    <span id='cursor'><Cursor/></span></h1>
                    <h5 className='quote'>Design and code what you think</h5>
                </div>

                <div className='rhs'>
                    <img src={circles} alt="" srcset="" />
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Homepage2;
