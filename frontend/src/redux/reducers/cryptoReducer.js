import {
  CRYPTO_ACTION,
  CRYPTO_ACTION_ERROR,
  CRYPTO_ACTION_SUCCESS,
} from "../actions/cryptoActions";

const initialState = {
  crypto: {},
  error: false,
  currency: false,
};

function cryptoReducer(state = initialState, action) {
  switch (action.type) {
    case CRYPTO_ACTION:
      return {
        crypto: {},
        error: false,
        currency: true,
      };
    case CRYPTO_ACTION_SUCCESS:
      return {
        crypto: action.payload,
        error: false,
        currency: false,
      };
    case CRYPTO_ACTION_ERROR:
      return {
        crypto: {},
        error: true,
        currency: false,
      };
    default:
      return state;
  }
}

export default cryptoReducer;
