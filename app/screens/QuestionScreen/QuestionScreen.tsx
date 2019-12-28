import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../../Styles";
import { clearStorage, getItem, storeItem } from "../../stores/AsyncStorage";
import { Problem } from "../../interfaces/Problem";
import { Problems } from "../../Problems";
import { TextInput } from "react-native-gesture-handler";
import { NavigationScreenProp } from "react-navigation";

interface IProps {
    navigation: NavigationScreenProp<any, any>
}

export const QuestionScreen: React.FC<IProps> = ({ navigation }) => {
    const index = navigation.getParam("index");
    const [currentAnswer, setCurrentAnswer] = useState<string>("");
    const [tries, setTries] = useState<number>(3);
    const [currentProblem, setCurrentProblem] = useState<Problem>(Problems[index]);

    useEffect(() => {
        initialize();
    }, []);

    const initialize = () => {
        if (index === undefined) {
            setCurrentProblem(Problems[0]);
        }
    }

    const answerProblem = async () => {
        if (checkAnswer()) {
            await storeItem("problemIndex", currentProblem.nextIndex);
            setCurrentProblem(Problems[currentProblem.nextIndex]);
        } else {
            setTries(tries - 1);
        }
    }

    const checkAnswer = (): boolean => {
        if (currentAnswer === currentProblem.answer) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <View style={styles.container}>
            <Text>Tries:</Text>
            <Text>{tries}</Text>
            <Text>Problem:</Text>
            {currentProblem &&
                <Text>{currentProblem.problem}</Text>
            }
            <TextInput
                style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setCurrentAnswer(text)}
                value={currentAnswer}
            />
            <Button title="Answer" onPress={answerProblem} />
            <Button title="Flush Storage DEV" onPress={() => clearStorage()} />
        </View>
    );
}