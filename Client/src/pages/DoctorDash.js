import React from "react";
import "./DoctorDash.css";
import { Link } from "react-router-dom";

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
            <li>
              <Link to="/Doctor-view">Appointments</Link>
            </li>
            <li>
              <Link to="/View-patient">View Patient History</Link>
            </li>
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
