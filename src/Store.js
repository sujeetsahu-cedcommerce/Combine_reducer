import { createStore } from "redux";
import { combineReducers } from "redux";
// import {combineReducers} from "react-redux";
import cakeReducer from "./cakes/reducers/CakeReducer";
import chocolateReducer from "./chocolates/reducers/ChocolateReducer";
import iceCreamReducer from "./iceCreams/reducers/IceCreamReducers";

const rootReducer = combineReducers({
  cake_Reducer: cakeReducer,
  chocolate_Reducer: chocolateReducer,
  iceCream_Reducer: iceCreamReducer,
});

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
