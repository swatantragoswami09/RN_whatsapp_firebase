import colors from "../../constants/colors";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default StyleSheet.create({
    image: {
        width: wp('10%'),
        height: hp('5%'),
        // marginLeft: 105,
        marginTop: 20,
        borderRadius: 120,
        borderColor: colors.grey,
        borderWidth: 2,
    },
    editIconContainer: {
        position: "absolute",
        bottom: 0,
        // right: 0,
        left: 198,
        top: 125,
        backgroundColor: colors.grey,
        borderRadius: 20,
    },
    loadingContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
});
