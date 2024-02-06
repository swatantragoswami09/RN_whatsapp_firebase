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
import * as font from './src/utils/FontFamily'

LogBox.ignoreAllLogs();
// AsyncStorage.clear();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsLoaded, setAppIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          black: font.BLACK,
          bold: font.BOLD,
          extraBold: font.EXTRA_BOLD,
          extraLight: font.EXTRA_LIGHT,
          light: font.LIGHT,
          medium: font.MEDIUM,
          regular: font.REGULAR,
          semiBold: font.SEMIBOLD,
          thin: font.THIN,
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
