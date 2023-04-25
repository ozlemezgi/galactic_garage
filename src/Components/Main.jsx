import React, { useState ,useEffect} from "react";
import { BsSearch } from "react-icons/bs";
import Card from "./Card";
import axios from "axios";
import { Outlet } from "react-router-dom";

function Main() {
  // using state hooks to keep track of search value and search results
  const [search, setSearch] = useState("");
  const [vehicleData, setVehicleData] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState("");

  // useEffect hook to make a search from SWAPI when the page loads
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/`)
      .then((res) => {
        setVehicleData(res.data.results);
        setNextPageUrl(res.data.next);
      })
      .catch((err) => console.log(err));
  }, []);

  // function that will be executed when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    // using axios library to make a search from SWAPI and saving the results to the state hook
    axios
      .get(`https://swapi.dev/api/starships/?search=${search}`)
      .then((res) => {
        setVehicleData(res.data.results);
        setNextPageUrl(res.data.next);
      })
      .catch((err) => console.log(err));
  };

  // function to load more data from SWAPI
  const handleLoadMore = () => {
    axios
      .get(nextPageUrl)
      .then((res) => {
        setVehicleData([...vehicleData, ...res.data.results]);
        setNextPageUrl(res.data.next);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="header">
        <div className="header-container">
          <h1>Galactic Garage</h1>
          <h2>Discover Space's Best Vehicles</h2>
          <form onSubmit={handleSubmit}>
            <div className="search">
              <input
                type="text"
                placeholder="Enter for a vehicle"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <br />
              <br />
              <button type="submit">
                <BsSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        {/* Displaying search results using the Card component */}
        {<Card vehicle={vehicleData} />}
        {/* Load more button */}
        {nextPageUrl && (
          <button className="load-more" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
      <Outlet/>
    </>
  );
}

export default Main;
