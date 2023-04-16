import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";

import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import colors from "../constants/colors";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = React.useState(true);
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={["#F6F6F6", "#BFDFD4", "#448971", "#000000"]}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <PageContainer>
          <ScrollView>
            <Image
              source={require("../assets/splash.png")}
              resizeMode="contain"
              style={{ width: 150, height: 150, marginLeft: 95, marginTop: 50 }}
            />
            {isSignUp ? <SignUpForm /> : <SignInForm />}
          </ScrollView>
          <TouchableOpacity
            onPress={() => setIsSignUp((prevState) => !prevState)}
            style={{
              position: "absolute",
              top: isSignUp ? 650 : 455,
              marginLeft: 135,
            }}
          >
            <Text style={styles.link}>{`Switch to ${
              isSignUp ? "sign in" : "sign up"
            }`}</Text>
          </TouchableOpacity>
        </PageContainer>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  link: {
    color: colors.white,
    fontFamily: "medium",
    letterSpacing: 0.3,
  },
});
