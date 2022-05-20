import React from "react";
import "./Consultation.css";
// import { Link } from "react-router-dom";

function Consultation() {
  return (
    <div className="consultation">
      <div className="free-consult">
        <i className="fa-"></i>
        <div className="free">
          <h2>Free Online Consultation</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do</p>
        </div>
      </div>
      <div className="btn-free">
        <button className="btn1">Make Appointment</button>
        {/* <Link
          to="/patient-dash"
          // onClick={changeLink}
        ></Link> */}

        <button className="btn2">
          All specialist
          <span>
            <i></i>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Consultation;
