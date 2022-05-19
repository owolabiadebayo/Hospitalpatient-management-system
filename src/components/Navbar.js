import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo-img">
          <img src="images/logo1.png" alt="" />
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>ABOUT US</li>

          <li>
            <Link to="/doctor-dash">DOCTOR</Link>
          </li>

          <li>
            <Link to="/patient-dash">Patient</Link>
          </li>

          <li>
            <Link to="/doctor-reg">Patient</Link>
          </li>
          <li>
            <Link to="/doctor-signup">Sign Up</Link>
          </li>

          <li>BLOG</li>

          <li>CONTACT</li>

          <li> (+234)9032643927</li>
        </ul>
        {/* <ul>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/">
              <li>ABOUT US</li>
            </Link>
            <Link to="/">
              <li>SERVICES</li>
            </Link>
            <Link to="/">
              <li>DOCTOR</li>
            </Link>
            <Link to="/">
              <li>PAGES</li>
            </Link>
            <Link to="/">
              <li>BLOG</li>
            </Link>
            <Link to="/">
              <li>CONTACT</li>
            </Link>
            <Link to="/">
              <li> (+234)9032643927</li>
            </Link>
          </ul> */}

        <div className="navbars">
          <i className="fas fa-bars 3xl"></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
