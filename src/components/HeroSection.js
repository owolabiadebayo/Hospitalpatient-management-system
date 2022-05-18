import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero">
      <h1>
        Consultation With Our Doctor Anywhere, Anytime by Phone or Video Call
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit
      </p>
      <div className="btns">
        <button className="btn">Get Started</button>
        <button className="btn-1">Watch Intro</button>
      </div>
      <div className="hero-img">
        <img src="/images/doctor-call.jpg" alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
