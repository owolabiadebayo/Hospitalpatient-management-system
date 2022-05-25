import React from "react";
import "./PatientHistory.css";

function PatientHistory() {
  return (
    <div className="dash">
      <nav>
        <div className="logo">HMS</div>
        <div className="bars">bars</div>
      </nav>
      <div className="patient-1">
        <div className="section-1">
          <div>
            <p>Name</p>
            <p>Name</p>
            <p>Name</p>
            <p>Name</p>
            <p>Name</p>
          </div>
          <div>
            <p>Ramesh</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
          </div>
          <div>
            <p>email</p>
            <p>email</p>
          </div>
          <div>
            <p>Ramesh@gmail.com</p>
            <p>Ramesh</p>
          </div>
        </div>
        <div className="section-2">
          <div>
            <p>Date</p>
            <p>Name</p>
            <p>Name</p>
            <p>Name</p>
          </div>
          <div>
            <p>Ramesh</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
          </div>
          <div>
            <p>email</p>
            <p>email</p>
          </div>
          <div>
            <p>hammed@gmail.com</p>
            <p>Ramesh</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientHistory;
