import { createStackNavigator } from "react-navigation";
import SplashScreen from "../screen/SplashScreen/index";
import Login from "../screen/Auth/Login";

const Root = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen
    },
    Login: {
      screen: Login
    }
  },
  { initialRouteName: "Login" }
);

export default Root;
