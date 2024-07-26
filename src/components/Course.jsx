import React from 'react';

function Course({ title, institution, duration, description, topics, benefits, images }) {
  return (
    <div className="course">
      <h3>{title}</h3>
      <p><strong>Institution:</strong> {institution}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p>{description}</p>
      <div className="course-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${title} image ${index + 1}`} className="course-image" />
        ))}
      </div>
      <p><strong>Benefits:</strong> {benefits}</p>
    </div>
  );
}

export default Course;