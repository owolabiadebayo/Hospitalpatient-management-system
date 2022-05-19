import React from "react";
import "./Login.css";
import "./DoctorDash.css";

function SignUp() {
  return (
    <div>
      <div className="login-container">
        <nav>
          <div className="logo">HMS</div>
          <div className="bars">bars</div>
        </nav>

        <div className="login">
          <label htmlFor="">Email</label>
          <input type="email" />

          <label htmlFor="">Password</label>
          <input type="password" />
          <div className="check">
            <input type="checkbox" name="" id="" /> I'm a doctor
          </div>
          <button type="submit">Login</button>
          <button type="submit">Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
