import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { clearStorage } from "../../stores/AsyncStorage";

export const DevButtonFlushStorage = () => {
    return (
        <TouchableOpacity style={styles.testButton} onPress={() => clearStorage()}>
            <Text style={styles.testButtonText}>DEV FLUSH STORAGE</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    testButton: {
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "red",
        padding: 5
    },
    testButtonText: {
        color: "white"
    }
});
