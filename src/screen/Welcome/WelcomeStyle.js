import { StyleSheet } from "react-native";
import { height, colors } from "../../assets/styles/global";

const styles = StyleSheet.create({
  headerImg: {
    width: "100%",
    height: height * 0.375,
    marginBottom: "5%"
  },
  heading: {
    color: colors.DARK_BLUE,
    fontSize: 25
  },
  logo: {
    width: "80%",
    height: height * 0.2,
    marginBottom: "5%"
  },
  btnLogin: {
    padding: 12,
    borderRadius: 20,
    backgroundColor: colors.BLUE_V1,
    width: "47.5%",
    alignItems: "center"
  },
  btnSignup: {
    padding: 10,
    borderRadius: 20,
    borderColor: colors.BLUE_V1,
    width: "47.5%",
    alignItems: "center",
    borderWidth: 1
  }
});

export default styles;
