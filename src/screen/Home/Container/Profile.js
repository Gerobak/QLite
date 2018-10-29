import React, { Component } from "react";
import { View, Text } from "react-native";
import { Container, Button } from "native-base";
import { connect } from "react-redux";
import { colors } from "../../../assets/styles/global";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <View>
          <Text> welcome {this.props.user.username} </Text>
          <Button
            style={{
              backgroundColor: colors.BLUE_V1,
              width: "30%",
              justifyContent: "center"
            }}
            onPress={() => this.signOutBtn()}>
            <Text style={{ color: colors.WHITE }}>Logout</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.userData.data.data
});

const mapDispatchToProps = dispatch => ({
  logout: usd => dispatch(signOut(usd))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
