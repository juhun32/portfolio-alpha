import React from "react";
import "../css/Home.css";

import Skills from "../components/Skills";

// images
import home from "../img/home.png";

const Home = ({ isDarkMode }) => {
  return (
    <div>
      <section className={isDarkMode ? "intro-dark-mode" : "intro"}>
        <div className="intro-grid">
          <div className="left-column intro-main">
            DMV-based ML/Software Engineer and "just a chill guy".
          </div>
          <div className="left-column intro-sub">
            Juhun is currently a student of George Mason University, studying
            computer science and artificial intelligence. He is interested in
            machine learning application in healthcare industry.
          </div>
          <div className="left-column intro-email">
            <div className="email">Contact: juhunpark32@gmail.com</div>
            <a href="mailto:juhunpark32@gmail.com" className="email-button">
              Send Email
            </a>
          </div>
          <div className="right-column intro-picture">
            <img
              className="intro-img"
              src={home}
              alt="a picture of yourself"
              class="intro-img"
            />
            <div className="right-column intro-img-text">
              ^ ( this is my beautiful girlfriend's favorite picture of me )
            </div>
          </div>
        </div>
      </section>
      {/* <div className="editor">vscode</div> */}
      <div className="skills">
        <Skills isDarkMode={isDarkMode}/>
      </div>
    </div>
  );
};

export default Home;
