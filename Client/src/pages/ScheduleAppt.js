import React from "react";
import "./DoctorDash";
import "./ScheduleAppt.css";

function ScheduleAppt() {
  return (
    <div>
      <nav>
        <div className="logo">HMS</div>
        <div className="bars">bars</div>
      </nav>
      <div className="schedule">
        <form action="">
          <select name="" id="">
            <option value="0">John Dada</option>
            <option value="1">John Dada</option>
            <option value="2">John Dada</option>
            <option value="33">John Dada</option>
          </select>
          <p>17/10/2020</p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter your concerns"
          ></textarea>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter your symtoms"
          ></textarea>
          <button>Attempt your schedule</button>
        </form>
      </div>
    </div>
  );
}

export default ScheduleAppt;
