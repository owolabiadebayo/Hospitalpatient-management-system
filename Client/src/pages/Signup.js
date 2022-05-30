import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

function Signup() {
  return (
    <div>
      <nav>
        <div className="logo">HMS</div>
        <div className="bars">bars</div>
      </nav>
      <div className="card">
        <Link to="/Doctor-signup" className="doctor-card">
          {" "}
          <h1>Doctor</h1>
        </Link>
        <Link to="/Patient-register" className="patient-card">
          <h1>Patient</h1>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
