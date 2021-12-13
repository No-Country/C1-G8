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
export function addNewCryptoAction(id, name, quantity ) {
  //Axios.defaults.headers.common["Authorization"] = token;
  return async (dispatch) => {
    dispatch(addNewCrypto());

    console.log()
    try {
      const response = await Axios.post(`http://localhost:4000/api/cryptobuy/${id}`, {
        name,
        quantity
      });
      dispatch(addCryptoSuccess(response.data));
    } catch (error) {
      dispatch(addCryptoError(error));
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

export function editCryptoAction(id, cryptoId, name,quantity) {
  return async (dispatch) => {
    dispatch(editCrypto());

    try {
      const response = await Axios.put(`http://localhost:4000/api/editwallet/${id}/${cryptoId}`,{
        name,
        quantity
      });
      dispatch(editCryptoSuccess(response.data));
    } catch (error) {
      dispatch(editCryptoError(error));
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
