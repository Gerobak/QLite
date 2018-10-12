import axios from "axios";
import { ToastAndroid } from "react-native";
import { SIGNUP_FAILED, SIGNUP_START, SIGNUP_SUCCESS } from "./const/signup";

const signUpStart = () => ({
  type: SIGNUP_START
});
const signUpFailed = error => ({
  type: SIGNUP_FAILED,
  payload: error
});
const signUpSuccess = data => ({
  type: SIGNUP_SUCCESS,
  payload: data
});
export const signUpUser = ({
  firstName,
  lastName,
  email,
  password,
  passwordConfirmation,
  phone
}) => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(signUpStart());
    return axios
      .post("https://xynergy-trav.herokuapp.com/api/v1/users", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
        telephone: phone.replace("0", "+62")
      })
      .then(response => {
        dispatch(signUpSuccess(response.data));
        return resolve(true);
      })
      .catch(error => {
        dispatch(signUpFailed(error.response.data.errors));
        reject(error.response.data.errors.full_messages);
        return ToastAndroid.showWithGravityAndOffset(
          error.response.data.errors.full_messages[0],
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      });
  });
};
