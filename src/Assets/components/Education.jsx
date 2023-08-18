import React from 'react';

function Education() {
  return (
    <div className='edu-container'>
        <div className='head'>
            <h3 className='title'>Education</h3>
            <div className="line"></div>
        </div>
        <div class="education-section">
            <div className="row">
                <div className="year"><b>2017 - 2018</b></div>
                <div className="side-by-side">
                    <h3 className="intitute-name">Higher Secondary Education</h3>
                    <div className="grade-info">
                        I received a divisional grade of 72.4% for my matriculation in the 2017–2018 school year at Ryan International School, Bhopal, Madhya Pradesh.
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="year"><b>2019 - 2020</b></div>
                <div className="side-by-side">
                    <h3 className="intitute-name">Senior Secondary Education</h3>
                    <div className="grade-info">
                        I received a divisional grade of 78.3% for my +2 in the 2019–2020 school year at RD Public School, Betul, Madhya Pradesh.
                    </div>
                </div>
            </div>
            <div className="row">
                <h3 className="year"><b>2020 - Present</b></h3>
                <div className="side-by-side">
                    <h3 className="intitute-name">Under Graduation</h3>
                    <div className="grade-info">
                        Pursuing B. Tech. CSE at Amity University in Madhya Pradesh with a cumulative GPA of 7.69 as of the sixth semester.
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default Education;
