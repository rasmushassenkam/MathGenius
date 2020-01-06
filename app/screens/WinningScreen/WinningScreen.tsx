import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";
import { globalStyles } from "../../styles/Styles";
import { NavigationScreenProp } from "react-navigation";
import { COLORS } from "../../styles/Colors";
import { moderateScale, scale } from "../../utils/Scaling";

interface IProps {
    navigation: NavigationScreenProp<any, any>
}


export const WinningScreen: React.FC<IProps> = ({ navigation }) => {

    return (
        <View style={globalStyles.container}>
            <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.title}>You are a</Text>
                <Text style={styles.subtitle}>Math genius</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        alignItems: "center"
    },
    title: {
        textTransform: "uppercase",
        color: COLORS.textColor,
        fontSize: moderateScale(32),
        letterSpacing: scale(17)
    },
    subtitle: {
        textTransform: "uppercase",
        color: COLORS.textColor,
        fontSize: moderateScale(36),
        letterSpacing: scale(6)
    }
});