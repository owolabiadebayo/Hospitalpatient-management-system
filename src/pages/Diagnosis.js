import React from "react";
import "./DoctorDash";
import "./Diagnosis.css";

function Diagnosis() {
  return (
    <div className="dash">
      <nav>
        <div className="logo">HMS</div>
        <div className="bars">bars</div>
      </nav>
      <div className="diagnosis-container">
        <div className="diagnosis-container-1">
          <div className="diagnosis">
            <h1>Diagnosis</h1>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="Prescription">
            <h1>Prescription</h1>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="send">
            <button className="btn-send">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diagnosis;
