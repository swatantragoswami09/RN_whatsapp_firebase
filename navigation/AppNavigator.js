import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./MainNavigator";

import AuthScreen from "../screens/AuthScreen";
import ChatScreen from "../screens/ChatScreen";
import ChatSettingsScreen from "../screens/ChatSettingsScreen";

const AppNavigator = (props) => {
  const isAuth = false;
  return (
    <NavigationContainer>
      {isAuth && <MainNavigator />}
      {!isAuth && <AuthScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
