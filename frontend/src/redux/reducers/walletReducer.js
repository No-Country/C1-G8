import {
  WALLET_ACTION,
  WALLET_ACTION_SUCCESS,
  WALLET_ACTION_ERROR,
} from "../actions/walletActions";

const initialState = {
  wallet: [],
  error: false,
  currency: false,
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
    case WALLET_ACTION:
      return {
        wallet:[],
        error:false,
        currency:true
      };
    case WALLET_ACTION_SUCCESS:
      return {
        wallet:action.payload,
        error:false,
        currency:false
      };
    case WALLET_ACTION_ERROR:
      return {
        wallet:[],
        error:true,
        currency:false
      };
    default:
      return state;
  }
}

export default walletReducer;
