import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const TaskItem = props => {

    const onDelete = () => {
        props.actions.deleteTodo(props.id);
    }

    const onEdit = () => {

    }

    return (
        <TouchableOpacity onPress={onDelete} onLongPress={onEdit}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    },
})

export default TaskItem;