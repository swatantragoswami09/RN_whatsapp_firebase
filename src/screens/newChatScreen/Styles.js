import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.extralightGrey,
        height: 30,
        marginVertical: 8,
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 5,
    },
    searchBar: {
        marginLeft: 8,
        fontSize: 15,
        width: "100%",
    },
    noResultsIcon: {
        marginBottom: 20,
    },
    noResultsText: {
        color: colors.textColor,
        fontFamily: "regular",
        letterSpacing: 0.3,
    },
});
