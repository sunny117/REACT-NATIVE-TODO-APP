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
        <TouchableOpacity onPress={onEdit}>
            <View style={styles.listItem}>
                <Text style={{textAlign: 'center',color: 'white'}}>{props.title}</Text>
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
                            <Button title="DELETE" color="red" onPress={onDelete} />
                        </View>
                        <View style={styles.button}>
                            <Button title="EDIT" onPress={onEditAddHandler} />
                        </View>
                    </View>
                    <View>
                        <Button title="CANCEL" color="grey" onPress={offEdit} />
                    </View>
                </View>
            </Modal>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 5,
        marginVertical: 10,
        backgroundColor: '#2196F3',
        borderRadius: 10
    },
    
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginTop: "20%",
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '40%',
    },
    input: {
        width: '60%',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        padding: 5,
        marginBottom: 20,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
        marginBottom: 10
    },
    button: {
        width: '40%'
    }
})

export default TaskItem;