import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientDash from "./pages/PatientDash";
import DoctorDash from "./pages/DoctorDash";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// import Diagnosis from "./pages/Diagnosis";

// import PatientDash from "./pages/PatientDash";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/patient-dash" element={<PatientDash />} />
          <Route exact path="/doctor-dash" element={<DoctorDash />} />
          <Route exact path="/doctor-Login" element={<Login />} />
          <Route exact path="/doctor-signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
