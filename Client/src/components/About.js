import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about-container">
      <div className="about-img">
        <div className="img-1">
          <img src="/images/female-call.jpg" alt="" />
        </div>
        <div className="blank"></div>
        <div className="img-2">
          <img src="/images/female-call.jpg" alt="" />
        </div>
      </div>
      <div className="about-text">
        <h3>About Us</h3>
        <h1>We Provide Best Online Doctor Consultation For You</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="about-flex">
          <div className="about-doc">
            <h4>All Types of Doctors</h4>
            <p>Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo</p>
            <div>
              <h3>Save More Times</h3>
              <p>92%</p>
            </div>
            <div className="duration">
              <div className="duro">i</div>
            </div>
          </div>
          <div className="about-prescription">
            <h4>Get an E-Prescription</h4>
            <p>Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo</p>
            <div>
              <h3>Integrated Labs</h3>
              <p>89%</p>
            </div>
            <div className="duration">
              <div className="duro-2">i</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
