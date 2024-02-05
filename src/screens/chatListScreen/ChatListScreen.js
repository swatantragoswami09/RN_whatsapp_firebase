import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import { CustomHeaderButton, DataItem, PageContainer, PageTitle } from '../../components'


const ChatListScreen = (props) => {
  const selectedUser = props.route?.params?.selectedUserId;

  const userData = useSelector((state) => state.auth.userData);
  const storedUsers = useSelector((state) => state.users.storedUsers);

  const userChats = useSelector((state) => {
    const chatsData = state.chats.chatsData;
    return Object.values(chatsData).sort((a, b) => {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
  });

  React.useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="New chat"
              iconName="create-outline"
              onPress={() => props.navigation.navigate("NewChat")}
            />
          </HeaderButtons>
        );
      },
    });
  }, []);

  React.useEffect(() => {
    if (!selectedUser) return;
    const chatUsers = [selectedUser, userData.userId];
    const navigationProps = {
      newChatData: { users: chatUsers },
    };
    props.navigation.navigate("ChatScreen", navigationProps);
  }, [props.route?.params]);

  return (
    <PageContainer>
      <PageTitle>Chats</PageTitle>
      <FlatList
        data={userChats}
        renderItem={(itemData) => {
          const chatData = itemData.item;
          const chatId = chatData.key;

          const otherUserId = chatData.users.find(
            (uid) => uid !== userData.userId
          );
          const otherUser = storedUsers[otherUserId];
          if (!otherUser) return;
          const title = `${otherUser.firstName} ${otherUser.lastName}`;
          const subTitle = "This will be message...";
          const image = otherUser.profilePicture;
          return (
            <DataItem
              title={title}
              subTitle={subTitle}
              image={image}
              onPress={() =>
                props.navigation.navigate("ChatScreen", { chatId })
              }
            />
          );
        }}
      />
    </PageContainer>
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
