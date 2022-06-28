import React, { useState } from "react";
import "./Login.css";
import "./DoctorDash.css";
import axios from "axios";

function DoctorRegister() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    scheduleNos: "",
    gender: "",
    password: "",
  });
  const [error, setError] = useState("");
  console.log(data);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://127.0.0.1:8000/api/register";
      const { data: res } = await axios.post(url, data);
      window.location.href = "/doctorlogin";
      console.log(res.message);
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
  // const HandleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     axios
  //       .post("http://127.0.0.1:8000/api/register", formData)
  //       .then((res) => {
  //         console.log(res.data);
  //       });
  //     window.location.href = "/doctorlogin";
  //   } catch (err) {
  //     console.log(err);
  //     window.location.href = "/doctor-signup";
  //   }
  // };

  return (
    <div className="login-container">
      <nav>
        <div className="logo">HMS</div>
        <div className="bars">bars</div>
      </nav>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login">
          <h3>Doctors Registration Form</h3>
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            required
            onChange={handleChange}
          />
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
            required
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            required
            onChange={handleChange}
          />
          <label htmlFor="">Schedule No</label>
          <input
            type="text"
            name="scheduleNos"
            value={data.scheduleNos}
            required
            onChange={handleChange}
          />
          <label htmlFor="">Gender</label>
          <input
            type="text"
            name="gender"
            value={data.gender}
            required
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            required
            onChange={handleChange}
          />
          {error && <div className="error_msg">{error}</div>}
          <button type="submit" className="green_btn">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default DoctorRegister;
