import {
  CRYPTO_ACTION,
  CRYPTO_ACTION_SUCCESS,
  CRYPTO_ACTION_ERROR,
} from "../actions/cryptoActions";

const initialState = {
  crypto: [],
  error: null,
  currency: null,
};

function cryptoReducer(state = initialState, action) {
  switch (action.type) {
    case CRYPTO_ACTION:
      return {
        ...state,
      };
    case CRYPTO_ACTION_SUCCESS:
      return {
        ...state,
        crypto: [...state.crypto, action.payload],
      };
    case CRYPTO_ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default cryptoReducer;
