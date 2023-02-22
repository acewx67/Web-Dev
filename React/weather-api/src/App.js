import "./App.css";
import SearchBar from "./components/SearchBar";
import DisplayData from "./components/DisplayData";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    cityName: "",
    countryName: "",
    lat: "",
    lon: "",
  });
  const [weatherData,setWeatherData] = useState(null);

  


  return (
    <div className="App">
      <SearchBar data={data} setData={setData} setWeatherData={setWeatherData} />
      <DisplayData weatherData={weatherData}/>
    </div>
  );
}

export default App;
