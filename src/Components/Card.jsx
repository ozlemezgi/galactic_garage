import React, { useState } from 'react'
import Detail from './Detail';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Card({vehicle}) {
  console.log(vehicle);

  // Get the name parameter from the URL
  const { name } = useParams();
  // Define state variables to handle showing/hiding the Detail component and storing the selected vehicle
  const [show, setShow] = useState(false);
  const [vehicleItem, setVehicleItem] = useState();
  return (
    <>
      {vehicle.map((item) => {
        return (
          <>
            <Link
              to={`detail/${item.name}`}
              style={{ textDecoration: "none", color: "#222" }}
            >
              <div
                className="card"
                onClick={() => {
                  setShow(true);
                  setVehicleItem(item);
                }}
              >
                <img src="./images/starship.avif" alt="" />

                <div className="bottom">
                  <h3 className="title">{item.name}</h3>
                  <p className="model">Model:{item.model}</p>
                  <p className="rating">
                    Hyperdrive Rating : {item.hyperdrive_rating}
                  </p>
                </div>
              </div>
            </Link>
            <Detail
              show={show}
              item={vehicleItem}
              onClose={() => setShow(false)}
            />
          </>
        );
      })}
    </>
  );
}

export default Card
