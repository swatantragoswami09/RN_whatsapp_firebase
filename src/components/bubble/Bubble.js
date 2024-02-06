import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import styles from "./Styles"

const Bubble = (props) => {
  const { text, type } = props;
  const bubbleStyle = { ...styles.container };
  const textStyle = { ...styles.text };

  switch (type) {
    case "system":
      textStyle.color = "#656448";
      bubbleStyle.backgroundColor = colors.beige;
      bubbleStyle.alignItems = "center";
      bubbleStyle.marginTop = 10;
      break;

    default:
      break;
  }
  return (
    <View style={styles.wrapperStyle}>
      <View style={bubbleStyle}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </View>
  );
};

export default Bubble;