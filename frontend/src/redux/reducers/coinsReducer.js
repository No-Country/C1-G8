import {
  COINS_ACTION,
  COINS_ACTION_ERROR,
  COINS_ACTION_SUCCESS,
} from "../actions/coinsActions";

const initialState = {
  coins: [],
  error: null,
  currency: null,
};

function coinsReducer(state = initialState, action) {
  switch (action.type) {
    case COINS_ACTION:
      return {
        ...state,
      };
    case COINS_ACTION_SUCCESS:
      return {
        ...state,
        coins: action.payload,
      };
    case COINS_ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default coinsReducer;
