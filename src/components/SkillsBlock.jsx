import React from "react";
import details from "../Details";
import Skills from "./skill";

function SkillsBlock() {
    return (
        <div id="Skills" className="skills-container">
            <h1>My Skills</h1>
            <Skills skills={details.skills} />
          </div>
    )
}

export default SkillsBlock;