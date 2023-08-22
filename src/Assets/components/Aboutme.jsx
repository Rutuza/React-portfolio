import React from 'react';

function Aboutme() {
  return (
    <div className='ab-container'>
        <div className='ab-panel'>
            <div className="profile"></div>
            
            <div className='ek-k-niche-ek'>

                <div className="comma">"</div> 
                <div className="self-text">
                    Mauris et purus sit amet nulla rutrum aliquet. Morbi pellentesque odio ipsum, at sodales neque luctus vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut ut nisl velit. Sed eget felis nibh. Fusce faucibus eros dolor, quis sagittis nisi fringilla id. Vivamus eu nulla non risus cursus rutrum. Nunc hendrerit posuere lectus sit amet malesuada. Mauris et purus sit amet nulla rutrum aliquet. Morbi pellentesque odio ipsum, at sodales neque luctus vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut ut nisl velit. Sed eget felis nibh. Fusce faucibus eros dolor, quis sagittis nisi fringilla id. Vivamus eu nulla non risus cursus rutrum. Nunc hendrerit posuere lectus sit amet malesuada. 
                </div>

                <div className="personal-info">
                    <div className="info"><b>Name: </b>Jyotika Dalal</div>
                    <div className="info"><b>Phone: </b>(+91) 8319278208</div>
                    <div className="info"><b>Email: </b>dala.jyotika05@gmail.com</div>
                    <div className="info"><b>Social Media: </b>linked in</div>
                </div>

                <button className='dwn_cv'><div>Download CV</div></button>
            
         </div>
    </div> 
{/* Education */}
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
{/* Experience section starts */}
<div className='exp-container'>
        <div className='head'>
            <h3 className='title'>Experience</h3>
            <div className="line"></div>
        </div>
        <div class="experience-section">
            <div className="row">
                <div className="year"><b>01Jul - 31Sep '22</b></div>
                <div className="side-by-side">
                    <h3 className="intern-type">Frontend Web Development Intern</h3>
                    <div className="grade-info">
                        Collaborated with the front-end development team to implement responsive and user-friendly web interfaces. Assisted in converting wireframes and designs into functional web components using HTML, CSS, and JavaScript. Gained hands-on experience in optimizing website performance and ensuring cross-browser compatibility.
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="year"><b>01Jul - 05Aug '23</b></div>
                <div className="side-by-side">
                    <h3 className="intern-type">Web Designer Intern</h3>
                    <div className="grade-info">
                        Collaborated with the design team to create visually appealing and intuitive website layouts. Utilized HTML and CSS to implement responsive designs that enhance user experience. Gained insights into user-centered design principles and design thinking methodologies.

                    </div>
                </div>
            </div>
            <div className="row">
                <h3 className="year"><b>Present</b></h3>
                <div className="side-by-side">
                    <h3 className="intern-type">MERN Stack Development Intern</h3>
                    <div className="grade-info">
                        Worked on building web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Developed RESTful APIs and integrated them with the frontend components. Contributed to database design, data modeling, and efficient data storage using MongoDB.

                    </div>
                </div>
            </div>
    </div>
</div>
    </div>
  );
}

export default Aboutme;
