import {
  COINS_ACTION,
  COINS_ACTION_ERROR,
  COINS_ACTION_SUCCESS,
} from "../actions/coinsActions";

const initialState = {
  coins: null,
  error: false,
  currency: false,
};

function coinsReducer(state = initialState, action) {
  switch (action.type) {
    case COINS_ACTION:
      return {
        ...state,
        coins:null,
        error:false,
        currency:true,
      };
    case COINS_ACTION_SUCCESS:
      return {
        ...state,
        coins: action.payload,
        error:false,
        currency:false,
      };
    case COINS_ACTION_ERROR:
      return {
        ...state,
        coins:null,
        error: true,
        currency:false
      };
    default:
      return state;
  }
}

export default coinsReducer;
