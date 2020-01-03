import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { globalStyles } from "../../styles/Styles";
import { clearStorage } from "../../stores/AsyncStorage";
import { DevButtonFlushStorage } from "../../components/DevButtonFlushStorage/DevButtonFlushStorage";
import { COLORS } from "../../styles/Colors";
import { moderateScale } from "../../utils/Scaling";

interface IProps {
    navigation: NavigationScreenProp<any, any>
}

export const HomeScreen: React.FC<IProps> = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={styles.headline}>Math Genius</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Question")}>
                <Text style={styles.start}>Start</Text>
            </TouchableOpacity>
            <DevButtonFlushStorage />
        </View>
    );
}

const styles = StyleSheet.create({
    headline: {
        color: COLORS.textColor,
        fontSize: moderateScale(28),
        textTransform: "uppercase",
        letterSpacing: moderateScale(6)
    },
    start: {
        color: COLORS.textColor,
        fontSize: moderateScale(54),
        textTransform: "uppercase",
        letterSpacing: moderateScale(20)
    }
}); 