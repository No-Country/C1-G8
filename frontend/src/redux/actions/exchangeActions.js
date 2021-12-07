import Axios from "axios";

export const BUY_CRYPTO = "BUY_CRYPTO";
export const BUY_CRYPTO_SUCCESS = "BUY_CRYPTO_SUCCESS";
export const BUY_CRYPTO_ERROR = "BUY_CRYPTO_ERROR";

export const EDIT_CRYPTO_SET = "EDIT_CRYPTO_SET";
export const EDIT_CRYPTO = "EDIT_CRYPTO";
export const EDIT_CRYPTO_SUCCESS = "EDIT_CRYPTO_SUCCESS";
export const EDIT_CRYPTO_ERROR = "EDIT_CRYPTO_ERROR";

export const SELL_CRYPTO = "SELL_CRYPTO";
export const SELL_CRYPTO_SUCCESS = "SELL_CRYPTO_SUCCESS";
export const SELL_CRYPTO_ERROR = "SELL_CRYPTO_ERROR";

//BUY
export function addNewCryptoAction(user, newCrypto) {
  return async (dispatch) => {
    dispatch(addNewCrypto());

    try {
      await Axios.post(`https://localhost/cryptobuy/${user}`, newCrypto);
      dispatch(addCryptoSuccess(newCrypto));
    } catch (error) {
      dispatch(addCryptoError(true));
    }
  };
}

const addNewCrypto = () => ({
  type: BUY_CRYPTO,
});

const addCryptoSuccess = (crypto) => ({
  type: BUY_CRYPTO_SUCCESS,
  payload: crypto,
});

const addCryptoError = (errorState) => ({
  type: BUY_CRYPTO_ERROR,
  payload: errorState,
});

//EDIT
export function editCryptoSetAction(crypto) {
  return (dispatch) => {
    dispatch(editCryptoSet(crypto));
  };
}

const editCryptoSet = (crypto) => ({
  type: EDIT_CRYPTO_SET,
  payload: crypto,
});

export function editCryptoAction(user, crypto) {
  return async (dispatch) => {
    dispatch(editCrypto());

    try {
      await Axios.put(`https://localhost/editwallet/${user}/${crypto}`, crypto);
      dispatch(editCryptoSuccess(crypto));
    } catch (error) {
      console.log(error);
      dispatch(editCryptoError(true));
    }
  };
}

const editCrypto = () => ({
  type: EDIT_CRYPTO,
});

const editCryptoSuccess = (crypto) => ({
  type: EDIT_CRYPTO_SUCCESS,
  payload: crypto,
});

const editCryptoError = (errorState) => ({
  type: EDIT_CRYPTO_ERROR,
  payload: errorState,
});

//SELL
export function sellCryptoAction(user, crypto) {
  return async (dispatch) => {
    dispatch(sellCrypto());

    try {
      const { data } = await Axios.post(`https://localhost/cryptobuy/${user}`);
      dispatch(sellCryptoSuccess(crypto));
      console.log(data);
    } catch (error) {
      dispatch(sellCryptoError(true));
    }
  };
}
// sell is buying negative

const sellCrypto = () => ({
  type: SELL_CRYPTO,
});

const sellCryptoSuccess = (crypto) => ({
  type: SELL_CRYPTO_SUCCESS,
  payload: crypto,
});

const sellCryptoError = (errorState) => ({
  type: SELL_CRYPTO_ERROR,
  payload: errorState,
});
