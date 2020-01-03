import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles } from "../../styles/Styles";
import { storeItem, getItem } from "../../stores/AsyncStorage";
import { Problem } from "../../interfaces/Problem";
import { Problems } from "../../Problems";
import { NavigationScreenProp } from "react-navigation";
import { Correct } from "./components/Correct";
import { DevButtonFlushStorage } from "../../components/DevButtonFlushStorage/DevButtonFlushStorage";
import { COLORS } from "../../styles/Colors";
import { scale, moderateScale, verticalScale } from "../../utils/Scaling";
import { NumberGrid } from "./components/NumberGrid";
import { Wrong } from "./components/Wrong";

interface IProps {
    navigation: NavigationScreenProp<any, any>
}

export const QuestionScreen: React.FC<IProps> = ({ navigation }) => {
    const index = navigation.getParam("index");
    // const storedTries = navigation.getParam("tries");
    const [currentAnswer, setCurrentAnswer] = useState<string>("");
    const [correct, setCorrect] = useState<boolean>(false);
    const [wrong, setWrong] = useState<boolean>(false);
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

    useEffect(() => {
        setCurrentAnswer("");
        if (wrong) {
            setTimeout(() => {
                setWrong(false);
            }, 10);
        }
    }, [wrong])

    const initialize = async () => {
        if (index === undefined) {
            getItem("tries").then((value: number) => {
                setTries(value);
                setCurrentProblem(Problems[0]);
            })
        }
    }

    const answerProblem = async () => {
        if (checkAnswer()) {
            setCorrect(true);
            await storeItem("problemIndex", currentProblem.nextIndex);
            setCurrentProblem(Problems[currentProblem.nextIndex]);
        } else {
            // setTries(tries - 1);
            setWrong(true);
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

    const setAnswer = (value: string): void => {
        if (currentAnswer.length <= 12) {
            setCurrentAnswer(currentAnswer + value);
        } else {
            return;
        }
    }

    return (
        <View style={globalStyles.container}>
            {
                correct ? <Correct
                    text={correctTextGenerator()}
                /> :
                    wrong ? <Wrong />
                        :
                        <>
                            <Text style={styles.tries}>Tries: {tries}</Text>
                            {currentProblem &&
                                <>
                                    <Text style={styles.problem}>{currentProblem.problem}</Text>
                                    <Text style={styles.level}>Lvl: {currentProblem.currentIndex + 1}</Text>
                                </>
                            }
                            <Text style={styles.answer}>{currentAnswer}</Text>
                            <NumberGrid
                                onPressNumber={(value: string) => setAnswer(value)}
                                onPressClear={() => setCurrentAnswer("")}
                                onPressPlusMinus={negateAnswer}
                            />
                            <TouchableOpacity onPress={answerProblem}>
                                <Text style={styles.checkAnswer}>Check Answer</Text>
                            </TouchableOpacity>
                        </>
            }
            <DevButtonFlushStorage />
        </View>
    );
}

const styles = StyleSheet.create({
    level: {
        position: "absolute",
        fontSize: moderateScale(20),
        top: scale(20),
        left: scale(10),
        color: COLORS.textColor
    },
    tries: {
        position: "absolute",
        fontSize: moderateScale(20),
        top: scale(20),
        right: scale(10),
        color: COLORS.textColor
    },
    problem: {
        color: COLORS.textColor,
        fontSize: moderateScale(36),
        marginBottom: verticalScale(10)
    },
    answer: {
        marginTop: verticalScale(10),
        marginBottom: verticalScale(20),
        color: COLORS.textColor,
        fontSize: moderateScale(30)
    },
    checkAnswer: {
        color: COLORS.textColor,
        fontSize: moderateScale(24),
        textTransform: "uppercase",
        letterSpacing: moderateScale(4),
        marginTop: verticalScale(5),
        borderWidth: 1,
        borderColor: COLORS.textColor,
        padding: scale(5),
        borderRadius: 5
    }
});