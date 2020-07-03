import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Keyboard,
    TouchableWithoutFeedback,
    Modal,
    Text
} from 'react-native';


const TaskInput = props => {
    const [addTodo, setAddTodo] = useState(false);

    let enteredTitle = '';
    let titleInput;

    let enteredDesc = '';
    let descInput;

    const titleInputHandler = (text) => enteredTitle = text;

    const descInputHandler = (text) => enteredDesc = text;

    const onAddTodoHandler = () => setAddTodo(true);

    const onAddHandler = () => {
        if (enteredTitle.length > 0) {
            props.actions.addTodo(enteredTitle, enteredDesc);
            titleInput.clear();
            descInput.clear();
            setAddTodo(false);
        }
    };

    const onCancel = () => {
        titleInput.clear();
        descInput.clear();
        setAddTodo(false);
    };

    return (
        <View>
            <View style={styles.mainButtonContainer}>
                <Button title="ADD NEW TODO" onPress={onAddTodoHandler} />
            </View>
            <Modal visible={addTodo} animationType="slide" onRequestClose={() => setAddTodo(false)}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                    <View style={styles.inputContainer}>
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>Let's Add a new Todo</Text>
                        </View>
                        <TextInput
                            placeholder="Add Todo Title"
                            style={styles.input}
                            autoCorrect={false}
                            onChangeText={titleInputHandler}
                            onSubmitEditing={onAddHandler}
                            ref={txt => titleInput = txt}
                        />
                        <TextInput
                            placeholder="Add Todo Desc"
                            style={styles.input}
                            autoCorrect={false}
                            onChangeText={descInputHandler}
                            onSubmitEditing={onAddHandler}
                            ref={txt => descInput = txt}
                        />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button title="CANCEL" color="red" onPress={onCancel} />
                            </View>
                            <View style={styles.button}>
                                <Button title="ADD" onPress={onAddHandler} />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    mainButtonContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 30,
        marginRight: 35
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
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
        width: '60%',
        marginTop: 10,
    },
    button: {
        width: '40%'
    },
    header: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: '#f7287b',
        fontSize: 18
    }
});


export default TaskInput;