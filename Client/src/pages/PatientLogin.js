import React, { useState } from "react";
import "./Login.css";
import "./DoctorDash.css";
import axios from "axios";
import { Link } from "react-router-dom";

function DoctorLogin() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

 	const HandleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
 	const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://127.0.0.1:8000/api/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
       window.location.href = "/patient-dash";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };


  return (
    <>
      <div className="login-container">
        <nav>
          <div className="logo">HMS</div>
          <div className="bars">bars</div>
        </nav>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="login">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              required
              onChange={HandleChange}
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              required
              onChange={HandleChange}
            />
            {error && <div className="error_msg">{error}</div>}
            <button type="submit">Login</button>
            <div>
              <h1>New Here ?</h1>
              <Link to="/Doctor-signup">
                <button type="button">Create Account</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default DoctorLogin;
