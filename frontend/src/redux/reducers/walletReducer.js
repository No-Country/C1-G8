import {
  WALLET_ACTION,
  WALLET_ACTION_SUCCESS,
  WALLET_ACTION_ERROR,
} from "../actions/walletActions";

const initialState = {
  wallet: [],
  error: null,
  coins: [],
  currency: null,
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
    case WALLET_ACTION:
      return {
        ...state,
      };
    case WALLET_ACTION_SUCCESS:
      return {
        ...state,
        wallet: [...state.wallet, action.payload],
      };
    case WALLET_ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default walletReducer;
