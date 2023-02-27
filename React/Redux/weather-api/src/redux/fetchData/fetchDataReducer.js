import { DATA } from "./fetchDataTypes";
const initialState = {
    cityName: "",
    countryName: "",
    lat: "",
    lon: "",
}

const userInputReducer = (state=initialState,action) =>{
    console.log(' in reducer');
    switch(action.type){
        case DATA : return {
          ...state,
          cityName : action.payload.cityName,
          countryName : action.payload.countryName,
          lat : action.payload.lat,
          lon : action.payload.lon,
        }
        default : return state
    }
}
export default userInputReducer