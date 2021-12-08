import {
  USER_ACTION,
  USER_ACTION_SUCCESS,
  USER_ACTION_ERROR,
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
} from "../actions/userActions";

const initialState = {
  user: {},
  register: {},
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
        user: action.payload,
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
    default:
      return state;
  }
}

export default userReducer;
