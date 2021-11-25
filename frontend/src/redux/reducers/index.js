import { combineReducers } from "redux";
import cryptoReducer from "./cryptoReducer";
import coinsReducer from "./coinsReducer";

export default combineReducers({
  crypto: cryptoReducer,
  coins: coinsReducer,
});
