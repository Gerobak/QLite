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
            style={{
              width: "100%",
              height: height * 0.375,
              marginBottom: "5%"
            }}
            resizeMethod="resize"
            resizeMode="cover"
          />
          <Text
            style={[
              globalStyles.font,
              { color: colors.DARK_BLUE, fontSize: 25 }
            ]}
          >
            WELCOME TO QUARTZ LITE!
          </Text>

          <Image
            source={require("../../assets/img/metal2.jpg")}
            style={{
              width: "80%",
              height: height * 0.2,
              marginBottom: "5%"
            }}
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
              style={{
                padding: 12,
                borderRadius: 20,
                backgroundColor: colors.BLUE_V1,
                width: "47.5%",
                alignItems: "center"
              }}
            >
              <Text style={{ color: colors.WHITE }}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.navigate("Signup")}
              style={{
                padding: 10,
                borderRadius: 20,
                borderColor: colors.BLUE_V1,
                width: "47.5%",
                alignItems: "center",
                borderWidth: 1
              }}
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
