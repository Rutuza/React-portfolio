import React from 'react';
import Navbar from '../components/Navbar';

function SkillsPage() {
  return (
    <div id='skills'>
      <Navbar></Navbar>
      <div className='skills-para-one'>
        <h1>My creative skills and knowledge in technology</h1>
        <p>As a Frontend developer and UI/UX Designer, I bring forth a dynamic skill set honed through [years of experience/relevant training]. Proficient in HTML5, CSS3, SASS, ReactJS, Database, I have consistently demonstrated an ability to [highlight key accomplishments or how these skills were applied]. My expertise spans [specific areas or industries], allowing me to [mention how your skills contribute to solving problems or creating value]. With a focus on [specific strengths or unique qualities], I strive to [mention your goals or how you aim to apply these skills in future endeavors]. Below I have mentioned some of my major skills.</p>
      </div>

      <section className="skills-dark-bg">
        <div className='my-skills'>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>UI/UX</li>
            <li>SASS</li>
            <li>sdjfk</li>
            <li>GRaphic desgin</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default SkillsPage;
