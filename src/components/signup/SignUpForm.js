import {
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useCallback, useReducer } from "react";
import SubmitButton from "../submitButton/SubmitButton";
import { validateInput } from "../../utils/actions/formActions";
import { reducer } from "../../utils/reducers/formReducers";
import { initialRegisterState } from "../../utils/initialState";
import { signUp } from "../../utils/actions/authActions";
import colors from "../../constants/colors";
import { useDispatch, useSelector } from "react-redux";

import { Input } from '../../components'
import styles from './Styles'

const SignUpForm = (props) => {
  const dispatch = useDispatch();

  const [error, setError] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
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
      const action = signUp(
        formState.inputValues.firstName,
        formState.inputValues.lastName,
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
        autoCaptalize="none"
        id="firstName"
        label="First name"
        icon="user"
        placeholder="ram"
        onInputChange={inputChangeHandler}
        errorText={formState.inputValidities["firstName"]}
      />
      <Input
        id="lastName"
        label="Last name"
        icon="user"
        placeholder="goswami"
        onInputChange={inputChangeHandler}
        errorText={formState.inputValidities["lastName"]}
      />
      <Input
        id="email"
        label="Email"
        icon="mail"
        placeholder="skg@gmail.com"
        keyboardType="email-address"
        onInputChange={inputChangeHandler}
        errorText={formState.inputValidities["email"]}
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        autoCaptalize="none"
        secureTextEntry
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
          tittle="Sign up"
          disabled={!!formState.formIsValid}
          onPress={authHandler}
          style={{ marginTop: 20 }}
        />
      )}
    </>
  );
};

export default SignUpForm;


