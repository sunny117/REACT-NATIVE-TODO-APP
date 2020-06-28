import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableWithoutFeedback, Modal, TouchableOpacity, Keyboard } from 'react-native';
import { ListItem } from 'react-native-elements';


const TaskItem = props => {
    const [isEdit, setIsEdit] = useState(false);

    let enteredTitle = props.title;
    let titleInput;

    let enteredDesc = props.desc;
    let descInput;


    const titleInputHandler = (text) => {
        enteredTitle = text;
    };

    const descInputHandler = (text) => {
        enteredDesc = text;
    };

    const onEditAddHandler = () => {
        if (enteredTitle.length > 0) {
            props.actions.editTodo(props.id, enteredTitle, enteredDesc);
            setIsEdit(false);
        }
        titleInput.clear();
        descInput.clear();
    }

    const onDelete = () => {
        props.actions.deleteTodo(props.id);
    }

    const onEdit = () => {
        setIsEdit(true);
    }

    const offEdit = () => {
        setIsEdit(false);
    }

    return (
        <TouchableOpacity onPress={onEdit}>
            <View style={styles.listItem}>
                <ListItem
                    key={props.id}
                    title={props.title}
                    subtitle={props.desc}
                    leftAvatar={{ source: require('../assets/book2.png') }}
                />
            </View>

            <Modal visible={isEdit} animationType="slide"  >
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>


                    <View style={styles.inputContainer} >
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>Let's Modify the Todo</Text>
                        </View>

                        <TextInput
                            placeholder="Add Todo Title"
                            style={styles.input}
                            autoCorrect={false}
                            onChangeText={titleInputHandler}
                            onSubmitEditing={onEditAddHandler}
                            ref={txt => titleInput = txt}
                            defaultValue={enteredTitle}
                        />

                        <TextInput
                            placeholder="Add Todo Desc"
                            style={styles.input}
                            autoCorrect={false}
                            onChangeText={descInputHandler}
                            onSubmitEditing={onEditAddHandler}
                            ref={txt => descInput = txt}
                            defaultValue={enteredDesc}
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
                </TouchableWithoutFeedback>

            </Modal>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderBottomWidth: 1,
        borderRadius: 10,
        borderBottomColor: '#f7287b'
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
})

export default TaskItem;