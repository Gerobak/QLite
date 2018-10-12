import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export const height = screenHeight < screenWidth ? screenWidth : screenHeight;
export const width = screenWidth < screenHeight ? screenWidth : screenHeight;

export const colors = {
  BLUE_V1: "#3498db",
  DARK_BLUE: "#2980b9",
  WHITE: "#fff"
};

export const fonts = {
  nikoleta: "NIKOLETA",
  craftReg: "Crafter-Regular",
  craftRough: "Crafter-Rough"
};

const globalStyles = StyleSheet.create({
  font: {
    fontFamily: fonts.nikoleta,
    fontSize: 20
  },
  defaultFont: {
    fontFamily: fonts.craftReg,
    fontSize: 12
  },
  errorWrapper: {
    textAlign: "right",
    marginTop: 10,
    marginBottom: 10,
    color: "#f52740",
    fontSize: 11
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  alignCenterContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white
  }
});

export default globalStyles;
