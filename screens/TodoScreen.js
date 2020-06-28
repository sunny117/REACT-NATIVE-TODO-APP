import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todoActions from '../store/Actions';
import TaskInput from '../components/TaskInput';
import TaskItem from '../components/TaskItem';

class TodoScreen extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <TaskInput {...this.props} />
                <FlatList
                    keyboardShouldPersistTaps={'handled'}
                    contentContainerStyle={styles.items}
                    style={{height:'83%'}}
                    data={this.props.todos}
                    renderItem={itemData => (
                        <TaskItem
                            {...this.props}
                            title={itemData.item.title}
                            desc={itemData.item.description}
                            id={itemData.item.id}
                        />
                    )}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        alignContent: 'space-between'
    },
    items:{
        width: '90%'
    }

});

function mapStateToProps(state) {
        if(typeof state.todo === 'undefined')
            return {
                todos: []
            };
        return {
            todos: state.todo,
        };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen);