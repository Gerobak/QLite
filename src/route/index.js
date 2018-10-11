import { createStackNavigator } from "react-navigation";
import Login from "../screen/Auth/Login";

const Root = createStackNavigator({
  Login: {
    screen: Login
  }
});

export default Root;
