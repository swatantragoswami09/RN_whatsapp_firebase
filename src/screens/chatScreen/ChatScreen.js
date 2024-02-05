import {
  Button,
  ImageBackground,
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
import colors from "../../constants/colors";
import { useSelector } from "react-redux";
import { createChat } from "../../utils/actions/chatActions";

import { PageContainer, Bubble } from '../../components'
const ChatScreen = (props) => {
  const userData = useSelector((state) => state.auth.userData);
  const storedUsers = useSelector((state) => state.users.storedUsers);
  const storedChats = useSelector((state) => state.chats.chatsData);

  const [chatUsers, setChatUsers] = React.useState([]);

  const [messageText, setMessageText] = React.useState("");
  const [chatId, setChatId] = React.useState(props.route?.params?.newChatData);

  const chatData =
    (chatId && storedChats(chatId)) || props.route?.params?.newChatData;

  const getChatTitleFromName = () => {
    const otherUserId = chatUsers.find((uid) => uid !== userData.userId);
    const otherUserData = storedUsers[otherUserId];

    return (
      otherUserData && `${otherUserData.firstName} ${otherUserData.lastName}`
    );
  };
  console.log("chatData=>", chatData);
  React.useEffect(() => {
    props.navigation.setOptions({
      headerTitle: getChatTitleFromName(),
    });
    setChatUsers(chatData.users);
  }, [chatUsers]);

  const sendMessage = React.useCallback(async () => {
    try {
      let id = chatId;
      if (id) {
        // No chat Id. Create the chat
        id = await createChat(userData.userId, props.route.params.newChatData);
        console.log("chatId=>", id);
        setChatId(id);
      }
    } catch (error) { }

    setMessageText("");
  }, [messageText, chatId]);

  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={["#f78ca0", "#f9748f", "#fd868c", "#fe9a8b"]}
    >
      <SafeAreaView edges={["right", "left"]} style={styles.container}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={100}
        >
          <LinearGradient
            style={{
              flex: 1,
            }}
            colors={["#1FD1F9", "#f9748f", "#fd868c", "#fe9a8b"]}
          >
            <PageContainer style={{ backgroundColor: "transparent" }}>
              {chatId && (
                <Bubble text="This is a new Chat say hi" type="system" />
              )}
            </PageContainer>
          </LinearGradient>

          <View style={styles.inputContainer}>
            {/* plus button */}
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={() => console.log("Pressed")}
            >
              <AntDesign name="pluscircle" size={24} color={colors.white} />
            </TouchableOpacity>

            {/* Input */}
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
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
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
