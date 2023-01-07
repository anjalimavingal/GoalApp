import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal,
    Image,
} from "react-native";
import { useState } from "react";
export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHander(enteredText) {
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    source={require("../assets/images/goal.png")}
                    style={styles.imageContainer}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHander}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            onPress={addGoalHandler}
                            color="#b180f0"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={props.onCloseModal}
                            color="#f31282"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

var styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        // borderBottomColor: "#ccccccc",
        // borderBottomWidth: 1,
        // marginBottom: 24,
        padding: 16,
        backgroundColor: "#311b6b",
    },
    imageContainer: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccccccc",
        width: "100%",
        padding: 16,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        borderRadius: 16,
        color: "#120438",
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    button: {
        width: "30%",
        marginHorizontal: 8,
    },
});
