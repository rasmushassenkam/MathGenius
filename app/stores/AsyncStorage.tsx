import { AsyncStorage } from "react-native";

export const storeItem = async (key: string, item: any) => {
    try {
        let json = await AsyncStorage.setItem(key, JSON.stringify(item));
        return json;
    } catch (error) {
        console.log(error.message);
    }
}

export const getItem = async (key: string) => {
    try {
        const json = await AsyncStorage.getItem(key);
        const item = await JSON.parse(json);
        return item;
    } catch (error) {
        console.log(error.message);
    }
    return;
}

export const removeItem = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log(error.message);
    }
}

export const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log(error.message);
    }
}