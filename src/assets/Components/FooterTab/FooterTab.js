import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import HomeContainer from "../../../screen/Home/Container/Home";
import Feed from "../../../screen/Home/Container/Feed";
import Thread from "../../../screen/Home/Container/Thread";
import Event from "../../../screen/Home/Container/Event";
import Profile from "../../../screen/Home/Container/Profile";
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
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Home")}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Feed")}>
              <Icon name="feed" type="SimpleLineIcons" />
              <Text>Feed</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Thread")}>
              <Icon name="newspaper-o" type="FontAwesome" />
              <Text>Thread</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("Event")}>
              <Icon name="event-available" type="MaterialIcons" />
              <Text>Event</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("Profile")}>
              <Icon name="face-profile" type="MaterialCommunityIcons" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
