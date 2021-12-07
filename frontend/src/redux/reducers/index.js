import { combineReducers } from "redux";
import cryptoReducer from "./cryptoReducer";
import coinsReducer from "./coinsReducer";
import userReducer from "./userReducer";
import walletReducer from "./walletReducer";
import exchangeReducer from "./exchangeReducer";

export default combineReducers({
  crypto: cryptoReducer,
  coins: coinsReducer,
  user: userReducer,
  wallet: walletReducer,
  exchange: exchangeReducer,
});
