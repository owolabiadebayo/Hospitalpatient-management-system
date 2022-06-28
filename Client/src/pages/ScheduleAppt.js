import React, { useState, useEffect } from "react";
import "./DoctorDash";
import "./ScheduleAppt.css";
import axios from "axios";

function ScheduleAppt() {
  const [doctorName, setdoctorName] = useState();

  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const initialState = Object.freeze({
    doctorName: "",
    Concern: "",
    date: "",
    Symptoms: "",
  });
  const [formData, setFormData] = useState(initialState);
  console.log(formData);

  useEffect(() => {
    fetchDoctor();
  }, []);

  const fetchDoctor = () => {
    axios.get("http://127.0.0.1:8000/api/doctorname").then((res) => {
      setdoctorName(res.data);
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://127.0.0.1/api/scheduleappt");
  };

  return (
    <div>
      <nav>
        <div className="logo">HMS</div>
        <div className="bars">Bars</div>
      </nav>
      <div className="schedule">
        <form onSubmit={HandleSubmit}>
          <select class="form-select mb-5" aria-label="Default select example">
            <option selected>Doctors Available</option>
            {doctorName &&
              doctorName.map((doctor, index) => (
                <option key={index} value={index}>
                  {doctor.firstName + " " + doctor.lastName}
                </option>
              ))}
          </select>
          <label htmlFor="">Input Doctor Name</label>
          <input
            type="text"
            name="doctorName"
            value={formData.doctorName}
            onChange={HandleChange}
          />
          <label for="party" className="mt-3">
            Enter a date and time for your Schedule:
          </label>
          <input
            id="party"
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={HandleChange}
            className="mb-4"
          />
          <textarea
            name="Concerns"
            id=""
            cols="30"
            rows="10"
            value={formData.Concern}
            placeholder="Enter your concerns"
            onChange={HandleChange}
            className="mb-3"
          ></textarea>
          <textarea
            name="Symptoms"
            id=""
            cols="30"
            rows="10"
            placeholder="Enter your symptoms"
            value={formData.Symptoms}
            onChange={HandleChange}
            className="mb-3"
          ></textarea>
          <button>Attempt your schedule</button>
        </form>
      </div>
    </div>
  );
}

export default ScheduleAppt;
