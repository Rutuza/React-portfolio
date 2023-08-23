import React from 'react';

function SkillSet() {
  return (
    <div className='sk-container'>
        <div className="sk-panel">
            <div className="skill-set">
                <div className='left'>
                    <div className="serial-no">01</div>
                    <div className="skill-name">Frontend</div>
                    <div className="desc">
                        The creation of visually appealing and engaging aspects for websites' front ends allows for direct user interaction.
                    </div>
                </div>
                <div className='right'>
                    <div className="col-1">
                        <div className="html">HTML5</div>
                        <div>JavaScript</div>
                    </div>
                    <div className="col-2">
                        <div>CSS</div>
                        <div>Sass</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SkillSet;
