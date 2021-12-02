import Axios from "axios";

export const USER_ACTION = "USER_ACTION";
export const USER_ACTION_SUCCESS = "USER_ACTION_SUCCESS";
export const USER_ACTION_ERROR = "USER_ACTION_ERROR";

export function getUserAction(user) {
  return async (dispatch) => {
    dispatch(getUser());

    try {
      await Axios.get("http://localhost:4000/user", user);
      dispatch(getUserSuccess(user));
    } catch (error) {
      dispatch(getUserError(true));
    }
  };
}

const getUser = () => ({
  type: USER_ACTION,
});

const getUserSuccess = (user) => ({
  type: USER_ACTION_SUCCESS,
  payload: user,
});

const getUserError = (error) => ({
  type: USER_ACTION_ERROR,
  payload: error,
});
