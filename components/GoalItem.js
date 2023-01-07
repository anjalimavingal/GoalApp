import { StyleSheet, View, Text, Pressable } from "react-native";
export default function GoalItem(props) {
    return (
        <View style={styles.itemContainer}>
            <Pressable
                android_ripple={{ color: "#dddddd" }}
                onPress={props.onDeleteItem.bind(this, props.id)}
            >
                <Text style={styles.goalItemText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}
var styles = StyleSheet.create({
    itemContainer: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    goalItemText: {
        color: "white",
        padding: 6,
    },
});
