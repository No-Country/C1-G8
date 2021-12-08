import Axios from "axios";

export const USER_ACTION = "USER_ACTION";
export const USER_ACTION_SUCCESS = "USER_ACTION_SUCCESS";
export const USER_ACTION_ERROR = "USER_ACTION_ERROR";

export const USER_REGISTER = "USER_REGISTER";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_ERROR = "USER_REGISTER_ERROR";

export function getUserAction(user) {
  return async (dispatch) => {
    dispatch(getUser());

    try {
      const { data } = await Axios.post(
        "http://localhost:4000/api/login",
        user
      );
      dispatch(getUserSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(getUserError(true));
      console.log(error);
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

export function setUserAction(user) {
  return async (dispatch) => {
    dispatch(setUser());

    try {
      const { data } = await Axios.post(
        "http://localhost:4000/api/create",
        user
      );
      dispatch(setUserSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(setUserError(true));
      console.log(error);
    }
  };
}

const setUser = () => ({
  type: USER_REGISTER,
});

const setUserSuccess = (user) => ({
  type: USER_REGISTER_SUCCESS,
  payload: user,
});

const setUserError = (error) => ({
  type: USER_REGISTER_ERROR,
  payload: error,
});
