import React from 'react'

function Card({vehicle}) {
  console.log(vehicle);
  return (
    <>
    {
      vehicle.map((item)=>{
        return (
          <div className="card">
            <img src="./images/starship.avif" alt="" />
            <div className="bottom">
              <h3 className="title">{item.name}</h3>
              <p className="model">Model:{item.model}</p>
              <p className="rating">Hyperdrive Rating : {item.hyperdrive_rating}</p>
            </div>
          </div>
        );
      })
    }
    
    </>
  );
}

export default Card
