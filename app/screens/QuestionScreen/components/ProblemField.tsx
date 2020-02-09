import React, { useEffect } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";
import { Problem } from "../../../interfaces/Problem";
import { COLORS } from "../../../styles/Colors";
import { moderateScale, verticalScale, scale } from "../../../utils/Scaling";

interface IProps {
    currentProblem: Problem;
    isHintsEnabled: boolean;
    hintIndex: number;
    animated: boolean;
}

export const ProblemField: React.FC<IProps> = ({ currentProblem, isHintsEnabled, hintIndex, animated }) => {

    const styles = StyleSheet.create({
        problem: {
            marginTop: verticalScale(30),
            color: COLORS.textColor,
            fontSize: moderateScale(32)
        }
    });


    return (<>
        <Text style={styles.problem}>{isHintsEnabled ? currentProblem.hints[hintIndex] : currentProblem.problem}</Text>
    </>
    )
}

