import React, { useState } from "react";
import details from "../Details"; 
import Education from "./Education";

function EducationBlock() {
    const [education, setEducation] = useState(details.educationDetails);

    return (
        <div>
        <h2 id="Education">Education</h2>
        {education.map((edu, index) => (
          <Education 
            key={index}
            degree={edu.degree}
            institution={edu.institution}
            duration={edu.duration}
            percentage={edu.percentage}
            year={edu.yearOfCompletion}
          />
        ))}
      </div>
    )
}

export default EducationBlock;