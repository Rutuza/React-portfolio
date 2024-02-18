import React from "react";
import Navbar from "../components/Navbar";
import sparkle from "../Assets/SVG/sparkle.svg";


function SkillsPage() {
  return (
    <div id="skills">
      {/* <Navbar></Navbar> */}
      <center className="pagename">Skills</center>
      <div className="container">
        <div className="sk-para1">
          <h1 className="paragraph-head">My creative skills and knowledge in technology</h1>

          <p className="sk-para-desc">
          As a Frontend developer and UI/UX Designer, I bring forth a dynamic skill set honed through [years of experience/relevant training]. Proficient in HTML5, CSS3, SASS, ReactJS, Database, I have consistently demonstrated an ability to [highlight key accomplishments or how these skills were applied]. My expertise spans [specific areas or industries], allowing me to [mention how your skills contribute to solving problems or creating value]. With a focus on [specific strengths or unique qualities], I strive to [mention your goals or how you aim to apply these skills in future endeavors]. Below I have mentioned some of my major skills.
          </p>
        </div>
        <div className="sparkle-emoji">
          <img src={sparkle} alt="" srcset="" />
        </div>
      </div>


    </div>
  );
}

export default SkillsPage;
