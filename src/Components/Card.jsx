import React from 'react'

function Card() {
  return (
    <>
      <div className="card">
        <img src="./images/starship.avif" alt="" />
        <div className="bottom">
          <h3 className="title">Vehicle Name</h3>
          <p className="model">Model:Model</p>
          <p className="rating">Hyperdrive Raiting : Hyperdrive Raiting</p>
        </div>
      </div>
    </>
  );
}

export default Card
