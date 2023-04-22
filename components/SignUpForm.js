import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useReducer } from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { validate } from "validate.js";
import {
  validateEmail,
  validatePassword,
  validateString,
} from "../utils/validationConstraints";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducers";
import { initialRegisterState } from "../utils/initialState";

const SignUpForm = (props) => {
  const [formState, dispatchFormState] = useReducer(
    reducer,
    initialRegisterState
  );

  console.log("formState=>", formState);
  const inputChangeHandler = useCallback(
    async (inputId, inputValue) => {
      const result = await validateInput(inputId, inputValue);
      console.log("result=>", result);
      dispatchFormState({
        inputId,
        validationResult: result,
      });
    },
    [dispatchFormState]
  );

  return (
    <>
      <Input
        autoCaptalize="none"
        id="firstName"
        label="First name"
        icon="user"
        placeholder="ram"
        onInputChange={inputChangeHandler}
      />
      <Input
        id="lastName"
        label="Last name"
        icon="user"
        placeholder="goswami"
        onInputChange={inputChangeHandler}
      />
      <Input
        id="email"
        label="Email"
        icon="mail"
        placeholder="skg@gmail.com"
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
        disabled={!!formState.formIsValid}
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
