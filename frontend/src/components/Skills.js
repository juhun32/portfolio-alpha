import React from "react";
import "../css/Skills.css";

const Skills = ({isDarkMode}) => {
  return (
    <section className={isDarkMode ? "skills-dark-mode" : "skills"}>
      <div className="skills-container">
        <div className="skills-title">Skills<div className="horizontal-line"></div></div>
        <ul className="skills-list">
          <li className="skills-list-item">
            AI / ML, Data Science, Full-stack development
          </li>
          <li className="skills-list-item">
            Programming Languages : Python, Java, SQL, HTML, CSS, JavaScript
          </li>
          <li className="skills-list-item">
            Full-stack: Pandas, React, Flask, PostgreSQL
          </li>
          {/* <li className="skills-list-item">TensorFlow, PyTorch</li> */}
          <li className="skills-list-item">Data Visualization</li>
          {/* <li className="skills-list-item">Cloud Computing</li> */}
          <li className="skills-list-item">
            Git, Anaconda3, VS Code, LaTeX, Eclipse, MS Office
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
