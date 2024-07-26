import React from "react";
import details from "../Details"; 
import Sections from "./Section";
import EducationBlock from "./EducationBlock";
import CourseBlock from "./CourseBlock";
import ProjectBlock from "./ProjectBlock";
import SkillsBlock from "./SkillsBlock";
import Extras from "./Extras";
import Other from "./Other";

function SectionBlock() {
    return (
        <div>
          <Sections
            name={details.name}
            degree={details.degree}
            domain={details.domain}
          />
          <EducationBlock />
          <CourseBlock />
          <ProjectBlock />
          <SkillsBlock />
          <Extras />
          <Other />
        </div>
      );
}

export default SectionBlock;