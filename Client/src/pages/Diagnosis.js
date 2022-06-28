import React, { useState } from "react";
import "./DoctorDash";
import "./Diagnosis.css";
import axios from "axios";

function Diagnosis() {
  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const initialState = Object.freeze({
    doctorName: "",
    Concerns: "",
    date: "",
    Symptoms: "",
  });
  const [formData, setFormData] = useState(initialState);
  console.log(formData);

  // useEffect(() => {
  //   fetchDoctor();
  // }, []);

  // const fetchDoctor = () => {
  //   axios.get("http://127.0.0.1:8000/api/doctorname").then((res) => {
  //     setdoctorName(res.data);
  //   });
  // };
  return (
    <div className="dash">
      <nav>
        <div className="logo">HMS</div>
        <div className="bars">bars</div>
      </nav>
      <div className="diagnosis-container">
        <div className="diagnosis-container-1">
          <div className="diagnosis">
            <h1>Diagnosis</h1>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={HandleChange}
            ></textarea>
          </div>
          <div className="Prescription">
            <h1>Prescription</h1>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={HandleChange}
            ></textarea>
          </div>
          <div className="send">
            <button className="btn-send">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diagnosis;
