import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useReducer } from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import colors from "../constants/colors";
import {
  validateEmail,
  validatePassword,
  validateString,
} from "../utils/validationConstrats";
import { validateInput } from "../utils/actions/formActions";

const reducer = (state, action) => {
  const { validationResult } = action;
  state.formIsValid = validationResult === undefined;
  return {
    ...state,
    formIsValid: validationResult === undefined,
  };
};
const initialState = {
  inputValidates: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  },
  formIsValid: false,
};

const SignInForm = (props) => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);
  const inputChangeHandler = (inputId, inputValue) => {
    const result = validateInput(inputId, inputValue);
    dispatchFormState({ validationResult: result });
  };

  return (
    // <View style={styles.container}>
    //   </View>
    <>
      <Input
        // id="email"
        label="Email"
        keyboardType="email-address"
        icon="mail"
        onInputChange={inputChangeHandler}
      />
      <Input
        // id="password"
        label="Password"
        autoCaptalize="none"
        secureTextEntry
        icon="lock"
        onInputChange={inputChangeHandler}
      />
      <SubmitButton
        tittle="Sign up"
        onPress={() => console.log("button pressed")}
        style={{ marginTop: 20 }}
        disabled={!formState.formIsValid}
      />
    </>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  link: {
    forntFamily: "medium",
    letterSpacing: 0.3,
  },
});
