import React from "react";
import App from "./src";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/store/index";
import globalStyles from "./src/assets/styles/global";
import { View, Image, StatusBar } from "react-native";

const Loading = () => (
  <View style={globalStyles.centerContainer}>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
    <Image
      source={require("./src/assets/img/metal2.jpg")}
      style={globalStyles.splashScreenLogo}
      resizeMethod="resize"
      resizeMode="contain"
    />
  </View>
);

export default () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
