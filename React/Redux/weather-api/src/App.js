import "./App.css";
import SearchBar from "./components/SearchBar";
import DisplayData from "./components/DisplayData";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import SearchHistoryCol from "./components/SearchHistoryCol";
import fetchData1 from "./redux/fetchData/fetchDataAction";
import fetchWeatherData1 from "./redux/fetchWeatherData/weatherDataAction"
import prevHistory from "./redux/prevHistory/prevHistoryAction";




function App() {
  const data = useSelector(state=>state.userData)
  const dispatch = useDispatch()
  const weatherData = useSelector(state=>state.weatherData)
  const searchHistory = useSelector(state=>state.prevHistory.searchHistory)
  
  
  function fetchData(searchQuery) {
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&appid=ae77d8547f03cb282b301821239c39c1`;

    axios
      .get(url)
      .then((response) => {
        console.log("befre new smthings");
        editData(response);
      })
      .catch((error) => {
        console.log("new somethings");
        alert("Please enter a valid city");
        console.log("error in retreiving lat,lon data", error);
      });
  }
  function editData(response) {
    let temp = {
      cityName: response.data[0].name,
      countryName: response.data[0].country,
      lat: response.data[0].lat,
      lon: response.data[0].lon,
    };
    console.log(temp);
    dispatch(fetchData1(temp))
    console.log(data);
    getWeatherData(temp.lat, temp.lon);
    store(temp.cityName);
  }
  function getWeatherData(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ae77d8547f03cb282b301821239c39c1&units=metric`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data,"response");
        dispatch(fetchWeatherData1(response.data))
      })
      .catch((error) => console.log("error in retreiving weather data", error));
  }

  function store(cityName) {
    if (!searchHistory) {
      let t = [];
      t.push(cityName);
      dispatch(prevHistory(t));
      // console.log(searchHistory,"bhiin");
    } else {
      if (searchHistory.indexOf(cityName) !== -1) {
        let t = searchHistory;
        console.log(t);
        t.splice(searchHistory.indexOf(cityName), 1);
        console.log(t);
        t.unshift(cityName);
        console.log(t);
        dispatch(prevHistory(t));
      } else {
        let t = searchHistory;
        t.unshift(cityName);
        dispatch(prevHistory(t));
      }
    }
    console.log(searchHistory,"in store func");
  }


  return (
      <div className="App">
        <SearchBar  fetchData={fetchData}/>
        <div className="col">
          {console.log(weatherData,'in jsx')}
            <DisplayData
            data={weatherData}/>
          {console.log(searchHistory)}
          {weatherData&&searchHistory ? (
            <SearchHistoryCol
              searchHistory={searchHistory}
              fetchData={fetchData}
            />
          ) : null}
        </div>
      </div>
  );
}

export default App;
