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
                        data={this.props.todos}
                        renderItem={itemData => (
                            <TaskItem
                                {...this.props}
                                title={itemData.item.text}
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
        padding: 50
    }
});

function mapStateToProps(state) {
    return {
        todos: state,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen);