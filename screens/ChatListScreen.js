import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const ChatListScreen = (props) => {
  console.log("hi there123");
  return (
    <View style={styles.text}>
      <Text>ChatListScreen</Text>
      <Button
        title="Go to Chat screen"
        onPress={() => props.navigation.navigate("ChatScreen")}
      />
    </View>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
