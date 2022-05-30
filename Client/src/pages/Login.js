import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

function Login() {
  return (
    <div>
      <nav>
        <div className="logo">HMS</div>
        <div className="bars">bars</div>
      </nav>
      <div className="card">
        <Link to="/DoctorLogin" className="doctor-card">
          <h1>Doctor</h1>
        </Link>

        <Link to="/PatientLogin" className="patient-card">
          <h1>Patient</h1>
        </Link>
      </div>
    </div>
  );
}

export default Login;
