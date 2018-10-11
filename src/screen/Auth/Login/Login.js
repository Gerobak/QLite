import { Button, Container, Form, Text, View, Icon } from "native-base";
import React, { Component } from "react";
import { StatusBar, TextInput } from "react-native";
import globalStyles, { colors } from "../../../assets/styles/global";
import styles from "./LoginStyle";

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.navigation.addListener("willFocus", () => {
      StatusBar.setBackgroundColor(colors.BLUE_V1, true);
    });
  };

  render() {
    return (
      <Container>
        <StatusBar />
        <View style={styles.container}>
          <View style={styles.form}>
            <Form>
              <TextInput
                style={styles.formInput}
                placeholder="Email"
                placeholderTextColor={colors.DARK_BLUE}
              />
              <TextInput
                style={styles.formInput}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor={colors.DARK_BLUE}
              />
              <Icon name="eye" type="Feather" />
              <Button style={[styles.formInput, styles.btnLogin]}>
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
