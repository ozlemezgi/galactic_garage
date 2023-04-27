import React, { useState} from 'react'
import Detail from './Detail';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import starshipsData from "../assets/images/Image.json";

function Card({vehicle}) {
  console.log(vehicle);

  // Get the name parameter from the URL
  // const { name } = useParams();

  // Define state variables to handle showing/hiding the Detail component and storing the selected vehicle
  const [show, setShow] = useState(false);
  const [vehicleItem, setVehicleItem] = useState();

  // Initialize useNavigate hook
  const navigate = useNavigate();
  return (
    <>
      {vehicle.map((item) => {
        // Find the corresponding image URL for the vehicle's name
        const imgURL = starshipsData.find((ship) => ship.name === item.name)?.img;
        return (
          <>
            <Link
              to={`detail/${item.name.replaceAll(" ", "-")}`}
              style={{ textDecoration: "none", color: "#222" }}
            >
              <div
                className="card"
                onClick={() => {
                  setShow(true);
                  setVehicleItem(item);
                }}
              >
                {/* <img src="/images/starship.avif" alt="" /> */}
                <img src={imgURL} alt="" />

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
              onClose={() => {
                setShow(false);
                navigate("/");
              }}
            />
          </>
        );
      })}
    </>
  );
}

export default Card
