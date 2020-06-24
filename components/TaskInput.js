import React from 'react';
import { StyleSheet, View, TextInput, Button, ActionSheetIOS } from 'react-native';

const TaskInput = props => {
    let enteredText = '';
    let textInput;

    const textInputHandler = (text) => {
        enteredText = text;
    };

    const onAddHandler = () => {
        if (enteredText.length > 0) {
            props.actions.addTodo(enteredText);
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        padding: 5,
        marginBottom: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    }

});


export default TaskInput;