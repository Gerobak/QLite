import { LOGIN_START, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from "./const/auth";
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

export const logout = () => ({
  type: LOGOUT
});
