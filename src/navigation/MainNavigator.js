import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFirebaseApp } from "../utils/firebaseHelper";
import { child, get, getDatabase, off, onValue, ref } from "firebase/database";
import { setChatsData } from "../store/chatSlice";
import { View, ActivityIndicator } from "react-native";
import colors from "../constants/colors";
import commonStyles from "../constants/commonStyles";
import { setStoredUsers } from "../store/userSlice";
import StackNavigator from "./StackNavigator";

const MainNavigator = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);
  const userData = useSelector((state) => state.auth.userData);
  const storedUsers = useSelector((state) => state.users.storedUsers);

  React.useEffect(() => {
    console.log("Subscribing to firebase listeners");
    const app = getFirebaseApp();
    const dbRef = ref(getDatabase(app));
    const userChatsRef = child(dbRef, `userChats/${userData.userId}`);
    const refs = [userChatsRef];

    onValue(userChatsRef, (querySnapshot) => {
      const chatIdsData = querySnapshot.val() || {};
      const chatIds = Object.values(chatIdsData);

      const chatsData = {};
      let chatsFoundCount = 0;
      for (let i = 0; i < chatIds.length; i++) {
        const chatId = chatIds[i];
        const chatRef = child(dbRef, `chats/${chatId}`);
        refs.push(chatRef);

        onValue(chatRef, (chatSnapshot) => {
          chatsFoundCount++;
          const data = chatSnapshot.val();

          if (data) {
            data.key = chatSnapshot.key;
            data.users.forEach((userId) => {
              if (storedUsers[userId]) return;
              const userRef = child(dbRef, `users/${userId}`);
              get(userRef).then((userSnapshot) => {
                const userSnapshotData = userSnapshot.val();
                dispatch(setStoredUsers({ newUsers: { userSnapshotData } }));
              });
              refs.push(userRef);
            });
            chatsData[chatSnapshot.key] = data;
          }
          if (chatsFoundCount >= chatIds.length) {
            dispatch(setChatsData({ chatsData }));
            setIsLoading(false);
          }
        });
        if (chatsFoundCount === 0) {
          setIsLoading(false);
        }
      }
      console.log("chatsids=>", chatIds);
    });

    return () => {
      console.log("unsubsribing firebase listeners");
      refs.forEach((ref) => off(userChatsRef));
    };
  }, []);

  if (isLoading) {
    <View style={commonStyles.center}>
      <ActivityIndicator size={"large"} color={colors.primary} />
    </View>;
  }
  return <StackNavigator />;
};

export default MainNavigator;
