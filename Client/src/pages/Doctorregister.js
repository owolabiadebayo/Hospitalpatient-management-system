import React,{useState} from "react";
import "./Login.css";
import "./DoctorDash.css";
import axios from "axios";

function Login() {
  const initialState = Object.freeze({
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    scheduleNos: "",
    gender:"",
  })
const [formData, setFormData] = useState(initialState)
console.log(formData);

const HandleChange= (e) => {
  setFormData({...formData,[e.target.name]:e.target.value})
}
const HandleSubmit = async (e) =>  {
  e.preventDefault();
  try {
    axios.post(
      "http://127.0.0.1:8000/api/register/",
      formData
    ).then(res => {
      console.log(res.data);
    } 
    )
    window.location.href = "/doctor-login"
  }
  catch (err){
    console.log(err);
    window.location.href = "/doctor-signup"
  } 
}


  return (
    <div className="login-container">
      <nav>
        <div className="logo">HMS</div>
        <div className="bars">bars</div>
      </nav>
      <form className="login-form" onSubmit={HandleSubmit}>
      <div className="login">
        <h3>Doctors Registration Form</h3>
        <label htmlFor="">First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={HandleChange}/>
        <label htmlFor="">Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={HandleChange}/>
        <label htmlFor="">Email</label>
        <input type="email" name="email" value={formData.email} onChange={HandleChange}/>
        <label htmlFor="">Schedule No</label>
        <input type="text" name="scheduleNos" value={formData.scheduleNos} onChange={HandleChange}/>
        <label htmlFor="">Gender</label>
        <input type="text" name="gender" value={formData.gender} onChange={HandleChange}/>
        <label htmlFor="">Password</label>
        <input type="password" name="password" value={formData.password} onChange={HandleChange}/>
        <button type="submit">Submit</button>
      </div>
      </form>
    </div>
  );
}

export default Login;
