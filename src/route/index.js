import { createStackNavigator } from "react-navigation";
import SplashScreen from "../screen/SplashScreen/";
import Login from "../screen/Auth/Login";
import Signup from "../screen/Auth/Signup";
import Home from "../screen/Home";
import Welcome from "../screen/Welcome";

const Root = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen
    },
    Login: {
      screen: Login
    },
    Signup: {
      screen: Signup
    },
    Home: {
      screen: Home
    },
    Welcome: {
      screen: Welcome
    }
  },
  {
    initialRouteName: "SplashScreen"
  }
);

export default Root;
