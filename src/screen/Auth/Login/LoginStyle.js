import { StyleSheet } from "react-native";
import { height, colors } from "../../../assets/styles/global";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    width: "85%",
    paddingVertical: 5
  },
  formInput: {
    borderWidth: 1,
    borderColor: "#2980b9",
    borderRadius: 12,
    marginVertical: height * 0.02
  },
  btnLogin: {
    width: "100%",
    justifyContent: "center",
    borderWidth: 0,
    backgroundColor: colors.DARK_BLUE
  },
  btnSignup: {
    width: "100%",
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: colors.WHITE,
    borderColor: colors.DARK_BLUE
  },
  row: {
    width: "100%",
    textAlign: "center",
    marginVertical: height * 0.008,
    flexDirection: "row"
  },
  row2: {
    backgroundColor: colors.DARK_BLUE,
    width: "35%",
    height: 1,
    marginTop: height * 0.01
  },
  row3: {
    backgroundColor: colors.DARK_BLUE,
    width: "35%",
    height: 1,
    marginTop: height * 0.01
  },
  forgotPasswordWrapper: {
    textAlign: "right",
    fontSize: 12,
    color: colors.BLUE_V1,
    marginTop: 25,
    marginBottom: 10,
    marginRight: 10
  }
});

export default styles;
