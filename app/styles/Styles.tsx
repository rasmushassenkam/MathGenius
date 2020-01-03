import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundBlue,
        alignItems: "center",
        justifyContent: "center"
    }
});