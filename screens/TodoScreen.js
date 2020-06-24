import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todoActions from '../store/Actions';
import TaskInput from '../components/TaskInput';

class TodoScreen extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <TaskInput {...this.props} />
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
        todos: state.todos,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(todoActions,dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen);