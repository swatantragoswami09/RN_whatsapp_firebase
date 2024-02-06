import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: "100%",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
});