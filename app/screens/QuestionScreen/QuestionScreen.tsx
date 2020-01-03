import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/Styles";
import { storeItem } from "../../stores/AsyncStorage";
import { Problem } from "../../interfaces/Problem";
import { Problems } from "../../Problems";
import { NavigationScreenProp } from "react-navigation";
import { Correct } from "./components/Correct";
import { DevButtonFlushStorage } from "../../components/DevButtonFlushStorage/DevButtonFlushStorage";
import { COLORS } from "../../styles/Colors";
import { scale, moderateScale } from "../../utils/Scaling";
import { NumberGrid } from "./components/NumberGrid";

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
        setCurrentAnswer("");
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

    const correctTextGenerator = (): string => {
        return "Correct!";
    }

    const negateAnswer = (): void => {
        if (currentAnswer[0] === "-") {
            const subString = currentAnswer.substr(1);
            setCurrentAnswer(subString);
        } else {
            setCurrentAnswer("-" + currentAnswer);
        }
    }

    return (
        <View style={globalStyles.container}>
            {
                correct ? <Correct
                    text={correctTextGenerator()}
                /> :
                    <>
                        <Text style={styles.tries}>Tries: {tries}</Text>
                        {currentProblem &&
                            <Text style={styles.problem}>{currentProblem.problem}</Text>
                        }
                        <Text>{currentAnswer}</Text>
                        <NumberGrid
                            onPressNumber={(value: string) => setCurrentAnswer(currentAnswer + value)}
                            onPressOkay={answerProblem}
                            onPressPlusMinus={negateAnswer}
                        />
                    </>
            }
            <DevButtonFlushStorage />
        </View>
    );
}

const styles = StyleSheet.create({
    tries: {
        position: "absolute",
        top: scale(20),
        right: scale(10),
        color: COLORS.textColor
    },
    problem: {
        color: COLORS.textColor,
        fontSize: moderateScale(36)
    }
});