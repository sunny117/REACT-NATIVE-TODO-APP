import React from 'react';
import { StyleSheet, View, TextInput, Button, Keyboard } from 'react-native';

const TaskInput = props => {
    let enteredText = '';
    let textInput;

    const textInputHandler = (text) => {
        enteredText = text;
    };

    const onAddHandler = () => {
        if (enteredText.length > 0) {
            props.actions.addTodo(enteredText);
            Keyboard.dismiss();
        }
        textInput.clear();
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Add Todo Item"
                style={styles.input}
                autoCorrect={false}
                onChangeText={textInputHandler}
                onSubmitEditing={onAddHandler}
                ref={txt => textInput = txt}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="ADD" onPress={onAddHandler} />
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '60%',
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        padding: 5,
        marginBottom: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        justifyContent: 'space-around',
        width: '20%',
        marginBottom: 20
    }

});


export default TaskInput;