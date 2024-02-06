import colors from "../../constants/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    inputContainer: {
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        backgroundColor: colors.nearlyWhite,
        flexDirection: "row",
    },
    icon: {
        marginRight: 10,
        color: colors.grey,
    },
    label: {
        marginVertical: 8,
        fontFamily: "bold",
        letterSpacing: 0.3,

        color: colors.textColor,
    },
    input: {
        color: colors.textColor,
        flex: 1,
        fontFamily: "regular",

        letterSpacing: 0.3,
        paddingTop: 0,
    },
    errorContainer: {
        marginTop: 5,
    },
    errorText: {
        color: "red",
        fontSize: 13,
        fontFamily: "regular",
        letterSpacing: 0.3,
    },
});