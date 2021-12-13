import { applyMiddleware, compose, createStore } from "redux";

import reducer from "../reducers";
import thunk from "redux-thunk";
import { getUserAction } from "../actions/userActions";
import { getWalletAction } from "../actions/walletActions";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
//store.dispatch(getWalletAction('61b0a7c4c92df22921493c2e'))
export default   store;
