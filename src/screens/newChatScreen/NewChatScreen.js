import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../../constants/colors";
import commonStyles from "../../constants/commonStyles";
import { searchUsers } from "../../utils/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { setStoredUsers } from "../../store/userSlice";

import { CustomHeaderButton, DataItem, PageContainer } from "../../components";
import styles from './Styles'

const NewChatScreen = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState();
  const [noResultsFounds, setNoResultsFounds] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const userData = useSelector((state) => state.auth.userData);

  React.useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => {
        return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="close" onPress={() => props.navigation.goBack()} />
          </HeaderButtons>
        );
      },
      headerTitle: "New Chat123",
    });
  }, []);

  React.useEffect(() => {
    const delaySearch = setTimeout(async () => {
      if (!searchTerm || searchTerm === "") {
        setUsers();
        setNoResultsFounds(false);
        return;
      }
      setIsLoading(true);

      const usersResult = await searchUsers(searchTerm);
      delete usersResult[userData.userId];
      setUsers(usersResult);
      if (Object.keys(usersResult).length === 0) {
        setNoResultsFounds(true);
      } else {
        setNoResultsFounds(false);
        dispatch(setStoredUsers({ newUsers: usersResult }));
      }
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  const userPressed = (userId) =>
    props.navigation.navigate("ChatList", { selectedUserId: userId });
  return (
    <PageContainer>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={24} color={colors.lightGrey} />
        <TextInput
          placeholder="Search"
          style={styles.searchBar}
          onChangeText={(text) => setSearchTerm(text)}
        />
      </View>
      {isLoading && (
        <View style={commonStyles.center}>
          <ActivityIndicator size={"large"} color={colors.primary} />
        </View>
      )}
      {!isLoading && !noResultsFounds && users && (
        <FlatList
          data={Object.keys(users)}
          renderItem={(itemData) => {
            const userId = itemData.item;
            const userData = users[userId];

            return (
              <DataItem
                title={`${userData.firstName} ${userData.lastName}`}
                subTitle={userData.about}
                image={userData.profilePicture}
                onPress={() => userPressed(userId)}
              />
            );
          }}
        />
      )}
      {!isLoading && noResultsFounds && (
        <View style={commonStyles.center}>
          <FontAwesome
            name="question"
            size={55}
            color={colors.lightGrey}
            style={styles.noResultsIcon}
          />
          <Text style={styles.noResultsText}>No users found</Text>
        </View>
      )}
      {!isLoading && !users && (
        <View style={commonStyles.center}>
          <FontAwesome
            name="users"
            size={55}
            color={colors.lightGrey}
            style={styles.noResultsIcon}
          />
          <Text style={styles.noResultsText}>
            Enter a name to search for a user!
          </Text>
        </View>
      )}
    </PageContainer>
  );
};

export default NewChatScreen;

