import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientDash from "./pages/PatientDash";
import DoctorDash from "./pages/DoctorDash";
import Login from "./pages/Doctorregister";
import SignUp from "./pages/doctorlogin";
import ScheduleAppt from "./pages/ScheduleAppt";
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
          <Route exact path="/doctor-signup" element={<Login />} />
          <Route exact path="/doctor-login" element={<SignUp />} />
          <Route exact path="/schedule" element={<ScheduleAppt />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
