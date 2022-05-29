import React, { useState,useEffect } from "react";
import "./DoctorDash";
import "./ScheduleAppt.css";
import axios from "axios";

function ScheduleAppt() {

  const [ doctorName, setdoctorName] = useState()
  
  const hello = doctorName && doctorName ? doctorName.map((item) => {
    console.log(item.firstName);
    <option >{item.firstName}</option>
  }): <option value="0">No Doctor Available</option>
  




useEffect(() => {
fetchDoctor()
},[])


const fetchDoctor = async () => {
  const res =await axios.get("http://127.0.0.1:8000/api/doctorname");
  console.log(res);
  const json = res.data;
  console.log(json);
  setdoctorName(json)
}


  return (
    <div>
      <nav>
        <div className="logo">HMS</div>
        <div className="bars">bars</div>
      </nav>
      <div className="schedule">
        <form action="">
        <select name="" id="">
            {hello}
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
