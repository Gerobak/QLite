import React, { Component } from "react";
import { Icon, Container, Content, Text } from "native-base";
import { View, TouchableOpacity, Image } from "react-native";
import globalStyles from "../../../assets/styles/global";

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
  render() {
    return (
      <Container>
        <Content>
          <View style={globalStyles.centerContainer}>
            <Icon
              style={{ fontSize: 150 }}
              name="minecraft"
              type="MaterialCommunityIcons"
            />
            <Text>Signup</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Signup;
