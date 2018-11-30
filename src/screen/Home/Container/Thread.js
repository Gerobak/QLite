import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import {
  Container,
  Tabs,
  Tab,
  Content,
  ScrollableTab,
  Button,
  Card,
  CardItem,
  Left,
  Body,
  H3
} from "native-base";
import Swiper from "react-native-swiper";
import { connect } from "react-redux";
import { newsTopHeadline } from "../../../actions/thread";
import moment from "moment-timezone";
import "moment/locale/id";

class Thread extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgHeadline: []
    };
  }

  componentDidMount = () => {
    this.props
      .newsTopHeadline()
      .then(data => {})
      .catch(err => {
        console.log("err", err);
      });
  };

  render() {
    return (
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Headlines">
            <Content>
              <FlatList
                data={this.props.dataNews}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                  let date = moment(item.publishedAt).locale("id");
                  if (index === 0) {
                    return (
                      <View>
                        <TouchableOpacity
                          onPress={() => console.log("Show Detail")}>
                          <Card>
                            <CardItem>
                              <ImageBackground
                                source={{ uri: item.urlToImage }}
                                style={{ height: 150, flex: 1 }}>
                                <View
                                  style={{
                                    marginHorizontal: 30,
                                    marginTop: 120,
                                    flex: 1,
                                    flexDirection: "row",
                                    display: "flex"
                                  }}>
                                  <View
                                    style={{
                                      backgroundColor: "rgba(0,0,0,0.5)",
                                      display: "flex",
                                      justifyContent: "center",
                                      flexDirection: "row",
                                      width: "100%"
                                    }}>
                                    <Text
                                      style={{
                                        color: "#fff",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        alignItems: "flex-end"
                                      }}>
                                      {item.title}
                                    </Text>
                                  </View>
                                </View>
                              </ImageBackground>
                            </CardItem>
                            <CardItem>
                              <H3
                                style={{
                                  fontSize: 16,
                                  marginTop: -5,
                                  marginBottom: -5,
                                  marginLeft: -5
                                }}>
                                {item.title}
                              </H3>
                            </CardItem>
                            <CardItem>
                              <Text
                                style={{
                                  marginTop: -15,
                                  fontSize: 13,
                                  color: "gray"
                                }}>
                                {item.description
                                  ? `${item.description.substring(0, 135)}...`
                                  : ""}
                              </Text>
                            </CardItem>
                          </Card>
                        </TouchableOpacity>
                      </View>
                    );
                  } else {
                    return (
                      <TouchableOpacity>
                        <Card>
                          <CardItem>
                            <Left>
                              <Image
                                source={{ uri: item.urlToImage }}
                                style={{ height: 100, flex: 1 }}
                              />
                            </Left>
                            <Body
                              style={{
                                marginLeft: 10,
                                marginTop: 10,
                                flex: 1,
                                height: 100
                              }}>
                              <H3 style={{ fontSize: 14 }}>{item.title}</H3>
                              <View
                                style={{
                                  width: "100%",
                                  flex: 1,
                                  flexDirection: "row",
                                  bottom: 0
                                }}>
                                <Text
                                  style={{
                                    marginTop: 5,
                                    position: "absolute",
                                    bottom: 0,
                                    fontSize: 10
                                  }}>
                                  <Text note>{date.format("LL")}</Text>
                                </Text>
                              </View>
                            </Body>
                          </CardItem>
                        </Card>
                      </TouchableOpacity>
                    );
                  }
                }}
              />
            </Content>
          </Tab>
          <Tab heading="Business">
            <View>
              <Text>get</Text>
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

const mapStateToProps = ({ thread }) => ({
  dataNews: thread.dataNews.articles
});

const mapDispatchToProps = dispatch => ({
  newsTopHeadline: news => dispatch(newsTopHeadline(news))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Thread);
