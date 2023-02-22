import React from "react";
function DisplayData(props) {
  const data = props.weatherData;
  data !== null && console.log(data);

  return (
    <div className="displayWrapper">
      <div className="mainBox">
        {props.weatherData !== null ? display(data) : null}
      </div>
    </div>
  );
}

const display = (data) => {
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString("default", {
    timezone: "GMT"});
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString("default", {
    timezone: "GMT"});
  const img_url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  return (
    <div>
      <h2>
        {data.name},{data.sys.country}
      </h2>
      <p>
        <div>
            <img className="weatherImage" src={img_url} alt="weather icon" />
        </div>
        
        <span className="weatherDescription">{data.weather[0].description}</span>
        <br/>
        High : {data.main.temp_max}&deg;C temp :{data.main.temp}&deg;C
        Low :{data.main.temp_min}&deg;C
        <br />
        Humidity : {data.main.humidity}%
        <br />
        Sunrise time : {sunrise}
        <br/>
        Sunset time : {sunset}
      </p>
    </div>
  );
};
export default DisplayData;
