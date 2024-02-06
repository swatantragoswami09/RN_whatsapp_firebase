import { StyleSheet, View } from "react-native";
import styles from './Styles';

const PageContainer = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
};



export default PageContainer;
