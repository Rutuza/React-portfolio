import React from 'react';

function Experience() {
  return (
    <div className='exp-container'>
    <div className='head'>
        <h3 className='title'>Experience</h3>
        <div className="line"></div>
    </div>
    <div className='exp-panel'>
        <div className="std">
            <div className='year'><b>01Jul - 31Sep '23</b></div>
            <div className='intern-type'>
                <h3>Frontend Developer Intern</h3>
                <div className='grade'>
                    Collaborated with the front-end development team to implement responsive and user-friendly web interfaces. Assisted in converting wireframes and designs into functional web components using HTML, CSS, and JavaScript. Gained hands-on experience in optimizing website performance and ensuring cross-browser compatibility.
                </div>
            </div>
        </div>
        <div className="std">
            <div className='year'><b>01Jul - 05Aug '23</b></div>
            <div className='intern-type'>
                <h3>Web Designing intern</h3>
                <div className='grade'>
                    Collaborated with the design team to create visually appealing and intuitive website layouts. Utilized HTML and CSS to implement responsive designs that enhance user experience. Gained insights into user-centered design principles and design thinking methodologies.
                </div>
            </div>
        </div>
        <div className="std">
            <div className='year'><b>Present</b></div>
            <div className='intern-type'>
                <h3>MERN Stack Development Intern</h3>
                <div className='grade'>
                    Worked on building web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Developed RESTful APIs and integrated them with the frontend components. Contributed to database design, data modeling, and efficient data storage using MongoDB.
                </div>
            </div>
        </div>
    </div>
    
    
</div>
  );
}

export default Experience;
