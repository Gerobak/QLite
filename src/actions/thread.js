import {
  GET_NEWS_START,
  GET_NEWS_FAILED,
  GET_NEWS_SUCCESS
} from "./const/thread";
import axios from "axios";
import { ToastAndroid } from "react-native";

const getStart = () => ({
  type: GET_NEWS_START
});
const getFailed = error => ({
  type: GET_NEWS_FAILED,
  payload: error
});
const getSuccess = data => ({
  type: GET_NEWS_SUCCESS,
  payload: data
});

export const newsTopHeadline = () => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(getStart());
    return axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=59b44dc9d36241679db166ed0df75e0d"
      )
      .then(res => {
        dispatch(getSuccess(res.data));
        return resolve(res);
      })
      .catch(err => {
        dispatch(getFailed(err));
        reject(err);
        return ToastAndroid.showWithGravityAndOffset(
          error.response.data.errors[0],
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      });
  });
};
