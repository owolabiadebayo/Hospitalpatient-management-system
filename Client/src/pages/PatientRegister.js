import React, { useState } from "react";
import "./Login.css";
import "./DoctorDash.css";
import axios from "axios";

function Patientregister() {
  const initialState = Object.freeze({
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    conditions: "",
    gender: "",
    surgeries: "",
    medications: "",
  });
  const [formData, setFormData] = useState(initialState);
  console.log(formData);

  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://127.0.0.1:8000/api/register/", formData)
        .then((res) => {
          console.log(res.data);
        });
      window.location.href = "/doctor-login";
    } catch (err) {
      console.log(err);
      window.location.href = "/doctor-signup";
    }
  };

  return (
    <div className="login-container">
      <nav>
        <div className="logo">HMS</div>
        <div className="bars">bars</div>
      </nav>
      <form className="login-form" onSubmit={HandleSubmit}>
        <div className="login">
          <h3>Patient Registration Form</h3>
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={HandleChange}
          />
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={HandleChange}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={HandleChange}
          />
          <label htmlFor="">Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={HandleChange}
          />
          <label htmlFor="">Medical History - Conditions</label>
          <input
            type="text"
            name="conditions"
            value={formData.conditions}
            onChange={HandleChange}
          />
          <label htmlFor="">Medical History - Surgeries</label>
          <input
            type="text"
            name="Surgeries"
            value={formData.surgeries}
            onChange={HandleChange}
          />
          <label htmlFor="">Medical History - Medications</label>
          <input
            type="text"
            name="medications"
            value={formData.medications}
            onChange={HandleChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Patientregister;
