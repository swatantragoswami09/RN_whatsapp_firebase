import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { validate } from "validate.js";
import {
  validateEmail,
  validatePassword,
  validateString,
} from "../utils/validationConstrats";
import { validateInput } from "../utils/actions/formActions";

const SignUpForm = (props) => {
  const inputChangeHandler = (inputId, inputValue) => {
    console.log("hi there");
    validateInput(inputId, inputValue);
  };
  return (
    // <View style={styles.container}>
    //   </View>
    <>
      <Input
        autoCaptalize="none"
        id="firstName"
        label="First name"
        icon="user"
        onInputChange={inputChangeHandler}
      />
      <Input
        id="lastName"
        label="Last name"
        icon="user"
        onInputChange={inputChangeHandler}
      />
      <Input
        id="email"
        label="Email"
        icon="mail"
        keyboardType="email-address"
        onInputChange={inputChangeHandler}
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        autoCaptalize="none"
        secureTextEntry
        onInputChange={inputChangeHandler}
      />
      <SubmitButton
        tittle="Sign up"
        disabled={false}
        onPress={() => console.log("button pressed")}
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
