import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "../../../utils/Scaling";
import { COLORS } from "../../../styles/Colors";

interface IProps {
    onPressNumber: (value: string) => void;
    onPressOkay: () => void;
    onPressPlusMinus: () => void;
}

export const NumberGrid: React.FC<IProps> = ({ onPressNumber, onPressOkay, onPressPlusMinus }) => {
    return (
        <View>
            <View style={styles.row}>
                <TouchableOpacity>
                    <Text onPress={() => onPressNumber("1")} style={styles.button}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={() => onPressNumber("2")} style={styles.button}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={() => onPressNumber("3")} style={styles.button}>3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity>
                    <Text onPress={() => onPressNumber("4")} style={styles.button}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={() => onPressNumber("5")} style={styles.button}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={() => onPressNumber("6")} style={styles.button}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity>
                    <Text onPress={() => onPressNumber("7")} style={styles.button}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={() => onPressNumber("8")} style={styles.button}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={() => onPressNumber("9")} style={styles.button}>9</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity>
                    <Text onPress={onPressPlusMinus} style={styles.button}>+/-</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={() => onPressNumber("0")} style={styles.button}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={onPressOkay} style={styles.button}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        width: scale(200),
        height: verticalScale(80),
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        fontSize: moderateScale(32),
        color: COLORS.textColor
    }
});