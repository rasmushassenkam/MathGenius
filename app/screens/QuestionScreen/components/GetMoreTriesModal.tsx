import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/Styles";
import { moderateScale, scale } from "../../../utils/Scaling";
import { COLORS } from "../../../styles/Colors";

interface IProps {
    visible: boolean;
    onPressMoreTries: () => void;
    disabled: boolean;
}

export const GetMoreTriesModal: React.FC<IProps> = ({ visible, onPressMoreTries, disabled }) => {

    const handleOnPress = (): void => {
        if (disabled) {
            return;
        } else {
            onPressMoreTries();
        }
    }

    return (
        <Modal
            visible={visible}
            animationType="slide"
        >
            <View style={globalStyles.container}>
                <TouchableOpacity style={styles.getMore} onPress={handleOnPress}>
                    <Text style={styles.headline}>Out of tries</Text>
                    <Text style={styles.press}>Press</Text>
                    <Text style={styles.subTitle}>to get more</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    getMore: {
        alignItems: "center"
    },
    headline: {
        fontSize: moderateScale(30),
        letterSpacing: scale(2),
        textTransform: "uppercase",
        color: COLORS.textColor
    },
    press: {
        fontSize: moderateScale(50),
        textTransform: "uppercase",
        letterSpacing: scale(15),
        color: COLORS.textColor
    },
    subTitle: {
        fontSize: moderateScale(30),
        textTransform: "uppercase",
        letterSpacing: scale(2),
        color: COLORS.textColor

    }
});