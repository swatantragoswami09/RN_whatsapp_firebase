import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useReducer, useState } from "react";

import { validateInput } from "../../utils/actions/formActions";
import { reducer } from "../../utils/reducers/formReducers";
import { initialRegisterState } from "../../utils/initialState";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../constants/colors";
import {
  updateSignedInUserData,
  userLogout,
} from "../../utils/actions/authActions";
import { updateLoggedInUserData } from "../../store/authSlice";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import { ProfileImage, SubmitButton } from "../../components";

import { Input, PageContainer, PageTitle } from '../../components'

const SettingScreen = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);

  const initialState = {
    inputValues: {
      firstName: userData.firstName || "",
      lastName: userData.lastName || "",
      email: userData.email || "",
      about: userData.about || "",
    },
    inputValidities: {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      password: undefined,
      about: undefined,
    },
    formIsValid: false,
  };

  console.log("userData=>", userData);
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

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
  const saveHandler = useCallback(async () => {
    const updatedValues = formState.inputValues;
    console.log(updatedValues);
    try {
      setIsLoading(true);
      await updateSignedInUserData(userData.userId, updatedValues);
      dispatch(updateLoggedInUserData({ newData: updatedValues }));
      console.log("userData=>", userData);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [formState, dispatch]);

  return (
    <PageContainer>
      <PageTitle>Settings</PageTitle>
      <ScrollView>
        <ProfileImage
          size={80}
          userId={userData.userId}
          uri={userData.profilePicture}
          showEditButton={true}
        />
        <Input
          autoCaptalize="none"
          id="firstName"
          label="First name"
          icon="user"
          placeholder="ram"
          onInputChange={inputChangeHandler}
          errorText={formState.inputValidities["firstName"]}
          initialValue={userData.lastName}
        />
        <Input
          id="lastName"
          label="Last name"
          icon="user"
          placeholder="goswami"
          onInputChange={inputChangeHandler}
          errorText={formState.inputValidities["lastName"]}
          initialValue={userData.firstName}
        />
        <Input
          id="email"
          label="Email"
          icon="mail"
          placeholder="skg@gmail.com"
          keyboardType="email-address"
          onInputChange={inputChangeHandler}
          errorText={formState.inputValidities["email"]}
          initialValue={userData.email}
        />
        <Input
          id="about"
          label="about"
          icon="book"
          placeholder="goswami"
          onInputChange={inputChangeHandler}
          errorText={formState.inputValidities["lastName"]}
        />
        {showSuccessMessage && <Text>Saved!</Text>}
        {isLoading ? (
          <ActivityIndicator
            size={"small"}
            color={colors.primary}
            style={{ marginTop: 10 }}
          />
        ) : (
          <></>
          // <SubmitButton
          //   tittle="Save"
          //   onPress={saveHandler}
          //   style={{ marginTop: 20 }}
          //   disabled={!!formState.formIsValid}
          // />
        )}
        <SubmitButton
          tittle="logout"
          onPress={() => dispatch(userLogout())}
          style={{ marginTop: 20 }}
          color={colors.red}
        />
      </ScrollView>
    </PageContainer>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
