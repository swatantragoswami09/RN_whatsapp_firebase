import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";
import { AuthScreen, StartUpScreen } from "../screens";
import { useSelector } from "react-redux";

const AppNavigator = (props) => {
  const isAuth = useSelector(
    (state) => state.auth.token !== null && state.auth.token !== ""
  );
  const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);
  return (
    <NavigationContainer>
      {isAuth && <MainNavigator />}
      {!isAuth && didTryAutoLogin && <AuthScreen />}
      {!isAuth && !didTryAutoLogin && <StartUpScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
