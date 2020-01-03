import React from "react";
import { View, StyleSheet } from "react-native";

export const Wrong: React.FC = () => {
    return (
        <View style={styles.container} />
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "red"
    }
});