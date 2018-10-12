import { View, Image, InteractionManager, StatusBar } from "react-native";
import React, { PureComponent } from "react";
import globalStyles, { colors } from "../../assets/styles/global";
import { connect } from "react-redux";
import { StackActions, NavigationActions } from "react-navigation";
import { Icon } from "native-base";

class SplashScreen extends PureComponent {
  static navigationOptions = {
    header: null
  };

  state = {
    ready: false
  };

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ ready: true });
      if (this.props.isLogin) {
        return this.onResetNav("Home");
      } else {
        return this.onResetNav("Welcome");
      }
    });
  }

  onResetNav(routeName) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: routeName })]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    if (!this.state.ready || this.state.ready == null) {
      return <View style={globalStyles.alignCenterContainer} />;
    }
    return (
      <View style={globalStyles.centerContainer}>
        <StatusBar backgroundColor={colors.BLUE_V1} />
        <Image
          source={require("../../assets/img/metal2.jpg")}
          style={globalStyles.splashScreenLogo}
          resizeMethod="resize"
          resizeMode="contain"
        />
        <Icon
          name="minecraft"
          type="MaterialCommunityIcons"
          style={{ fontSize: 150 }}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  isLogin: auth.isLogin
});

export default connect(mapStateToProps)(SplashScreen);
