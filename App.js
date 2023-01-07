import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [modalVisibility, setModalVisibility] = useState(false);

    function startAddGoalHandler() {
        setModalVisibility(true);
    }

    function closeGoalHandler() {
        setModalVisibility(false);
    }

    function deleteGoalHandler(id) {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((item) => item.id !== id);
        });
    }
    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
        setModalVisibility(false);
    }
    return (
        <>
            <StatusBar style="light"></StatusBar>
            <View style={styles.appContainer}>
                <Button
                    title="Add New Goal"
                    color="#5e0acc"
                    onPress={startAddGoalHandler}
                />
                <GoalInput
                    visible={modalVisibility}
                    onAddGoal={addGoalHandler}
                    onCloseModal={closeGoalHandler}
                />
                <View style={styles.goalContainer}>
                    <FlatList
                        data={courseGoals}
                        renderItem={(itemData) => {
                            return (
                                <GoalItem
                                    text={itemData.item.text}
                                    id={itemData.item.id}
                                    onDeleteItem={deleteGoalHandler}
                                />
                            );
                        }}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },

    goalContainer: {
        flex: 5,
    },
});
