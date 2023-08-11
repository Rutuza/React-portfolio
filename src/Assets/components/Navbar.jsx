import React from 'react';

function Navbar() {
  return (
    <header>
        <div className="nav">
            <div className="nav-content">
                <div className="logo"></div>
                
                <div className="menu-ele">
                    <div className="elements">
                        <ul className="ele">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">Play</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="bars">-</div>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Navbar;
