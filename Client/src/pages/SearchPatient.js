import React from "react";

function SearchPatient() {
  return (
    <div>
      <nav>
        <div className="logo">HMS</div>
        <div className="bars">bars</div>
      </nav>
      <div className="search">
        <h2>Search By Name</h2>
        <input type="text" name="" id="" />
        <button className="search-btn">Submt</button>
      </div>
      <div className="search-patient">
        <div className="flex-1">
          <h1>Name</h1>
          <h3>Ramesh</h3>
          <h3>Ramy</h3>
        </div>
        <div className="flex-2">
          <h1>Profile</h1>
          <button>Medical Profile</button>
          <button>Medical Profile</button>
        </div>
      </div>
    </div>
  );
}

export default SearchPatient;
