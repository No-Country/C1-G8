import Axios from "axios";

export const COINS_ACTION = "COINS_ACTION";
export const COINS_ACTION_SUCCESS = "COINS_ACTION_SUCCESS";
export const COINS_ACTION_ERROR = "COINS_ACTION_ERROR";

const url = "http://localhost:4000/api";


export function getCoinsAction(page) {
  return async (dispatch) => {
    dispatch(getCoins());

    try {
    const response =  await Axios.get(`${url}/coinslist?page=${page}`);
    if (response.data === null) {
      dispatch(getCoinsError())
    } else {
      dispatch(getCoinsSuccess(response.data));
    }
      
    } catch (error) {
      dispatch(getCoinsError());
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

const getCoinsError = () => ({
  type: COINS_ACTION_ERROR,
});
