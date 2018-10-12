import { StyleSheet } from "react-native";
import { height, colors } from "../../../assets/styles/global";

const styles = StyleSheet.create({
  form: {
    width: "85%",
    paddingVertical: 5
  },
  formInput: {
    borderWidth: 1,
    borderColor: "#2980b9",
    borderRadius: 12,
    marginVertical: height * 0.01
  },
  btnLogin: {
    width: "100%",
    justifyContent: "center",
    borderWidth: 0,
    backgroundColor: colors.DARK_BLUE
  },
  btnDisable: {
    width: "100%",
    justifyContent: "center",
    borderWidth: 0,
    backgroundColor: "#70b1dc"
  }
});

export default styles;
