import React from "react";
import "./Login.css";
import "./DoctorDash.css";

function Login() {
  return (
    <div className="login-container">
      <nav>
        <div className="logo">HMS</div>
        <div className="bars">bars</div>
      </nav>

      <div className="login">
        <h3>Doctors Registration Form</h3>
        <label htmlFor="">First Name</label>
        <input type="text" />
        <label htmlFor="">Last Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Schedule No</label>
        <input type="text" />
        <label htmlFor="">Gender</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default Login;
