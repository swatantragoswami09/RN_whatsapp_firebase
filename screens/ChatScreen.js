import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../constants/colors";

const ChatScreen = () => {
  const [messageText, setMessageText] = React.useState("");

  const sendMessage = React.useCallback(() => {
    setMessageText("");
  }, [messageText]);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}
     behavior={Platform.OS === "ios" ? "padding" : undefined }
     keyboardVerticalOffset={100}
    >
      <LinearGradient
        style={{
          flex: 1,
        }}
        colors={["#f78ca0", "#f9748f", "#fd868c", "#fe9a8b"]}
      >
        <SafeAreaView edges={["right", "left"]}>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={() => console.log("Pressed")}
            >
              <AntDesign name="pluscircle" size={24} color={colors.white} />
            </TouchableOpacity>

            <TextInput
              onChangeText={(text) => setMessageText(text)}
              value={messageText}
              style={styles.textbox}
              onSubmitEditing={sendMessage}
            />

            {messageText === "" && (
              <TouchableOpacity
                style={styles.mediaButton}
                onPress={() => console.log("Pressed")}
              >
                <FontAwesome name="camera" size={24} color={colors.white} />
              </TouchableOpacity>
            )}
            {messageText !== "" && (
              <TouchableOpacity
                style={{ ...styles.mediaButton, ...styles.sendButton }}
                onPress={sendMessage}
              >
                <FontAwesome name="send" size={20} color={colors.white} />
              </TouchableOpacity>
            )}
          </View>
        </SafeAreaView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    // position: "absolute",
    top: "160%",

    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  textbox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGrey,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  mediaButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    // backgroundColor: "black",
  },
  sendButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    padding: 1,
    width: 35,
  },
});
