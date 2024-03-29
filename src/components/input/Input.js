import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import colors from "../../constants/colors";
import { Feather } from "@expo/vector-icons";
import styles from './Styles'

const Input = (props) => {
  const [value, setValue] = useState(props.initialValue);

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
          value={value}
        />

        {props.errorText && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{props.errorText[0]}</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Input;
