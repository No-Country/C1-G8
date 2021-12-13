import Axios from "axios";

export const WALLET_ACTION = "WALLET_ACTION";
export const WALLET_ACTION_SUCCESS = "WALLET_ACTION_SUCCESS";
export const WALLET_ACTION_ERROR = "WALLET_ACTION_ERROR";

export function getWalletAction(id, token) {
  //Axios.defaults.headers.common["Authorization"] = token;
  return async (dispatch) => {
    dispatch(getWallet());

    try {
      const response = await Axios.get(
        `http://localhost:4000/api/cryptoview/${id}`
      );
      dispatch(getWalletSuccess(response.data));
    } catch (error) {
      dispatch(getWalletError(error));
    }
  };
}
// kindly reminder, set coins also

const getWallet = () => ({
  type: WALLET_ACTION,
});

const getWalletSuccess = (wallet) => ({
  type: WALLET_ACTION_SUCCESS,
  payload: wallet,
});

const getWalletError = (error) => ({
  type: WALLET_ACTION_ERROR,
  payload: error,
});
