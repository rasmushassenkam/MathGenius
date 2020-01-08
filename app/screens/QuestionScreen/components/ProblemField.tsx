import React, { useEffect } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";
import { Problem } from "../../../interfaces/Problem";
import { COLORS } from "../../../styles/Colors";
import { moderateScale, verticalScale, scale } from "../../../utils/Scaling";

interface IProps {
    currentProblem: Problem;
    isHintsEnabled: boolean;
    hintIndex: number;
    test: boolean;
}

export const ProblemField: React.FC<IProps> = ({ currentProblem, isHintsEnabled, hintIndex, test }) => {
    let position: Animated.ValueXY = new Animated.ValueXY({ x: scale(0), y: verticalScale(50) });

    useEffect(() => {
        if (test) {
            Animated.spring(position, {
                toValue: { x: 200, y: 500 }
            }).start();
        }
    }, [test]);
    return (
        <Animated.Text style={position.getLayout()}>
            <Text style={styles.problem}>{currentProblem.problem}</Text>
            {/* <Text style={styles.problem}>{isHintsEnabled ? currentProblem.hints[hintIndex] : currentProblem.problem}</Text> */}
        </Animated.Text>
    )
}

const styles = StyleSheet.create({
    problem: {
        color: COLORS.textColor,
        fontSize: moderateScale(36)
    },
});