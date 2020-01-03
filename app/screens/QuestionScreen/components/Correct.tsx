import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { moderateScale, scale } from "../../../utils/Scaling";
import { COLORS } from "../../../styles/Colors";

interface IProps {
    text: string;
}

export const Correct: React.FC<IProps> = ({ text }) => {
    return (
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: moderateScale(40),
        textTransform: "uppercase",
        letterSpacing: scale(5),
        color: COLORS.textColor
    }
});