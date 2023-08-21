import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function Navbar() {
  return (
    <header>
        <Router>
            <nav className='nav'>
                <div className="nav-content">
                    <div className="logo"></div>
                    
                    <div className="menu-ele">
                        <div className="elements">
                            <ul className="ele">
                                <a className='home'>Home</a>
                                <a className='about'>About</a>
                                <a className='skills'>Skills</a>
                                <a className='work'>Work</a>
                                <a className='play'>Play</a>
                                <a className='contact'>Contact</a>
                            </ul>
                        </div>
                        <div className="bars">-</div>
                    </div>
                </div>
            </nav>
        </Router>
    </header>
  );
}

export default Navbar;
