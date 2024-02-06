import { Text, View } from "react-native";
import styles from './Styles'

export default PageTitle = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};