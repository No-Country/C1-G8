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
  ERROR_SERVER,
} from "../actions/userActions";

const initialState = {
  waiting:false,
  register: null,
  login: null,
  logged: false,
  logout: {},
  error: null,
  errorRegister:false,
  errorServer:null
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ACTION:
      return {
        ...state,
        waiting:true,
        login:null,
        logged:true,
        error:null,
      };
    case USER_ACTION_SUCCESS:
      return {
        ...state,
        waiting:false,
        login: action.payload,
        logged: true,
        error:null,
      };
    case USER_ACTION_ERROR:
      return {
        ...state,
        waiting:false,
        login:null,
        logged:false,
        error: action.payload,
      };
    case USER_REGISTER:
      return {
        ...state,
        waiting:true,
        register:null,
        errorRegister:false,
        errorServer:null
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        waiting:false,
        register: action.payload,
        errorRegister:false,
        errorServer:null
      };
    case USER_REGISTER_ERROR:
      return {
        ...state,
        waiting:false,
        register:null,
        errorRegister: true,
        errorServer:null
      };
    case ERROR_SERVER:
      return{
        ...state,
        waiting:false,
        register:null,
        errorRegister: false,
        errorServer:action.payload
      }
    case USER_LOGOUT:
      return {
        ...state,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        login: {},
        logged: false,
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
