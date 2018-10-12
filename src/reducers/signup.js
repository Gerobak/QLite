import {
  SIGNUP_START,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS
} from "../actions/const/signup";

const initialState = {
  loading: false,
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        loading: true
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
