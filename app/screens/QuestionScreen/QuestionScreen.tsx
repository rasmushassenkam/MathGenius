import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../../Styles";
import { clearStorage, storeItem } from "../../stores/AsyncStorage";
import { Problem } from "../../interfaces/Problem";
import { Problems } from "../../Problems";
import { TextInput } from "react-native-gesture-handler";
import { NavigationScreenProp } from "react-navigation";
import { Correct } from "./components/Correct";

interface IProps {
    navigation: NavigationScreenProp<any, any>
}

export const QuestionScreen: React.FC<IProps> = ({ navigation }) => {
    const index = navigation.getParam("index");
    const [currentAnswer, setCurrentAnswer] = useState<string>("");
    const [correct, setCorrect] = useState<boolean>(false);
    const [tries, setTries] = useState<number>(3);
    const [currentProblem, setCurrentProblem] = useState<Problem>(Problems[index]);

    useEffect(() => {
        initialize();
    }, []);

    useEffect(() => {
        if (correct) {
            setTimeout(() => {
                setCorrect(false);
            }, 750);
        }
    }, [correct]);

    const initialize = () => {
        if (index === undefined) {
            setCurrentProblem(Problems[0]);
        }
    }

    const answerProblem = async () => {
        if (checkAnswer()) {
            setCorrect(true);
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
            {
                correct ? <Correct /> :
                    <>
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
                    </>
            }
        </View>
    );
}