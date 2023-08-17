import React from 'react';

function Experience() {
  return (
    <div className='exp-container'>
    <div className='head'>
        <h3 className='title'>Experience</h3>
        <div className="line"></div>
    </div>
    <div className='exp-panel'>
        <div className="row">
            <div className='year'><b>01Jul - 31Sep '23</b></div>
            <div className='intern-type'>
                <h3>Frontend Development</h3>
                <div></div>
            </div>
        </div>
        <div className="row">
            <div className='year'><b>01Jul - 05Aug '23</b></div>
            <div className='intern-type'>
                <h3>Web Designing intern</h3>
                <div></div>
            </div>
        </div>
        <div className="row">
            <div className='year'><b>Present</b></div>
            <div className='intern-type'>
                <h3>Fullstack MERN intern</h3>
                <div></div>
            </div>
        </div>
    </div>
    
    
</div>
  );
}

export default Experience;
