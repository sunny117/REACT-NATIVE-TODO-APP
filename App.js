import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import configureStore from './store/configureStore';
import TodoScreen from './screens/TodoScreen';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
        <View style={styles.container}>
          <TodoScreen />
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50
  },
});
