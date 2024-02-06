import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { ProfileImage } from "../";
import styles from "./Styles";
const DataItem = (props) => {
  const { title, subTitle, image } = props;

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <ProfileImage uri={image} size={1} />
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.subTitle}>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DataItem;

