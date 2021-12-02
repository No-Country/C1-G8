import {
  USER_ACTION,
  USER_ACTION_SUCCESS,
  USER_ACTION_ERROR,
} from "../actions/userActions";

const initialState = {
  user: [],
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
        user: [...state.user, action.payload],
      };
    case USER_ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
