import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import configureStore from './store/configureStore';
import TodoScreen from './screens/TodoScreen';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodoScreen/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
});
