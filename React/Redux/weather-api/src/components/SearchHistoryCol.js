import React from 'react'
import { useParams ,useNavigate, Navigate} from "react-router-dom";


function SearchHistoryCol(props) {
  const navigate=useNavigate()

  // console.log(props.searchHistory,"inside search history col");
  function handleClick(e){
    // console.log(e.target.id);
    // props.fetchData(e.target.id);
    navigate(`/${e.target.id}`)

  }
  
  return (
    
    <div className='searchHistory'>
      <h3>Previous Search:</h3>
      <div className="history">
        {props.searchHistory.map((cityName,i)=>{
           return(
           i!==0 && <div key={i} onClick={handleClick} id={cityName} className="cityList"> {cityName}</div>
          );
        })}
      </div>
    </div>
  )
}

export default SearchHistoryCol
