import Axios from "axios";

export const CRYPTO_ACTION = "CRYPTO_ACTION";
export const CRYPTO_ACTION_SUCCESS = "CRYPTO_ACTION_SUCCESS";
export const CRYPTO_ACTION_ERROR = "CRYPTO_ACTION_ERROR";

export function getCryptoAction(crypto) {
  return async (dispatch) => {
    dispatch(getCrypto());

    try {
      await Axios.get("http://localhost:4000/crypto", crypto);
      dispatch(getCryptoSuccess(crypto));
    } catch (error) {
      dispatch(getCryptoError(true));
    }
  };
}

const getCrypto = () => ({
  type: CRYPTO_ACTION,
});

const getCryptoSuccess = (crypto) => ({
  type: CRYPTO_ACTION_SUCCESS,
  payload: crypto,
});

const getCryptoError = (error) => ({
  type: CRYPTO_ACTION_ERROR,
  payload: error,
});
