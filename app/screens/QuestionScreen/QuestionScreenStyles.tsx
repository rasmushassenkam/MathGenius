import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "../../utils/Scaling";
import { COLORS } from "../../styles/Colors";

export const styles = StyleSheet.create({
    level: {
        position: "absolute",
        fontSize: moderateScale(20),
        top: scale(20),
        right: scale(10),
        color: COLORS.textColor
    },
    problem: {
        color: COLORS.textColor,
        fontSize: moderateScale(36),
        marginBottom: verticalScale(10)
    },
    answer: {
        marginTop: verticalScale(10),
        marginBottom: verticalScale(10),
        color: COLORS.textColor,
        fontSize: moderateScale(30),
        letterSpacing: scale(2)
    },
    checkAnswer: {
        color: COLORS.textColor,
        fontSize: moderateScale(24),
        textTransform: "uppercase",
        letterSpacing: moderateScale(4),
        marginTop: verticalScale(5),
        borderWidth: 1,
        borderColor: COLORS.textColor,
        padding: scale(5),
        borderRadius: 5
    },
    hr: {
        borderBottomColor: COLORS.textColor,
        borderBottomWidth: 1,
        marginBottom: 10,
        width: scale(240)
    },
    triesAndHints: {
        position: "absolute",
        top: scale(22),
        left: scale(10)
    },
    triesAndHintsRow: {
        flexDirection: "row"
    },
    tries: {
        textTransform: "uppercase",
        fontSize: moderateScale(17),
        color: COLORS.textColor,
        bottom: scale(2),
        marginLeft: scale(3)
    },
    hints: {
        textTransform: "uppercase",
        fontSize: moderateScale(17),
        marginLeft: scale(6),
        bottom: scale(2),
        color: COLORS.textColor
    }
});