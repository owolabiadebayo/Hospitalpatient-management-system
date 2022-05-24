import React, {useState} from "react";
import "./Login.css";
import "./DoctorDash.css";
import axios  from "axios";


function SignUp() {
  const initialState = Object.freeze({
    email: "",
    password: "",
  })
const [formData, setFormData] = useState(initialState)
console.log(formData);

const HandleChange= (e) => {
  setFormData({...formData,[e.target.name]:e.target.value})
}
const HandleSubmit = (e) => {
  e.preventDefault();
  axios.post(
    "http://127.0.0.1:8000/api/signin/",
    formData
  ).then(res => {
    console.log(res.data);
  }
  )
}



  return (
    <div>
      <div className="login-container">
        <nav>
          <div className="logo">HMS</div>
          <div className="bars">bars</div>
        </nav>
        <form className="signup-form" onSubmit={HandleSubmit}>
        <div className="login">
          <label htmlFor="">Email</label>
          <input type="email" name='email' value={formData.email} onChange={HandleChange}/>
          <label htmlFor="">Password</label>
          <input type="password" name="password" value={formData.password} onChange={HandleChange}/>
          <div className="check">
            <input type="checkbox" name="" id="" /> I'm a doctor
          </div>
          <button type="submit" >Login</button>
          <button type="submit" >Create Account</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
