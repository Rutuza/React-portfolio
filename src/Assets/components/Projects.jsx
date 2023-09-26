import React from "react";
import workbg from "../SVG/workbg.svg";
function Projects() {
  return (
    <div className="wrk-container">
      <img className="workbg" src={workbg} alt="" />
      <div className="left-work-headline">Insights and inception of Design</div>
      <div className="dt-container">
        <div className="design-thinking-headline">
          The power of design thinking
        </div>
        <div className="subtext-1">
          The strength of design thinking is found in its capacity to foster
          creativity, human-centered solutions, and efficient problem-solving in
          a variety of contexts. It's a way of thinking that prioritizes
          collaboration, empathy, and experimentation, which makes it a useful
          strategy in the complicated and quickly changing world of today.
        </div>
      </div>

      <div className="projects">
        <div className="cards"></div>
        <div className="cards"></div>
        <div className="cards"></div>
        <div className="cards"></div>
      </div>
      
    </div>
  );
}

export default Projects;
