import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS
} from "../actions/const/auth";

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
    default:
      return state;
  }
};
