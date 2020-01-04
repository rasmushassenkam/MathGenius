import React, { useEffect } from "react";
import { View, ActivityIndicator, StatusBar, } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { getItem, storeItem } from "../../stores/AsyncStorage";
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
                getItem("tries").then((tries: number) => {
                    getItem("hintIndex").then((hintIndex: number) => {
                        navigation.navigate(index ? "Question" : "Home", {
                            index,
                            tries,
                            hintIndex
                        });
                    });
                });
            } else {
                storeItem("tries", 3).then(() => {
                    storeItem("hintIndex", -1).then(() => {
                        navigation.navigate("Home");
                    });
                });
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