import {
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { PageContainer, SignUpForm, SignInForm } from '../../components'
import styles from "./Styles";

const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = React.useState(true);
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={["#F6F6F6", "#BFDFD4", "#448971", "#1D1D1D"]}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <PageContainer>
          <ScrollView>
            <Image
              source={require("../../assets/splash.png")}
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
            <Text style={styles.link}>{`Switch to ${isSignUp ? "sign in" : "sign up"
              }`}</Text>
          </TouchableOpacity>
        </PageContainer>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AuthScreen;
