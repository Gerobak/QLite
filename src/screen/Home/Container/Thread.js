import React, { Component } from "react";
import { View, Text, Image, FlatList } from "react-native";
import {
  Container,
  Tabs,
  Tab,
  Content,
  ScrollableTab,
  Button
} from "native-base";
import Swiper from "react-native-swiper";
import { connect } from "react-redux";
import { newsTopHeadline } from "../../../actions/thread";

class Thread extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props
      .newsTopHeadline()
      .then(data => {})
      .catch(err => {
        console.log("err", err);
      });
  };

  renderSwiper = () => {
    let arr = [];
    dataSource = this.props.dataNews || [];
    dataSource.map(article => {
      arr.push(<Text>{article.urlToImage}</Text>);
    });
    return arr;
  };

  render() {
    return (
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Headlines">
            <Content>
              <View style={{ height: 150 }}>
                <Swiper autoplay>{this.renderSwiper()}</Swiper>
              </View>
              <View />
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
