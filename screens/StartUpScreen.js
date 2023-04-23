import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import colors from "../constants/colors";
import commonStyles from "../constants/commonStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { authentication, setDidTryAutoLogin } from "../store/authSlice";
import { getUserData } from "../utils/actions/userActions";

const StartUpScreen = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const tryLogin = async () => {
      const storedAuthInfo = await AsyncStorage.getItem("userData");
      if (!storedAuthInfo) {
        console.log("No storage found");
        dispatch(setDidTryAutoLogin());
        return;
      }
      const parsedData = JSON.parse(storedAuthInfo);

      const { token, userId, expiryDate: expiryDateString } = parsedData;
      const expiryDate = new Date(expiryDateString);
      if (expiryDate <= new Date() || !token || !userId) {
        dispatch(setDidTryAutoLogin());
        return;
      }
      const userData = await getUserData(userId);
      dispatch(authentication({ token: token, userData }));
    };
    tryLogin();
  }, [dispatch]);

  return (
    <View style={commonStyles.center}>
      <ActivityIndicator size={"large"} color={colors.primary} />
    </View>
  );
};

export default StartUpScreen;

const styles = StyleSheet.create({});
