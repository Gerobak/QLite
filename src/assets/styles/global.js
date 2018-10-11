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

const globalStyles = StyleSheet.create({
  font: {
    fontFamily: "NIKOLETA"
  }
});

export default globalStyles;
