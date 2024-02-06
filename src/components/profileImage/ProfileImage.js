import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import colors from "../../constants/colors";
import { EvilIcons } from "@expo/vector-icons";
import Colors from "../../constants/colors";
import {
  launchImagePicker,
  uploadImageAsync,
} from "../../utils/imagePickerHelper";
import { updateSignedInUserData } from "../../utils/actions/authActions";
import { useDispatch } from "react-redux";
import { updateLoggedInUserData } from "../../store/authSlice";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './Styles'

const ProfileImage = (props) => {
  const dispatch = useDispatch();

  const source = props.uri
    ? { uri: props.uri }
    : require("../../assets/splash.png");

  const [image, setImage] = React.useState(source);
  const [isLoading, setIsLoading] = React.useState(false);
  const showEditButton = props.showEditButton && props.showEditButton === true;

  const userId = props.userId;

  const pickImage = async () => {
    try {
      const tempUri = await launchImagePicker();
      console.log("temp=>", tempUri);
      if (!tempUri) return;
      //  upload the image
      setIsLoading(true);
      const uploadUrl = await uploadImageAsync(tempUri);
      setIsLoading(false);

      if (!uploadUrl) {
        throw new Error("Could not upload image");
      }
      const newData = { profilePicture: uploadUrl };

      await updateSignedInUserData(userId, newData);
      dispatch(updateLoggedInUserData({ newData: newData }));

      setImage({ uri: uploadUrl });
      // Set the image
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const Container = showEditButton ? TouchableOpacity : View;

  return (
    <Container onPress={pickImage}>
      {isLoading ? (
        <View
          height={props.size}
          width={props.size}
          style={styles.loadingContainer}
        >
          <ActivityIndicator size={"small"} color={colors.primary} />
        </View>
      ) : (
        <Image source={image} style={styles.image} />
      )}
      {showEditButton && !isLoading && (
        <View style={styles.editIconContainer}>
          <EvilIcons name="pencil" size={24} color="black" />
        </View>
      )}
    </Container>
  );
};

export default ProfileImage;