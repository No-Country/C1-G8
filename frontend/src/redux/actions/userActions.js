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
export const ERROR_SERVER = 'ERROR_SERVER'

export function getUserAction(email,password) {
  return async (dispatch) => {
    //dispatch(getUser());
   
    try {
      const { data } = await Axios.post(
        "http://localhost:4000/api/login",
        {
          email,
          password
        }
      );
      data && data.token ? dispatch(getUserSuccess(data)): dispatch(getUserError(data));
      
    } catch (error) {
      dispatch(getUserError(error.message));
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

export function setUserAction(userName,email,password) {
  return async (dispatch) => {
    try {
      dispatch(setUser())
      const { data } = await Axios.post(
        "http://localhost:4000/api/create",{
          userName,
          email,
          password
        }
      );
      data.status ? dispatch(setUserSuccess(data)) : dispatch(getErrorServerAction(data));
    } catch (error) {
      dispatch(setUserError());
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
});

const getErrorServerAction = (error)=>{
  return{
    type: ERROR_SERVER,
    payload:error
  }
}

export function logoutAction(name,id) {
  return async (dispatch) => {
    dispatch(logoutUser());

    try {
      const { data } = await Axios.delete(
        "http://localhost:4000/api/logout",
        {
          name,
          id
        }
      );
      dispatch(logoutSuccess(data));
    } catch (error) {
      dispatch(logoutError(true));
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
