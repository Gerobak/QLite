import {
  GET_NEWS_START,
  GET_NEWS_FAILED,
  GET_NEWS_SUCCESS
} from "../actions/const/thread";

const initialState = {
  isLoading: false,
  error: null,
  dataNews: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_NEWS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataNews: action.payload
      };
    default:
      return state;
  }
};
