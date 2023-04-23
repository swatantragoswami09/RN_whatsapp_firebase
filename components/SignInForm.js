import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useReducer } from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import colors from "../constants/colors";
import {
  validateEmail,
  validatePassword,
  validateString,
} from "../utils/validationConstraints";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducers";
import { initialLoginState } from "../utils/initialState";
import { signIn } from "../utils/actions/authActions";
import { useDispatch } from "react-redux";


const SignInForm = (props) => {
  const dispatch = useDispatch();
  const [error, setError] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [formState, dispatchFormState] = useReducer(reducer, initialLoginState);
  console.log("formState=>", formState);

  const inputChangeHandler = useCallback(
    async (inputId, inputValue) => {
      const result = await validateInput(inputId, inputValue);
      console.log("result=>", result);
      dispatchFormState({
        inputId,
        validationResult: result,
        inputValue,
      });
    },
    [dispatchFormState]
  );
  React.useEffect(() => {
    if (error) {
      Alert.alert("An error occured", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const authHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      console.log(formState.inputValues);
      const action = signIn(
        formState.inputValues.email,
        formState.inputValues.password
      );
      setError(null);
      await dispatch(action);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, [dispatch, formState]);

  return (
    <>
      <Input
        id="email"
        label="Email"
        keyboardType="email-address"
        icon="mail"
        onInputChange={inputChangeHandler}
        errorText={formState.inputValidities["email"]}
      />
      <Input
        id="password"
        label="Password"
        autoCaptalize="none"
        secureTextEntry
        icon="lock"
        onInputChange={inputChangeHandler}
        errorText={formState.inputValidities["password"]}
      />
      {isLoading ? (
        <ActivityIndicator
          size={"small"}
          color={colors.primary}
          style={{ marginTop: 10 }}
        />
      ) : (
        <SubmitButton
          tittle="Sign in"
          onPress={authHandler}
          style={{ marginTop: 20 }}
          disabled={!!formState.formIsValid}
        />
      )}
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
