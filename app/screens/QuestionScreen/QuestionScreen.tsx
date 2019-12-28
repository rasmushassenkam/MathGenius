import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../../Styles";
import { clearStorage, getItem, storeItem } from "../../stores/AsyncStorage";
import { Problem } from "../../interfaces/Problem";
import { Problems } from "../../Problems";
import { TextInput } from "react-native-gesture-handler";

export const QuestionScreen: React.FC = () => {
    const [currentProblem, setCurrentProblem] = useState<Problem>(Problems[0]);
    const [currentAnswer, setCurrentAnswer] = useState<string>("");
    const [tries, setTries] = useState<number>(3);

    useEffect(() => {
        getCurrentProblem();
    }, []);

    const getCurrentProblem = async () => {
        const index = await getItem("problemIndex");
        if (index) {
            setCurrentProblem(Problems[index]);
        } else {
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
            <Text>{currentProblem.problem}</Text>
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