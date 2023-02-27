import { combineReducers } from "redux";

import prevHistoryReducer from "./prevHistory/prevHistoryReducer"
import userInputReducer from  './fetchData/fetchDataReducer'
import dataReducer from './fetchWeatherData/weatherDataReducer'

const rootReducer = combineReducers({
    userData : userInputReducer,
    weatherData : dataReducer,
    prevHistory : prevHistoryReducer
})
export default rootReducer