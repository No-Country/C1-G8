import Axios from "axios";

export const WALLET_ACTION = "WALLET_ACTION";
export const WALLET_ACTION_SUCCESS = "WALLET_ACTION_SUCCESS";
export const WALLET_ACTION_ERROR = "WALLET_ACTION_ERROR";

export function getWalletAction(wallet) {
  return async (dispatch) => {
    dispatch(getWallet());

    try {
      await Axios.get("http://localhost:4000/wallet", wallet);
      dispatch(getWalletSuccess(wallet));
    } catch (error) {
      dispatch(getWalletError(true));
    }
  };
}

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
