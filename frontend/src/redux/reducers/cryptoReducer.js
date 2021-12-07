import {
  CRYPTO_ACTION,
  CRYPTO_ACTION_ERROR,
  CRYPTO_ACTION_SUCCESS,
} from "../actions/cryptoActions";

const initialState = {
  crypto: {},
  error: null,
  currency: null,
};

function cryptoReducer(state = initialState, action) {
  switch (action.type) {
    case CRYPTO_ACTION:
      return {
        cryto: {}, error: null,  currency: true, 
      };
    case CRYPTO_ACTION_SUCCESS:
      return {
        cryto: action.payload, error: null,  currency: null, 
      };
    case CRYPTO_ACTION_ERROR:
      return {
        cryto: {}, error: true,  currency: null, 
      };
    default:
      return state;
  }
}

export default cryptoReducer;
