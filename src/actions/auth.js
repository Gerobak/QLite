import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_START,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS
} from "./const/auth";
import axios from "axios";
import { ToastAndroid } from "react-native";

const loginStart = () => ({
  type: LOGIN_START
});
const loginFailed = error => ({
  type: LOGIN_FAILED,
  payload: error
});
const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data
});

const logoutStart = () => ({
  type: LOGOUT_START
});
const logoutFailed = error => ({
  type: LOGOUT_FAILED,
  payload: error
});
const logoutSuccess = data => ({
  type: LOGOUT_SUCCESS,
  payload: data
});

export const loginAuth = ({ email, password }) => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(loginStart());
    return axios
      .post("https://xynergy-trav.herokuapp.com/api/v1/users/sign_in", {
        email: email,
        password: password
      })
      .then(res => {
        dispatch(loginSuccess(res));
        return resolve(true);
      })
      .catch(error => {
        dispatch(loginFailed(error));
        reject(error.response.data.errors);
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

export const signOut = ({ client, token, uid }) => dispatch => {
  console.log(uid);
  dispatch(logoutStart());
  return axios
    .delete("https://xynergy-trav.herokuapp.com/api/v1/users/sign_out", {
      headers: {
        Uid: uid
      }
    })
    .then(res => {
      dispatch(logoutSuccess(res));
      return res;
    })
    .catch(error => {
      dispatch(logoutFailed(error.response));
    });
};
