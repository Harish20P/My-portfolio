import React from "react";

function ExtraBlock({extra}) {
  return (
    <section id="extra" className="extra-section">
      <h1>Extra Curricular Activities</h1>
      {Object.entries(extra).map(([key, value]) => (
        <div className="card" key={key}>
          <h2>{value.title}</h2>
          <h3>{value.organization}</h3>
          <ul>
            {value.roles ? value.roles.map((role, index) => (
              <li key={index}><strong>{role.role}:</strong> {role.description}</li>
            )) : value.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ExtraBlock;