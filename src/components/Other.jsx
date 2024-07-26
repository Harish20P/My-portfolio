import React from "react"
import details from "../Details";

function Other() {
    return (
        <div className="other">
  <div className="other-section">
    <h1>Others</h1>
    <div className="card-section">
        <div className="card">
      <h2>Languages Known</h2>
      <ul>
        {details.languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </div>

    <div className="card">
      <h2>Hobbies</h2>
      <ul>
        {details.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>

    <div className="card">
      <h2>Qualities</h2>
      <ul>
        {details.qualities.map((quality, index) => (
          <li key={index}>{quality}</li>
        ))}
      </ul>
    </div></div>
  </div>
</div>
    );
}

export default Other;