import React from "react";
import gimpo from "../img/gimpo.jpg";
import gmu from "../img/gmu.png";
import codepath from "../img/codepath.png";
import himedia from "../img/himedia.png";
import english from "../img/english.png";
import "../css/Experience.css";

const Experience = () => {
  return (
    <section className="experience">
      {/* <div className="experience-container">
        <div className="experience-list"> */}
      {/* <div className="experience-content"> */}
      <div className="experience-grid">
        <div className="experience-left-column experience-grid">
          <div className="experience-title">
            <img src={gmu} alt="gmu logo" />
            <p className="job-title">Volunteer</p>
            <p className="date">November 2024</p>
          </div>
        </div>

        <div className="experience-left-column experience-grid">
          <div className="experience-title">
            <img src={gmu} alt="gmu logo" />
            <p className="job-title">Participant</p>
            <p className="date">October 2024</p>
          </div>
        </div>

        <div className="experience-left-column experience-grid">
          <div className="experience-title">
            <img src={codepath} alt="codepath logo" />
            <p className="job-title">Student</p>
            <p className="date">May 2024 – August 2024</p>
          </div>
        </div>

        <div className="experience-left-column experience-grid">
          <div className="experience-title">
            <img src={english} alt="english logo" />
            <p className="job-title">English Instructor</p>
            <p className="date">July 2024 – August 2024</p>
          </div>
        </div>

        <div className="experience-left-column experience-grid">
          <div className="experience-title">
            <img src={himedia} alt="himedia logo" />
            <p className="job-title">Apprentice</p>
            <p className="date">January 2023 – April 2023</p>
          </div>
        </div>

        <div className="experience-left-column experience-grid">
          <div className="experience-title">
            <img src={gimpo} alt="gimpo logo" />
            <p className="job-title">Club President</p>
            <p className="date">August 2020 – March 2022</p>
          </div>
        </div>

        <div className="experience-left-column experience-grid">
          <div className="experience-title">
            <img src={gimpo} alt="gimpo logo" />
            <p className="job-title">Student Researcher</p>
            <p className="date">March 2021 – November 2021</p>
          </div>
        </div>

        <div className="experience-middle-column vertical-line"></div>

        <div className="experience-right-column experience-detail">
          <p className="event-title">InsightLegi DataStorm 2024</p>
          <p className="event-desc">
            Managed logistics, participant data and provided technical support
            for participants and mentors for a 36-hour hackathon
            event.Contributed to social media promotion and event planning,
            resulting in 1000+ views.
          </p>
        </div>

        <div className="experience-right-column experience-detail">
          <p className="event-title">PatriotHacks 2024</p>
          <p className="event-desc">
            Participated in a 36-hour hackathon event, collaborated with 3 team
            members to develop a React web application that provides information
            about government spending of tax revenue on incarceration, and
            solutions to reduce spending.
          </p>
        </div>

        <div className="experience-right-column experience-detail">
          <p className="event-title">
            CodePath Technical Interview Prep Course (TIP102 Intermediate Level)
          </p>
          <p className="event-desc">
            Improved problem-solving skills and understanding of data structures
            and algorithms. Enhanced soft skills in communication and analytical
            thinking by collaborating with 5 team members.
          </p>
        </div>

        <div className="experience-right-column experience-detail">
          <p className="event-title">21Cen. English Academy</p>
          <p className="event-desc">
            Provided one-on-one tutoring sessions to 14 high school students.
            Developed customized 10 lesson plans by addressing the specific
            needs and learning objectives of 14 individual students.
          </p>
        </div>

        <div className="experience-right-column experience-detail">
          <p className="event-title">
            Himedia Academy Backend Developer Apprenticeship
          </p>
          <p className="event-desc">
            Backend development training course consisted of 10 participants.
            Developed foundational skills in Java development, object-oriented
            programming, data structures, and Oracle DBMS. Managed team projects
            by utilizing Git and Notion to enhance collaboration and track
            progress.
          </p>
        </div>

        <div className="experience-right-column experience-detail">
          <p className="event-title">Software Developer Student Club</p>
          <p className="event-desc">
            Managed 36 club members ensuring smooth progress of their personal
            projects. Organized two successful project demonstration event for 5
            club members. Invited a published author in artificial intelligence
            for a Q&A session with club members.
          </p>
        </div>

        <div className="experience-right-column experience-detail">
          <p className="event-title">Motion Detection AI Research Program</p>
          <p className="event-desc">
            Developed and tested a Python AI powered motion detection program
            using MediaPipe model. Authored a scientific research paper griding
            the project methodology, results, and implications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
