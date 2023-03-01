const initialState = {
    weatherData : null,
}

const dataReducer = (state=initialState,action) =>{
    // console.log(' in weather reducer');
    switch(action.type){
        case 'WEATHER_DATA' : return {
            weatherData : action.payload
        }
        default : return state
    }
}
export default dataReducer