import Axios from "axios";

export const USER_ACTION = "USER_ACTION";
export const USER_ACTION_SUCCESS = "USER_ACTION_SUCCESS";
export const USER_ACTION_ERROR = "USER_ACTION_ERROR";

export const USER_REGISTER = "USER_REGISTER";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_ERROR = "USER_REGISTER_ERROR";

export const USER_LOGOUT = "USER_LOGOUT";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";
export const USER_LOGOUT_ERROR = "USER_LOGOUT_ERROR";

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

const getUserSuccess = (login) => ({
  type: USER_ACTION_SUCCESS,
  payload: login,
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

const setUserSuccess = (register) => ({
  type: USER_REGISTER_SUCCESS,
  payload: register,
});

const setUserError = (error) => ({
  type: USER_REGISTER_ERROR,
  payload: error,
});

export function logoutAction(user) {
  return async (dispatch) => {
    dispatch(logoutUser());

    try {
      const { data } = await Axios.delete(
        "http://localhost:4000/api/logout",
        user
      );
      dispatch(logoutSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(logoutError(true));
      console.log(error);
    }
  };
}

const logoutUser = () => ({
  type: USER_LOGOUT,
});

const logoutSuccess = (logout) => ({
  type: USER_LOGOUT_SUCCESS,
  payload: logout,
});

const logoutError = (error) => ({
  type: USER_LOGOUT_ERROR,
  payload: error,
});
