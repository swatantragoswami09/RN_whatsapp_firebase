import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import colors from "../constants/colors";
import { Feather } from "@expo/vector-icons";

const Input = (props) => {
  console.log("id=>", props.id);
  const onChangeText = (text) => {
    props.onInputChange(props.id, text);
  };
  return (
    <>
      <Text style={styles.label}>{props.label}</Text>

      <View style={styles.inputContainer}>
        <Feather
          name={props.icon}
          size={24}
          color="black"
          style={styles.icon}
        />
        <TextInput
          // {...props}
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          placeholder={props.placeholder}
        />

        {props.errorText && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{props.errorText}</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: colors.nearlyWhite,
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
    color: colors.grey,
  },
  label: {
    marginVertical: 8,
    fontFamily: "bold",
    letterSpacing: 0.3,

    color: colors.textColor,
  },
  input: {
    color: colors.textColor,
    flex: 1,
    fontFamily: "regular",

    letterSpacing: 0.3,
    paddingTop: 0,
  },
  errorContainer: {
    marginTop: 5,
  },
  errorText: {
    color: "red",
    fontSize: 13,
    fontFamily: "regular",
    letterSpacing: 0.3,
  },
});
