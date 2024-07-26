import React from "react";
import details from "../Details";
import Course from "./Course";

function CourseBlock() {
    return (
        <div id="Courses" className="courses">
        <h2>Courses</h2>
        {details.courses.map((course, index) => (
          <Course 
            key={index}
            title={course.title}
            institution={course.institution}
            duration={course.duration}
            description={course.description}
            images={course.images}
            benefits={course.benefits}
          />
          ))}
        </div>
    )
}

export default CourseBlock;