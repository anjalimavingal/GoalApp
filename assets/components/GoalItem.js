import { StyleSheet, View, Text, Pressable } from "react-native";
export default function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.itemContainer}>
                <Text style={styles.goalItemText}>{props.text}</Text>
            </View>
        </Pressable>
    );
}
var styles = StyleSheet.create({
    itemContainer: {
        margin: 8,
        borderRadius: 6,
        padding: 6,
        backgroundColor: "#5e0acc",
    },
    goalItemText: {
        color: "white",
    },
});
