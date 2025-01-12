import React from "react";
import "../css/Skills.css";

const Skills = ({ isDarkMode }) => {
  return (
    <section className={isDarkMode ? "skills-dark-mode" : "skills"}>
      <div className="skills-container">
        <div className="skills-title">
          Skills<div className="horizontal-line"></div>
        </div>
        <ul className="skills-list">
          <li className="skills-list-item">
            Full-stack Development, Web Development, Machine Learning, Data
            Analysis, Database Management
          </li>
          <li className="skills-list-item">
            Programming Languages: Python, Java, SQL, HTML, CSS, JavaScript
          </li>
          <li className="skills-list-item">
            Frameworks: React.js, Flask, Bootstrap, Django, Pandas, Numpy,
            PostgreSQL, MediaPipe
          </li>
          <li className="skills-list-item">
            Technologies: Git, Linux, Docker, Firebase, GCP, Anaconda3, VS Code, LaTeX,
            Eclipse, MS Office
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
