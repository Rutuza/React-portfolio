import React from 'react';

function Navbar() {
  return (
    <header>
        
            <nav className='nav'>
                <div className="nav-content">
                    <div className="logo"></div>
                    
                    <div className="menu-ele">
                        <div className="elements">
                            <ul className="ele">
                                <a href='/' className='home'>Home</a>
                                <a href='/' className='about'>About</a>
                                <a href='/' className='skills'>Skills</a>
                                <a href='/' className='work'>Work</a>
                                <a href='/' className='play'>Play</a>
                                <a href='/' className='contact'>Contact</a>
                            </ul>
                        </div>
                        <div className="bars">-</div>
                    </div>
                </div>
            </nav>
       
    </header>
  );
}

export default Navbar;
