import { useSelector } from "react-redux";

const initialState = {
    searchHistory : null,
}

const prevHistoryReducer = (state=initialState,action) =>{
    console.log(' in prev history reducer');
    switch(action.type){
        case "PREV_HISTORY" : 
        return {
          searchHistory : action.payload,
        }
        default : return state
    }
}

export default prevHistoryReducer