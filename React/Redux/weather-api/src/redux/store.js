import {createStore} from 'redux'
import rootReducer from './rootReducer'
// import userInputReducer from './fetchData/fetchDataReducer'
const store = createStore(rootReducer)
export default store