import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import styles from './Styles'

const SubmitButton = (props) => {
  console.log("props.disabled =>", props.disabled);
  const enabledbgColor = props.color || colors.primary;
  const disaledByColor = colors.lightGrey;
  const bgColor = props.disabled ? disaledByColor : enabledbgColor;
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...props.style,
        ...{ backgroundColor: bgColor },
      }}
      onPress={props.disabled ? () => { } : props.onPress}
    >
      <Text style={{ color: props.disabled ? colors.grey : "white" }}>
        {props.tittle}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;