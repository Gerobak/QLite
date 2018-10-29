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
<<<<<<< HEAD
  { initialRouteName: "Login" }
=======
  {
    initialRouteName: "SplashScreen"
  }
>>>>>>> 9b087711c819482d416188a0c3cd97c47fadeb75
);

export default Root;
