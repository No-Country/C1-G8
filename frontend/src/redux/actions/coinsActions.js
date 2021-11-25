import Axios from "axios";

export const COINS_ACTION = "COINS_ACTION";
export const COINS_ACTION_SUCCESS = "COINS_ACTION_SUCCESS";
export const COINS_ACTION_ERROR = "COINS_ACTION_ERROR";

export function getCoinsAction(coins) {
  return async (dispatch) => {
    dispatch(getCoins());

    try {
      await Axios.get("http://localhost:4000/coins", coins);
      dispatch(getCoinsSuccess(coins));
    } catch (error) {
      dispatch(getCoinsError(true));
    }
  };
}

const getCoins = () => ({
  type: COINS_ACTION,
});

const getCoinsSuccess = (coins) => ({
  type: COINS_ACTION_SUCCESS,
  payload: coins,
});

const getCoinsError = (error) => ({
  type: COINS_ACTION_ERROR,
  payload: error,
});
