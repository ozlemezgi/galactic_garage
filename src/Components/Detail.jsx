import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
import {BiArrowBack} from "react-icons/bi"

function Detail({show,item,onClose}) {
    if(!show){
        return null;
    }
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            {/* <AiOutlineClose /> */}
            <BiArrowBack /> 
          </button>
          <div className="inner-box">
            <h2>{item.name}</h2>
            <img src="/images/starship.avif" alt="" />
            <div className="info">
              <h4>
                Model :<span>{item.model}</span>
              </h4>
              <br />
              <h4>
                Hyperdrive Rating :<span>{item.hyperdrive_rating}</span>
              </h4>
              <br />
              <h4>
                Passengers :<span>{item.passengers}</span>
              </h4>
              <br />
              <h4>
                Max Atmosphering Speed :<span>{item.max_atmosphering_speed}</span>
              </h4>
              <br />
              <h4>
                Manufacturer :<span>{item.manufacturer}</span>
              </h4>
              <br />
              <h4>
                Crew :<span>{item.crew}</span>
              </h4>
              <br />
              <h4>
                Cargo Capacity :<span>{item.cargo_capacity}</span>
              </h4>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail