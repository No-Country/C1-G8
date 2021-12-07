import Axios from "axios";

export const CRYPTO_ACTION = "CRYPTO_ACTION";
export const CRYPTO_ACTION_SUCCESS = "CRYPTO_ACTION_SUCCESS";
export const CRYPTO_ACTION_ERROR = "CRYPTO_ACTION_ERROR";

const url = "http://localhost:4000/api";

export function getCryptoAction(id) {
  return async (dispatch) => {
    dispatch(getCrypto());

    try {
      const response = await Axios.get(`${url}/${id}`);
      dispatch(getCryptoSuccess(response.data));
    } catch (error) {
      dispatch(getCryptoError());
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
});
