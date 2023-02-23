import React from "react";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    fetchData(searchQuery, props);
  };

  return (
    <div className="searchBar">
      <form onSubmit={submitHandler}>
        <label>Enter City Name: </label>
        <input
          type="text"
          className="searchInput"
          placeholder="eg.London"
          onChange={handleChange}
        ></input>
        <button type="submit" className="searchBtn">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
        </button>
      </form>
    </div>
  );
}
function fetchData(searchQuery, props) {
  let url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&appid=ae77d8547f03cb282b301821239c39c1`;

  axios
    .get(url)
    .then((response) => {
      // console.log(response);
      editData(response, props);
    })
    .catch((error) => {
      alert("Please enter a valid city");
      console.log("error in retreiving lat,lon data", error);
    });
}
function editData(response, props) {
  let temp = {
    ...props.data,
    cityName: response.data[0].name,
    countryName: response.data[0].country,
    lat: response.data[0].lat,
    lon: response.data[0].lon,
  };
  props.setData(temp);
  store(response.data[0].name, props);
  getWeatherData(temp.lat, temp.lon, props);
}
function getWeatherData(lat, lon, props) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ae77d8547f03cb282b301821239c39c1&units=metric`;
  axios
    .get(url)
    .then((response) => {
      // console.log(response.data,"response");
      props.setWeatherData(response.data);
      // console.log("weather data log");
    })
    .catch((error) => console.log("error in retreiving weather data", error));
}
function store(cityName, props) {
  if (!props.searchHistory) {
    let t = [];
    t.push(cityName);
    props.setSearchHistory(t);
  } else {
    if (props.searchHistory.indexOf(cityName) !== -1) {
      let t = props.searchHistory;
      console.log(t);
      t.splice(props.searchHistory.indexOf(cityName), 1);
      console.log(t);
      t.unshift(cityName);
      console.log(t);
      props.setSearchHistory(t);
    } else {
      let t = props.searchHistory;
      t.unshift(cityName);
      props.setSearchHistory(t);
    }
  }
}
export default SearchBar;