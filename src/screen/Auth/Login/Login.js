import {
  Button,
  Container,
  Form,
  Text,
  View,
  Icon,
  Item,
  Input,
  Content,
  Spinner
} from "native-base";
import React, { Component } from "react";
import { connect } from "react-redux";
import { StatusBar, TouchableOpacity, InteractionManager } from "react-native";
import globalStyles, { colors, fonts } from "../../../assets/styles/global";
import styles from "./LoginStyle";
import { loginAuth } from "../../../actions/auth";

class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: { borderBottomWidth: 0, elevation: 0 },
    headerLeft: <View />,
    headerRight: (
      <View style={{ marginRight: 15 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" type="EvilIcons" />
        </TouchableOpacity>
      </View>
    )
  });

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      invalidEmail: false,
      invalidPassword: false,
      unVisible: true,
      errors: []
    };
  }

  componentDidMount = () => {
    this.props.navigation.addListener("willFocus", () => {
      StatusBar.setBackgroundColor(colors.BLUE_V1, true);
      InteractionManager.runAfterInteractions(() =>
        this.setState({ ready: true })
      );
    });
  };

  onChangeValue = (key, val) => {
    this.setState({
      [key]: val
    });
  };

  handleError = error => {
    this.setState({ errors: error });
  };

  onPressLogin = () => {
    const { email, password } = this.state;
    if (email && password) {
      this.setState({
        invalidEmail: false,
        invalidPassword: false
      });
      this.props
        .loginAuth({ email, password })
        .then(() => {
          this.props.navigation.navigate("Home");
        })
        .catch(error => {
          this.handleError(error);
        });
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
        <Content>
          <View style={styles.container}>
            <Icon
              style={{ fontSize: 150 }}
              name="minecraft"
              type="MaterialCommunityIcons"
            />
            <Text
              style={{
                color: colors.BLUE_V1,
                fontSize: 45,
                fontFamily: fonts.nikoleta
              }}
            >
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
                    autoCapitalize="none"
                    placeholderTextColor={colors.DARK_BLUE}
                    style={[
                      { color: invalidEmail ? "#f52740" : colors.DARK_BLUE }
                    ]}
                    onChangeText={val => this.onChangeValue("email", val)}
                  />
                </Item>
                {invalidEmail ? (
                  <Text
                    style={[
                      globalStyles.errorWrapper,
                      globalStyles.defaultFont
                    ]}
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
                    placeholder="Password"
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
                    style={[
                      globalStyles.errorWrapper,
                      globalStyles.defaultFont
                    ]}
                  >
                    Password should not be empty!
                  </Text>
                ) : null}
                <TouchableOpacity
                  disabled={this.props.isLoading}
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
                  {this.props.isLoading ? (
                    <Spinner color="white" />
                  ) : (
                    <Text style={globalStyles.font}>LOGIN</Text>
                  )}
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
              <Button
                onPress={() => this.props.navigation.navigate("Signup")}
                disabled={this.props.isLoading}
                style={[styles.formInput, styles.btnSignup]}
              >
                <Text style={[globalStyles.font, { color: colors.BLUE_V1 }]}>
                  SIGNUP
                </Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  isLoading: auth.isLoading,
  errorMessage: auth.errorMessage
});

const mapDispatchToProps = dispatch => ({
  loginAuth: user => dispatch(loginAuth(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
