import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import { Platform } from "react-native";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import HomeContainer from "../../../screen/Home/Container/Home";
import Feed from "../../../screen/Home/Container/Feed";
import Thread from "../../../screen/Home/Container/Thread";
import Event from "../../../screen/Home/Container/Event";
import Profile from "../../../screen/Home/Container/Profile";
import { colors } from "../../styles/global";

export default (MainScreenNavigator = TabNavigator(
  {
    Home: {
      screen: HomeContainer
    },
    Feed: {
      screen: Feed
    },
    Thread: {
      screen: Thread
    },
    Event: {
      screen: Event
    },
    Profile: {
      screen: Profile
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer style={{ backgroundColor: "white", marginBottom: -2 }}>
          <FooterTab style={{ backgroundColor: "white" }}>
            <Button
              vertical
              style={{
                backgroundColor:
                  props.navigationState.index === 0 ? colors.BLUE_V1 : "white"
              }}
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Home")}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              style={{
                backgroundColor:
                  props.navigationState.index === 1 ? colors.BLUE_V1 : "white"
              }}
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Feed")}>
              <Icon name="feed" type="SimpleLineIcons" />
              <Text>Feed</Text>
            </Button>
            <Button
              vertical
              style={{
                backgroundColor:
                  props.navigationState.index === 2 ? colors.BLUE_V1 : "white"
              }}
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Thread")}>
              <Icon name="newspaper-o" type="FontAwesome" />
              <Text>Thread</Text>
            </Button>
            <Button
              vertical
              style={{
                backgroundColor:
                  props.navigationState.index === 3 ? colors.BLUE_V1 : "white"
              }}
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("Event")}>
              <Icon name="event-available" type="MaterialIcons" />
              <Text>Event</Text>
            </Button>
            <Button
              vertical
              style={{
                backgroundColor:
                  props.navigationState.index === 4 ? colors.BLUE_V1 : "white"
              }}
              active={props.navigationState.index === 4}
              onPress={() => props.navigation.navigate("Profile")}>
              <Icon name="face-profile" type="MaterialCommunityIcons" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
    tabBarOptions: {
      activeTintColor: colors.WHITE,
      activeBackgroundColor: colors.DARK_BLUE,
      iconStyle: { flex: 1, width: 15, height: 15, padding: 0 },
      // labelStyle: { fontSize: 10, paddingHorizontal: 0 },
      style: {
        backgroundColor:
          Platform.OS === "ios" ? colors.DARK_BLUE : colors.DARK_BLUE,
        marginBottom: Platform.OS == "android" ? -10 : 0,
        // height: Metrics.screenHeight * 0.1,
        borderTopColor: "#fafafa"
        // flex: 1,
      },
      indicatorStyle: {
        flex: 1,
        backgroundColor: colors.DARK_BLUE
      },
      tabStyle: {
        flex: 1,
        backgroundColor: Platform.OS == "android" ? colors.DARK_BLUE : null
      },
      labelStyle: {
        fontSize: 10
      }
    }
  }
));
