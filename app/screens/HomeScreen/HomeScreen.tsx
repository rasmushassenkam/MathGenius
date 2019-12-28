import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { styles } from "../../Styles";
import { clearStorage } from "../../stores/AsyncStorage";

interface IProps {
    navigation: NavigationScreenProp<any, any>
}

export const HomeScreen: React.FC<IProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Question")}>
                <Text>Start</Text>
                <Button title="Flush Storage DEV" onPress={() => clearStorage()} />
            </TouchableOpacity>
        </View>
    );
}