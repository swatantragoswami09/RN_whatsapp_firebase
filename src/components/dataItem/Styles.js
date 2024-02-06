import colors from "../../constants/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
