import React, { useEffect, useState } from "react";
import { Modal, TouchableOpacity, Text, View } from "react-native";
import { globalStyles } from "../../../styles/Styles";
import { Problems } from "../../../Problems";

interface IProps {
    visible: boolean;
    onDissmiss: () => void;
    hintIndex: number;
    problemIndex: number;
}

export const HintModal: React.FC<IProps> = ({ visible, onDissmiss, hintIndex, problemIndex }) => {
    // const [hint, setHint] = useState<string>(Problems[problemIndex].hints[hintIndex]);

    const showHint = () => {
        setTimeout(() => {

        }, 1000)
    }

    return (
        <Modal
            visible={visible}
            animationType="slide"
            onShow={showHint}
        >
            <View style={globalStyles.container}>
                <TouchableOpacity>
                    <Text>GET A HINT</Text>
                </TouchableOpacity>
                <Text>{hintIndex}</Text>
                <TouchableOpacity onPress={onDissmiss}>
                    <Text>Go back</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}