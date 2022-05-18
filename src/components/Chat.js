import React from "react";
import "./Chat.css";

function Chat() {
  return (
    <div className="consultation">
      <div className="free-consult">
        <div className="free">
          <h2>Start An Online Chat Consultation With Our Doctor</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
      </div>
      <div className="btn-free">
        <button className="btn1">Consultation Now</button>
        <button className="btn2">
          More Information
          <span>
            <i></i>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Chat;
