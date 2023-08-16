import React from 'react';

function Education() {
  return (
    <div className='edu-container'>
        <div className='head'>
            <h3 className='title'>Education</h3>
            <div className="line"></div>
        </div>
        <div className='edu-panel'>
            <div className="std">
                <div className="year"><b>2018</b></div>
                <div className="school">
                    <h3>Higher Secondary School</h3>
                    <div className='grade'>
                        I received a divisional grade of 72.4% for my matriculation in the 2017&#8208;2018 school year at Ryan International School, Bhopal, Madhya Pradesh.
                    </div>
                    
                </div>
            </div>
            <div className="std">
                <div className="year"><b>2020</b></div>
                <div className="school">
                    <h3>Senior Secondary School</h3>
                    <div className='grade'>
                        I received a divisional grade of 78.3% for my +2 in the 2019&#8208;2020 school year at RD Public School, Betul, Madhya Pradesh.
                    </div>
                    
                </div>
            </div>

            <div className="std">
                <div className="year"><b>2020</b></div>
                <div className="school">
                    <h3>Under Graduation</h3>
                    <div className='grade'>
                        Pursuing Bachelor's of Technology from Amity University Madhya Pradesh Gwalior
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    </div>
  );
}

export default Education;
