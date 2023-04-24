import React, { useState } from 'react'
import Detail from './Detail';

function Card({vehicle}) {
  console.log(vehicle);

  const [show,setShow]=useState(false);
  const [vehicleItem,setVehicleItem] =useState();
  return (
    <>
    {
      vehicle.map((item)=>{
        return (
          <>
            <div className="card" onClick={()=>{setShow
            (true);setVehicleItem(item)}}>
              <img src="./images/starship.avif" alt="" />
              <div className="bottom">
                <h3 className="title">{item.name}</h3>
                <p className="model">Model:{item.model}</p>
                <p className="rating">
                  Hyperdrive Rating : {item.hyperdrive_rating}
                </p>
              </div>
            </div>
            <Detail show={show} item={vehicleItem} onClose={()=>setShow(false)}/>
          </>
        );
      })
    }
    
    </>
  );
}

export default Card
