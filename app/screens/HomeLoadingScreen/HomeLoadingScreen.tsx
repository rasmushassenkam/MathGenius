import React, { useEffect } from "react";
import { View, ActivityIndicator, StatusBar, } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { getItem } from "../../stores/AsyncStorage";
import { styles } from "../../Styles";

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
                console.log(index);
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
        <View style={styles.container}>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
        </View>
    )
};