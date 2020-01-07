import React from "react";
import { View, Text, Animated, StyleSheet } from "react-native";
import { Problem } from "../../../interfaces/Problem";
import { COLORS } from "../../../styles/Colors";
import { moderateScale, verticalScale } from "../../../utils/Scaling";

interface IProps {
    currentProblem: Problem;
    isHintsEnabled: boolean;
    hintIndex: number;
}

export const ProblemField: React.FC<IProps> = ({ currentProblem, isHintsEnabled, hintIndex }) => {
    return (
        <Text style={styles.problem}>{isHintsEnabled ? currentProblem.hints[hintIndex] : currentProblem.problem}</Text>
    )
}

const styles = StyleSheet.create({
    problem: {
        color: COLORS.textColor,
        fontSize: moderateScale(36),
        marginTop: verticalScale(50)
    },
});