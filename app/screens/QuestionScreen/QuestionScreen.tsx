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
import { GetMoreTriesModal } from "./components/GetMoreTriesModal";

interface IProps {
    navigation: NavigationScreenProp<any, any>
}

export const QuestionScreen: React.FC<IProps> = ({ navigation }) => {
    const index = navigation.getParam("index");
    const storedTries = navigation.getParam("tries");
    const [currentAnswer, setCurrentAnswer] = useState<string>("");
    const [correct, setCorrect] = useState<boolean>(false);
    const [wrong, setWrong] = useState<boolean>(false);
    const [tries, setTries] = useState<number>(storedTries);
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
            await storeItem("tries", tries - 1);
            setTries(tries - 1);
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

    const addTries = async (tries: number) => {
        await storeItem("tries", tries);
        setTries(tries);
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
                            <View style={styles.hr} />
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
            <GetMoreTriesModal
                visible={tries === 0}
                onPressMoreTries={() => addTries(3)}
            />
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
        marginBottom: verticalScale(10),
        color: COLORS.textColor,
        fontSize: moderateScale(30),
        letterSpacing: scale(2)
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
    },
    hr: {
        borderBottomColor: COLORS.textColor,
        borderBottomWidth: 1,
        marginBottom: 10,
        width: scale(240)
    }
});