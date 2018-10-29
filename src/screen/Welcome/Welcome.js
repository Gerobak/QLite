import React, { PureComponent } from "react";
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import globalStyles, { colors, height } from "../../assets/styles/global";
import { Footer } from "native-base";
import styles from "../Welcome/WelcomeStyle";

export class Welcome extends PureComponent {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };
    this.navigate = props.navigation.navigate;
  }

  componentDidMount() {
    this.props.navigation.addListener("willFocus", () => {
      StatusBar.setBackgroundColor(colors.BLUE_V1, true);
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={[
            globalStyles.alignCenterContainer,
            { backgroundColor: "white" }
          ]}
        >
          <Image
            source={require("../../assets/img/bg.jpg")}
            style={styles.headerImg}
            resizeMethod="resize"
            resizeMode="cover"
          />
          <Text style={[globalStyles.font, styles.heading]}>
            WELCOME TO QUARTZ LITE!
          </Text>

          <Image
            source={require("../../assets/img/metal2.jpg")}
            style={styles.logo}
            resizeMethod="resize"
            resizeMode="contain"
          />
          <Text style={{ marginHorizontal: "10%" }}>
            Contolas Sasingatura Saprawala
          </Text>
          <View
            style={[
              globalStyles.spaceBetweenContainer,
              { paddingHorizontal: "5%", marginTop: height * 0.05 }
            ]}
          >
            <TouchableOpacity
              onPress={() => this.navigate("Login")}
              style={styles.btnLogin}
            >
              <Text style={{ color: colors.WHITE }}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.navigate("Signup")}
              style={styles.btnSignup}
            >
              <Text style={{ color: colors.DARK_BLUE }}>SIGNUP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Welcome;
