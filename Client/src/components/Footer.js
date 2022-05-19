import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-1">
        <div className="news-letter">
          <div className="news">
            <h1>Subscribe Our Newsletter</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          <div className="letter">
            <input type="text" placeholder="Enter Your Email Address" />
            <button>Subcribe</button>
          </div>
        </div>
        <div className="footer-2">
          <div className="footer-logo">
            <img src="/images/logo2.png" alt="footer-logo" />
            <p>
              Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            <div className="media">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-facebook"></i>
            </div>
          </div>
          <div className="quick-links">
            <div className="quick">
              <h1>Quick Links</h1>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="useful-links">
            <div className="useful">
              <h1>Useful Links</h1>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="appoint">
            <div className="appoint-links">
              <h1>Make Appointment</h1>
              <div className="appoint-days">
                <div className="appoint-time">
                  <i className="fa-solid fa-clock"></i>
                  <h4>9 AM - 10 PM,Monday-Saturday</h4>
                </div>
              </div>
              <div className="call">
                <i className="fa-solid fa-phone"></i>
                <div className="call-today">
                  <h2>Call Us Today</h2>
                  <h4>(+62)81 414 257</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
