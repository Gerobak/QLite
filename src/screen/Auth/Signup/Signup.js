import React, { Component } from "react";
import {
  Icon,
  Container,
  Content,
  Text,
  Form,
  Item,
  Input,
  Button,
  Spinner
} from "native-base";
import { View, TouchableOpacity, Alert } from "react-native";
import { CheckBox } from "react-native-elements";
import globalStyles, { height, colors } from ":../../../assets/styles/global";
import styles from "./SignupStyle";
import { connect } from "react-redux";
import { signUpUser } from "../../../actions/signup";

export class Signup extends Component {
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      phone: "",
      terms: false,
      errors: []
    };
  }

  onChangeValue = (key, val) => {
    this.setState({
      [key]: val
    });
  };

  handleError = error => {
    this.setState({ errors: error });
  };

  handleSignUp = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
      phone
    } = this.state;
    this.props
      .signUpUser({
        firstName,
        lastName,
        email,
        password,
        passwordConfirmation,
        phone
      })
      .then(() => {
        Alert.alert("Signup Successfully");
        this.props.navigation.navigate("Login");
      })
      .catch(error => {
        return this.handleError(error);
      });
  };

  render() {
    return (
      <Container>
        <Content>
          <View style={globalStyles.centerContainer}>
            <Icon
              style={{ fontSize: 100 }}
              name="minecraft"
              type="MaterialCommunityIcons"
            />
            <View
              style={{
                width: "85%",
                paddingVertical: 5
              }}
            >
              <Form>
                <Item rounded style={styles.formInput}>
                  <Input
                    placeholder="First Name"
                    placeholderTextColor={colors.DARK_BLUE}
                    onChangeText={val => this.onChangeValue("firstName", val)}
                  />
                </Item>
                <Item rounded style={styles.formInput}>
                  <Input
                    placeholder="Last Name"
                    placeholderTextColor={colors.DARK_BLUE}
                    onChangeText={val => this.onChangeValue("lastName", val)}
                  />
                </Item>
                <Item rounded style={styles.formInput}>
                  <Input
                    placeholder="Email"
                    placeholderTextColor={colors.DARK_BLUE}
                    onChangeText={val => this.onChangeValue("email", val)}
                  />
                </Item>
                <Item rounded style={styles.formInput}>
                  <Input
                    placeholder="Password"
                    placeholderTextColor={colors.DARK_BLUE}
                    secureTextEntry={true}
                    onChangeText={val => this.onChangeValue("password", val)}
                  />
                </Item>
                <Item rounded style={styles.formInput}>
                  <Input
                    placeholder="Re-Type Password"
                    placeholderTextColor={colors.DARK_BLUE}
                    secureTextEntry={true}
                    onChangeText={val =>
                      this.onChangeValue("passwordConfirmation", val)
                    }
                  />
                </Item>
                <Item rounded style={styles.formInput}>
                  <Text style={{ color: colors.DARK_BLUE, marginLeft: 10 }}>
                    +62
                  </Text>
                  <Input
                    placeholderTextColor={colors.DARK_BLUE}
                    keyboardType="numeric"
                    maxLength={13}
                    onChangeText={val => this.onChangeValue("phone", val)}
                  />
                </Item>
                <CheckBox
                  title="Accept Terms & Condition"
                  checked={this.state.terms}
                  onPress={() => this.setState({ terms: !this.state.terms })}
                />
                <Button
                  onPress={() => this.handleSignUp()}
                  disabled={!this.state.terms}
                  style={[
                    styles.formInput,
                    !this.state.terms ? styles.btnDisable : styles.btnLogin
                  ]}
                >
                  {this.props.isLoading ? (
                    <Spinner color="whi, /* : */te" />
                  ) : (
                    <Text style={globalStyles.font}>SIGNUP</Text>
                  )}
                </Button>
              </Form>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth, signup }) => ({
  isLoading: signup.loading,
  errorMessage: auth.errorMessage
});

const mapDispatchToProps = dispatch => ({
  signUpUser: user => dispatch(signUpUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
