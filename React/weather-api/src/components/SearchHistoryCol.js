import React from 'react'

function SearchHistoryCol(props) {
  // console.log(props.searchHistory,"inside search history col");
  function handleClick(e){
    console.log(e.target.id);
    props.fetchData(e.target.id);
  }
  



  return (
    
    <div className='searchHistory'>
      <h3>Previous Search:</h3>
      <div className="history">
        {props.searchHistory.map((cityName)=>{
          return(
            <div onClick={handleClick} id={cityName} > {cityName}</div>
          );
        })}
      </div>
    </div>
  )
}

export default SearchHistoryCol
