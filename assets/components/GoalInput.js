import { View, TextInput, Button, StyleSheet, Pressable } from "react-native";
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
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.textInput}
            placeholder="Your course goal!!"
            onChangeText={goalInputHander}
            value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
    </View>;
}

var styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        flex: 1,
        borderBottomColor: "#ccccccc",
        borderBottomWidth: 1,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
});
