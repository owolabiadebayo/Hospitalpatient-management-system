import React from "react";
import "./DoctorDash.css";
import { Link } from "react-router-dom";

function PatientDash() {
  return (
    <div className="dash">
      <nav>
        <div className="logo">HMS</div>
        <div className="bars">bars</div>
      </nav>
      <div className="section">
        <div className="sidebar">
          <ul className="side-links">
            <li>View Medical History</li>
            <li>
              <Link to="/Patient-view">View Appointments</Link>
            </li>
            <li>
              <Link to="/Schedule">Schedule Appointments</Link>
            </li>

            <li>Settings</li>
            <li>Sign Out</li>
          </ul>
        </div>
        <div className="dashboard">
          <h1>Hello Patient</h1>
        </div>
      </div>
    </div>
  );
}

export default PatientDash;
