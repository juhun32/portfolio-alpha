import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Skills</h2>
      <ul className="skills-list">
        <li className="skills-list-item">AI / ML, Data Science, Full-stack development</li>
        <li className="skills-list-item">Programming Languages : Python, Java, SQL, HTML, CSS, JavaScript</li>
        <li className="skills-list-item">Full-stack: Pandas, React, Flask, PostgreSQL</li>
        {/* <li className="skills-list-item">TensorFlow, PyTorch</li> */}
        <li className="skills-list-item">Data Visualization</li>
        {/* <li className="skills-list-item">Cloud Computing</li> */}
        <li className="skills-list-item">Git, Anaconda3, VS Code, LaTeX, Eclipse, MS Office</li>
      </ul>
    </section>
  );
};

export default Skills;