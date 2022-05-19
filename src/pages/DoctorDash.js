import React from "react";
import "./DoctorDash.css";

function DoctorDash() {
  return (
    <div className="dash">
      <nav>
        <div className="logo">HMS</div>
        <div className="bars">bars</div>
      </nav>
      <div className="section">
        <div className="sidebar">
          <ul className="side-links">
            <li> Appointments</li>
            <li>View Patients</li>
            <li>Settings</li>
            <li>Sign Out</li>
          </ul>
        </div>
        <div className="dashboard">
          <h1>Hello Doctor</h1>
        </div>
      </div>
    </div>
  );
}

export default DoctorDash;
