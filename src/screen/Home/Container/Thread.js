import React, { Component } from "react";
import { View, Text } from "react-native";
import { Container, Tabs, Tab, Content, ScrollableTab } from "native-base";
import Swiper from "react-native-swiper";

class Thread extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Headlines">
            <Content>
              <View style={{ height: 150 }}>
                <Swiper autoplay>
                  <View>
                    <Text>asd</Text>
                  </View>

                  <View>
                    <Text>asd</Text>
                  </View>
                  <View>
                    <Text>asd</Text>
                  </View>

                  <View>
                    <Text>asd</Text>
                  </View>

                  <View>
                    <Text>asd</Text>
                  </View>
                </Swiper>
              </View>
            </Content>
          </Tab>
          <Tab heading="Business">
            <View>
              <Text>bus</Text>
            </View>
          </Tab>
          <Tab heading="Health">
            <View>
              <Text>enter</Text>
            </View>
          </Tab>
          <Tab heading="Science">
            <View>
              <Text>heal</Text>
            </View>
          </Tab>
          <Tab heading="Entertainment">
            <View>
              <Text>scie</Text>
            </View>
          </Tab>
          <Tab heading="Sport">
            <View>
              <Text>sport</Text>
            </View>
          </Tab>
          <Tab heading="Technology">
            <View>
              <Text>asd</Text>
            </View>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default Thread;
