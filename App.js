import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store/configureStore';
import TodoScreen from './screens/TodoScreen';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
          <View>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>ReactNative TODO App</Text>
            </View>
            <View style={styles.container}>
              <TodoScreen />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10
  },
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#f7287b",
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 18
  }
});
