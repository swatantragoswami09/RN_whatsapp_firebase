import React from "react";
import {
  StyleSheet,
  LogBox,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./src/store/store";


LogBox.ignoreAllLogs();
// AsyncStorage.clear();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsLoaded, setAppIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          black: require("./src/assets/fonts/RobotoSlab-Black.ttf"),
          bold: require("./src/assets/fonts/RobotoSlab-Bold.ttf"),
          extraBold: require("./src/assets/fonts/RobotoSlab-ExtraBold.ttf"),
          extraLight: require("./src/assets/fonts/RobotoSlab-ExtraLight.ttf"),
          light: require("./src/assets/fonts/RobotoSlab-Light.ttf"),
          medium: require("./src/assets/fonts/RobotoSlab-Medium.ttf"),
          regular: require("./src/assets/fonts/RobotoSlab-Regular.ttf"),
          semiBold: require("./src/assets/fonts/RobotoSlab-SemiBold.ttf"),
          thin: require("./src/assets/fonts/RobotoSlab-Thin.ttf"),
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
