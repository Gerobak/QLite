import { createStackNavigator } from "react-navigation";
import SplashScreen from "../screen/SplashScreen/";
import Login from "../screen/Auth/Login";
import Signup from "../screen/Auth/Signup";

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
    }
  },
  { initialRouteName: "Signup" }
);

export default Root;
