import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientDash from "./pages/PatientDash";
import DoctorDash from "./pages/DoctorDash";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ScheduleAppt from "./pages/ScheduleAppt";
import PatientHistory from "./pages/PatientHistory";
import DoctorView from "./pages/Doctorview";
import Patientview from "./pages/Patientview";
import DoctorLogin from "./pages/doctorlogin";
import PatientLogin from "./pages/PatientLogin";
import DoctorRegister from "./pages/Doctorregister";
import Patientregister from "./pages/PatientRegister";

// import PatientDash from "./pages/PatientDash";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/patient-dash" element={<PatientDash />} />
          <Route exact path="/doctor-dash" element={<DoctorDash />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />

          <Route exact path="/View-patient" element={<PatientHistory />} />
          <Route exact path="/Doctor-view" element={<DoctorView />} />
          <Route exact path="/Patient-view" element={<Patientview />}></Route>
          <Route exact path="/Schedule" element={<ScheduleAppt />}></Route>
          <Route exact path="/DoctorLogin" element={<DoctorLogin />}></Route>
          <Route exact path="/PatientLogin" element={<PatientLogin />}></Route>
          <Route
            exact
            path="/Doctor-signup"
            element={<DoctorRegister />}
          ></Route>
          <Route
            exact
            path="/Patient-register"
            element={<Patientregister />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
