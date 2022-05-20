import React from "react";
import "./Hospital-sect.css";

function HospitalSect() {
  return (
    <div className="hos-sect">
      <div className="grid">
        <img src="/images/general.png" alt="" />
        <h3>General Doctor</h3>
      </div>
      <div className="grid">
        <img src="/images/psychiatry.png" alt="" />
        <h3>Psychiatry</h3>
      </div>
      <div className="grid">
        <img src="/images/dentist.png" alt="" />
        <h3>Dentist</h3>
      </div>
      <div className="grid">
        <img src="/images/baby.png" alt="" />
        <h3>Paediatrics</h3>
      </div>
      <div className="grid">
        <img src="/images/medicine.png" alt="" />
        <h3>Medicine</h3>
      </div>
      <div className="grid">
        <img src="/images/pulmonology.png" alt="" />
        <h3>Pulmonology</h3>
      </div>
    </div>
  );
}

export default HospitalSect;
