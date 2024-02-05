import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../../constants/colors";

import { ProfileImage } from "../";

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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 7,
    borderBottomColor: colors.extralightGrey,
    borderBottomWidth: 1,
    alignItems: "center",
    minHeight: 50,
  },
  textContainer: {
    marginLeft: 15,
  },
  title: {
    fontFamily: "medium",
    fontSize: 16,
    letterSpacing: 0.3,
  },
  subTitle: {
    fontFamily: "regular",
    color: colors.grey,
    letterSpacing: 0.3,
  },
});
