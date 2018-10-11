import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_START,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS
} from "../actions/constant/auth";

const initialState = {
  isLogin: false,
  isLoading: false,
  userData: {},
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLogin: false,
        isLoading: true
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        error: action.payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        userData: action.payload
      };
    case LOGOUT_START:
      return {
        ...state,
        isLogin: true,
        isLoading: true
      };
    case LOGOUT_FAILED:
      return {
        isLoading: false,
        isLogin: true,
        error: action.payload
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        userData: {}
      };
    default:
      return state;
  }
};
