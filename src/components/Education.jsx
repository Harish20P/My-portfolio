import React from "react";

function Education({ degree, institution, duration, percentage, year }) {
  return (
    <div className="education-item">
      <h3>{degree}</h3>
      <p>{institution}</p>
      <p>{duration}</p>
      {percentage && <p>Percentage: {percentage}</p>}
      {year && <p>Year of Completion: {year}</p>}
    </div>
  );
}

export default Education;
