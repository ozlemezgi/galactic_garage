import React from 'react'
import {BsSearch} from "react-icons/bs"
import Card from './Card';


function Main() {
  return (
    <>
      <div className="header">
        <div className="header-container">
          <h1>Galactic Garage</h1>
          <h2>Discover Space's Best Vehicles</h2>
          <div className="search">
            <input type="text" placeholder="Enter for a vehicle" />
            <br />
            <br />
            <button>
              <BsSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Main