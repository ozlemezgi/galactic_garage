import React from 'react'
import {BsSearch} from "react-icons/bs"


function Main() {
  return (
    <>
      <div className="header">
        <div className="header-container">
          <h1>Galactic Garage</h1>
          <h2>Discover Space's Best Vehicles</h2>
          <div className="search">
            <input type="text" placeholder="Enter for a vehicle" />
            <br/><br/>
            <button><BsSearch/></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main