const redux = require('redux');
const createStore = redux.createStore;


function orderCake(){
    return {
        type : 'CAKE_ORDERED',
        quantity : 1,
    }
}

const initialState = {
    numOfCakes : 10,
}
const reducer = ()=>{
    
}