import React from "react";
import { useState ,useEffect} from "react";
import { useParams ,useNavigate, Navigate} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar(props) {
  const params = useParams();
  const navigate=useNavigate()
  console.log(params.cityName);
  const [searchQuery, setSearchQuery] = useState("");
  const {fetchData} = props;
  useEffect(()=>{params.cityName && fetchData(params.cityName)},[params.cityName])
  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/${searchQuery}`)
    // console.log('triggered submitHandler');
    props.fetchData(searchQuery);
    
  };

  return (
    <div className="searchBar">
      <div className="mainTitle">The Weather App</div>

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

export default SearchBar;
