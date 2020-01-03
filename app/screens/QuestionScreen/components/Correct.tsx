import React from "react";
import { View, Text } from "react-native";

interface IProps {
    text: string;
}

export const Correct: React.FC<IProps> = ({ text }) => {
    return (
        <View>
            <Text>{text}</Text>
        </View>
    )
}