import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import configureStore from './store/configureStore';

const store = configureStore();
persistStore(store, {storage: AsynStorage});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>

      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
