import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  Settings,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  LogBox,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import "react-native-gesture-handler";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppNavigator from "./navigation/AppNavigator";
import { LinearGradient } from "expo-linear-gradient";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

LogBox.ignoreAllLogs();
// AsyncStorage.clear();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsLoaded, setAppIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          black: require("./assets/fonts/RobotoSlab-Black.ttf"),
          bold: require("./assets/fonts/RobotoSlab-Bold.ttf"),
          extraBold: require("./assets/fonts/RobotoSlab-ExtraBold.ttf"),
          extraLight: require("./assets/fonts/RobotoSlab-ExtraLight.ttf"),
          light: require("./assets/fonts/RobotoSlab-Light.ttf"),
          medium: require("./assets/fonts/RobotoSlab-Medium.ttf"),
          regular: require("./assets/fonts/RobotoSlab-Regular.ttf"),
          semiBold: require("./assets/fonts/RobotoSlab-SemiBold.ttf"),
          thin: require("./assets/fonts/RobotoSlab-Thin.ttf"),
        });
      } catch (error) {
        console.log.error();
      } finally {
        setAppIsLoaded(true);
      }
    };

    prepare();
  }, []);

  const onLayout = React.useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if (!appIsLoaded) return null;

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayout}>
        <AppNavigator />
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "black",
    fontSize: 18,
    fontFamily: "regular",
  },
});
