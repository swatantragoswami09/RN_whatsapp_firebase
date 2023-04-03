import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./MainNavigator";

import AuthScreen from "../screens/AuthScreen";

const AppNavigator = (props) => {
  const isAuth = true;
  return (
    <NavigationContainer>
      {/* {isAuth && <MainNavigator />} */}
      {isAuth && <AuthScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
