import {
  BUY_CRYPTO,
  BUY_CRYPTO_SUCCESS,
  BUY_CRYPTO_ERROR,
  EDIT_CRYPTO,
  EDIT_CRYPTO_SUCCESS,
  EDIT_CRYPTO_ERROR,
  SELL_CRYPTO,
  SELL_CRYPTO_SUCCESS,
  SELL_CRYPTO_ERROR,
} from "../actions/exchangeActions";

const initialState = {
  exchange: [],
  error: null,
  currency: null,
};

function exchangeReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CRYPTO:
      return {
        ...state,
      };
    case BUY_CRYPTO_SUCCESS:
      return {
        ...state,
        crypto: [...state.crypto, action.payload],
      };
    case BUY_CRYPTO_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case EDIT_CRYPTO:
      return {
        ...state,
      };
    case EDIT_CRYPTO_SUCCESS:
      return {
        ...state,
        crypto: [...state.crypto, action.payload],
      };
    case EDIT_CRYPTO_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case SELL_CRYPTO:
      return {
        ...state,
      };
    case SELL_CRYPTO_SUCCESS:
      return {
        ...state,
        crypto: [...state.crypto, action.payload],
      };
    case SELL_CRYPTO_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default exchangeReducer;
