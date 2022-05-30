import React from "react";
import "./DoctorView.css";

function DoctorView() {
  return (
    <div>
      <nav>
        <div className="logo">HMS</div>
        <div className="bars">bars</div>
      </nav>
      <div className="view">
        <div className="section-1">
          <div>
            <p>Date of Appointment</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </div>
          <div>
            <p>Start-time</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
          </div>
          <div>
            <p>End-time</p>
            <p>email</p>
            <p>email</p>
            <p>email</p>
            <p>email</p>
          </div>
          <div>
            <p>Start time</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
          </div>
          <div>
            <p>Concerns</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
          </div>
          <div>
            <p>Symptoms</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
          </div>
          <div>
            <p>Status</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
            <p>Ramesh</p>
          </div>
          <div className="view-flex">
            <p>Diagnosis</p>
            <button className="btn-dr-view">See Diagnosis</button>
            <button className="btn-dr-view">See Diagnosis</button>
            <button className="btn-dr-view">See Diagnosis</button>
            <button className="btn-dr-view">See Diagnosis</button>
          </div>
          <div className="view-flex">
            <p>Cancel view</p>
            <button className="btn-dr-view">Cancel</button>
            <button className="btn-dr-view">Cancel</button>
            <button className="btn-dr-view">Cancel</button>
            <button className="btn-dr-view">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorView;
