import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "../../../utils/Scaling";
import { COLORS } from "../../../styles/Colors";

interface IProps {
    onPressNumber: (value: string) => void;
    onPressClear: () => void;
    onPressPlusMinus: () => void;
}

export const NumberGrid: React.FC<IProps> = ({ onPressNumber, onPressClear, onPressPlusMinus }) => {
    return (
        <View>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => onPressNumber("1")}>
                    <Text style={styles.button}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressNumber("2")}>
                    <Text style={styles.button}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressNumber("3")}>
                    <Text style={styles.button}>3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => onPressNumber("4")}>
                    <Text style={styles.button}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressNumber("5")}>
                    <Text style={styles.button}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressNumber("6")}>
                    <Text style={styles.button}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => onPressNumber("7")}>
                    <Text style={styles.button}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressNumber("8")}>
                    <Text style={styles.button}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressNumber("9")}>
                    <Text style={styles.button}>9</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={onPressPlusMinus}>
                    <Text style={styles.button}>+/-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressNumber("0")}>
                    <Text style={styles.button}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressClear}>
                    <Text style={styles.button}>C</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        width: scale(240),
        height: verticalScale(80),
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        fontSize: moderateScale(32),
        color: COLORS.textColor,
        padding: scale(8),
        width: scale(60),
        textAlign: "center"
    },
});