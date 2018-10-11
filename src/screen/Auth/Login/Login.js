import {
  Button,
  Container,
  Form,
  Text,
  View,
  Icon,
  Item,
  Input
} from "native-base";
import React, { Component } from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import globalStyles, { colors } from "../../../assets/styles/global";
import styles from "./LoginStyle";

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      invalidEmail: false,
      invalidPassword: false,
      unVisible: true
    };
  }

  componentDidMount = () => {
    this.props.navigation.addListener("willFocus", () => {
      StatusBar.setBackgroundColor(colors.BLUE_V1, true);
    });
  };

  onChangeValue = (key, val) => {
    this.setState({
      [key]: val
    });
  };

  onPressLogin = () => {
    const { email, password } = this.state;
    if (email && password) {
      this.setState({
        invalidEmail: false,
        invalidPassword: false
      });
      // this.props
      //   .loginAuth({ email, password })
      //   .then(() => {
      //     this.props.navigation.navigate("Home");
      //   })
      //   .catch(error => {
      //     this.handleError(error);
      //   });
    } else {
      if (!email) {
        this.setState({
          invalidEmail: true
        });
      } else {
        this.setState({
          invalidEmail: false
        });
      }

      if (!password) {
        this.setState({
          invalidPassword: true
        });
      } else {
        this.setState({
          invalidPassword: false
        });
      }
    }
  };

  render() {
    const { invalidEmail, invalidPassword, unVisible } = this.state;
    return (
      <Container>
        <StatusBar />
        <View style={styles.container}>
          <Icon
            style={{ fontSize: 150 }}
            name="minecraft"
            type="MaterialCommunityIcons"
          />
          <Text style={{ color: colors.BLUE_V1, fontSize: 45 }}>
            Quartz Lite
          </Text>
          <View style={styles.form}>
            <Form>
              <Item style={styles.formInput} rounded error={invalidEmail}>
                <Icon
                  style={{ color: colors.BLUE_V1 }}
                  name="account-outline"
                  type="MaterialCommunityIcons"
                />
                <Input
                  placeholder="Email"
                  placeholderTextColor={colors.DARK_BLUE}
                  style={[
                    { color: invalidEmail ? "#f52740" : colors.DARK_BLUE }
                  ]}
                  onChangeText={val => this.onChangeValue("email", val)}
                />
              </Item>
              {invalidEmail ? (
                <Text
                  style={[globalStyles.errorWrapper, globalStyles.defaultFont]}
                >
                  Email should not be empty!
                </Text>
              ) : null}
              <Item rounded style={styles.formInput} error={invalidPassword}>
                <Icon
                  style={{ color: colors.BLUE_V1 }}
                  name="lock"
                  type="Feather"
                />
                <Input
                  placeholderTextColor={colors.DARK_BLUE}
                  placeholder="Kata Sandi"
                  returnKeyType="done"
                  autoCapitalize="none"
                  secureTextEntry={unVisible}
                  style={[
                    { color: invalidEmail ? "#f52740" : colors.DARK_BLUE }
                  ]}
                  onChangeText={val => this.onChangeValue("password", val)}
                />
                <Icon
                  style={{ color: colors.DARK_BLUE }}
                  name={unVisible ? "eye" : "eye-off"}
                  type="Feather"
                  onPress={() =>
                    this.setState({ unVisible: !this.state.unVisible })
                  }
                />
              </Item>
              {invalidPassword ? (
                <Text
                  style={[globalStyles.errorWrapper, globalStyles.defaultFont]}
                >
                  Password should not be empty!
                </Text>
              ) : null}
              <TouchableOpacity
                onPress={() =>
                  // this.props.screenProps.rootNavigation.navigate(
                  //   "ForgotPasswordScreen"
                  // )
                  console.log("Forgoten pass")
                }
              >
                <Text style={styles.forgotPasswordWrapper}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
              <Button
                onPress={() => this.onPressLogin()}
                disabled={this.props.isLoading}
                style={[styles.formInput, styles.btnLogin]}
              >
                <Text style={globalStyles.font}>LOGIN</Text>
              </Button>
            </Form>
            <View style={styles.row}>
              <View style={styles.row3} />
              <View style={{ width: "30%" }}>
                <Text style={{ textAlign: "center", color: colors.BLUE_V1 }}>
                  OR
                </Text>
              </View>
              <View style={styles.row2} />
            </View>
            <Button style={[styles.formInput, styles.btnSignup]}>
              <Text style={[globalStyles.font, { color: colors.BLUE_V1 }]}>
                SIGNUP
              </Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

export default Login;
