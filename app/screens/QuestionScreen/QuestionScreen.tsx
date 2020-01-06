import React, { useEffect, useState } from "react";
import { AdMobBanner, AdMobInterstitial } from "expo-ads-admob";
import { View, Text, TouchableOpacity, Platform, StyleSheet, ActivityIndicator } from "react-native";
import { FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { globalStyles } from "../../styles/Styles";
import { storeItem, getItem } from "../../stores/AsyncStorage";
import { Problem } from "../../interfaces/Problem";
import { Problems } from "../../Problems";
import { NavigationScreenProp } from "react-navigation";
import { Correct } from "./components/Correct";
import { DevButtonFlushStorage } from "../../components/DevButtonFlushStorage/DevButtonFlushStorage";
import { COLORS } from "../../styles/Colors";
import { NumberGrid } from "./components/NumberGrid";
import { Wrong } from "./components/Wrong";
import { scale, moderateScale, verticalScale } from "../../utils/Scaling";
import { Constants } from "../../Constants";
import { GetMoreTriesModal } from "./components/GetMoreTriesModal";

interface IProps {
    navigation: NavigationScreenProp<any, any>
}

export const QuestionScreen: React.FC<IProps> = ({ navigation }) => {
    const index = navigation.getParam("index");
    const storedTries = navigation.getParam("tries");
    const storedHintIndex = navigation.getParam("hintIndex");
    const [currentAnswer, setCurrentAnswer] = useState<string>("");
    const [correct, setCorrect] = useState<boolean>(false);
    const [wrong, setWrong] = useState<boolean>(false);
    const [tries, setTries] = useState<number>(storedTries);
    const [currentProblem, setCurrentProblem] = useState<Problem>(Problems[index]);
    const [hintIndex, setHintIndex] = useState<number>(storedHintIndex);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [isHintEnabled, setIsHintEnabled] = useState<boolean>(false);

    AdMobInterstitial.setAdUnitID(Platform.OS === "ios" ? Constants.IOSVIDEOADD : Constants.ANDROIDVIDEOADD);

    useEffect(() => {
        initialize();
    }, []);

    useEffect(() => {
        setCurrentAnswer("");
        if (correct) {
            zeroHintIndex();
            setIsHintEnabled(false);
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
                getItem("hintIndex").then((hintIndex: number) => {
                    setTries(value);
                    setHintIndex(hintIndex);
                    setCurrentProblem(Problems[0]);
                });
            });
        }
    }

    const zeroHintIndex = async () => {
        await storeItem("hintIndex", -1);
        setHintIndex(-1);
    }

    const answerProblem = async () => {
        if (checkAnswer()) {
            if (currentProblem.nextIndex === -1) {
                await storeItem("problemIndex", 0);
                setCurrentProblem(Problems[0]);
                await storeItem("tries", 3);
                setTries(3);
                navigation.navigate("Winning");
            } else {
                setCorrect(true);
                await storeItem("problemIndex", currentProblem.nextIndex);
                setCurrentProblem(Problems[currentProblem.nextIndex]);
            }
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
        try {
            setDisabled(true);
            await AdMobInterstitial.requestAdAsync();
            await AdMobInterstitial.showAdAsync()
        } catch (error) {
            console.log(error);
        } finally {
            setDisabled(false);
            await storeItem("tries", tries);
            setTries(tries);
        }
    }

    const getHint = async () => {
        try {
            setDisabled(true);
            await AdMobInterstitial.requestAdAsync();
            await AdMobInterstitial.showAdAsync()
        } catch (error) {
            console.log(error);
        } finally {
            setIsHintEnabled(true);
            setDisabled(false);
            await storeItem("hintIndex", hintIndex + 1);
            setHintIndex(hintIndex + 1);
        }
    }

    const disableHints = (): boolean => {
        if (hintIndex === (currentProblem.hints.length - 1)) {
            return true;
        } else {
            return false;
        }
    }

    const condtionalStyles = StyleSheet.create({
        hints: {
            textTransform: "uppercase",
            fontSize: moderateScale(17),
            marginLeft: scale(6),
            bottom: scale(2),
            color: currentProblem && disableHints() ? COLORS.disabledColor : COLORS.textColor
        }
    });

    return (
        <View style={globalStyles.container}>
            {
                correct ? <Correct
                    text={correctTextGenerator()}
                /> :
                    wrong ? <Wrong />
                        :
                        currentProblem ?
                            <>
                                <View style={styles.triesAndHints}>
                                    <View style={styles.triesAndHintsRow}>
                                        <SimpleLineIcons name="energy" color={COLORS.textColor} size={moderateScale(18)} /><Text style={styles.tries}>{tries}</Text>
                                    </View>
                                    <View style={{ marginLeft: scale(3) }}>
                                        <TouchableOpacity style={styles.triesAndHintsRow} onPress={getHint} disabled={disableHints() || disabled}>
                                            <FontAwesome
                                                name="lightbulb-o"
                                                color={disableHints() ? COLORS.disabledColor : COLORS.textColor}
                                                size={moderateScale(18)} />
                                            {
                                                disabled ?
                                                    <ActivityIndicator color={COLORS.textColor} />
                                                    :
                                                    <Text
                                                        style={condtionalStyles.hints}>
                                                        Get a hint
                                                </Text>
                                            }
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <Text style={styles.level}>Lvl: {currentProblem.currentIndex + 1}</Text>

                                <Text style={styles.problem}>{isHintEnabled ? currentProblem.hints[hintIndex] : currentProblem.problem}</Text>
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
                            :
                            <ActivityIndicator color={COLORS.textColor} size="large" />
            }
            <DevButtonFlushStorage />
            <GetMoreTriesModal
                visible={tries === 0}
                onPressMoreTries={() => addTries(3)}
                disabled={disabled}
            />
            <View style={globalStyles.bottomBannerAdd}>
                <AdMobBanner bannerSize="smartBannerPortrait" adUnitID={Platform.OS === "ios" ? Constants.IOSBANNERADD : Constants.ANDROIDBANNERADD} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    level: {
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
    },
    triesAndHints: {
        position: "absolute",
        top: scale(22),
        left: scale(10)
    },
    triesAndHintsRow: {
        flexDirection: "row"
    },
    tries: {
        textTransform: "uppercase",
        fontSize: moderateScale(17),
        color: COLORS.textColor,
        bottom: scale(2),
        marginLeft: scale(3)
    }
});
