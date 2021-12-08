import {
  USER_ACTION,
  USER_ACTION_SUCCESS,
  USER_ACTION_ERROR,
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_ERROR,
} from "../actions/userActions";

const initialState = {
  login: {},
  register: {},
  logout: {},
  error: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ACTION:
      return {
        ...state,
      };
    case USER_ACTION_SUCCESS:
      return {
        ...state,
        login: action.payload,
      };
    case USER_ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case USER_REGISTER:
      return {
        ...state,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        register: action.payload,
      };
    case USER_REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        logout: action.payload,
      };
    case USER_LOGOUT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
