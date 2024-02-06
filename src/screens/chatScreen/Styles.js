import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
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
