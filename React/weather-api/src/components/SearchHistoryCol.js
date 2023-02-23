import React from 'react'

function SearchHistoryCol(props) {
  console.log(props.searchHistory,"inside search history col");
  



  return (
    
    <div className='searchHistory'>
      {console.log(props.searchHistory,"this history")}
      <h3>Previous Search</h3>
      <div className="history">
        {props.searchHistory.map((cityName)=>{
          return(
            <div>{cityName}</div>
          );
        })}
      </div>
    </div>
  )
}

export default SearchHistoryCol
