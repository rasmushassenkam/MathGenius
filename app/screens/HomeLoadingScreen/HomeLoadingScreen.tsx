import React, { useEffect } from "react";
import { View, ActivityIndicator, StatusBar, } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { getItem } from "../../stores/AsyncStorage";
import { globalStyles } from "../../styles/Styles";

interface IProps {
    navigation: NavigationScreenProp<any, any>
}

export const HomeLoadingScreen: React.FC<IProps> = ({ navigation }) => {

    useEffect(() => {
        bootstrapAsync();
    }, []);

    const bootstrapAsync = () => {
        getItem("problemIndex").then((index: number) => {
            if (index) {
                navigation.navigate(index ? "Question" : "Home", {
                    index
                });
            } else {
                navigation.navigate("Home");
            }
        }).catch((err) => {
            console.log(err);
            navigation.navigate("Home");
        })
    }

    return (
        <View style={globalStyles.container}>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
        </View>
    )
};