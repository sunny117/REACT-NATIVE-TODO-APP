import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Modal, TouchableOpacity, Keyboard } from 'react-native';

const TaskItem = props => {
    const [isEdit, setIsEdit] = useState(false);

    let enteredText = props.title;
    let textInput;

    const textInputHandler = (text) => {
        enteredText = text;
    };

    const onEditAddHandler = () => {
        if (enteredText.length > 0) {
            props.actions.editTodo(props.id, enteredText);
            Keyboard.dismiss();
            setIsEdit(false);
        }
        textInput.clear();

    }

    const onDelete = () => {
        props.actions.deleteTodo(props.id);
    }

    const onEdit = () => {
        setIsEdit(true);
    }

    const offEdit = () => {
        Keyboard.dismiss();
        setIsEdit(false);
    }

    return (
        <TouchableOpacity onPress={onDelete} onLongPress={onEdit}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
            <Modal visible={isEdit} animationType="slide" >

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="course Goal"
                        autoCorrect={false}
                        style={styles.input}
                        onChangeText={textInputHandler}
                        onSubmitEditing={onEditAddHandler}
                        ref={txt => textInput = txt}
                        defaultValue={enteredText}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="CANCEL" color="red" onPress={offEdit} />
                        </View>
                        <View style={styles.button}>
                            <Button title="ADD" onPress={onEditAddHandler} />
                        </View>
                    </View>
                </View>
            </Modal>
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
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
})

export default TaskItem;