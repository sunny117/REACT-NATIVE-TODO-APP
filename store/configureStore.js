import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from "redux-thunk";

import todoReducer from './Reducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const store = createStore(
  persistReducer(persistConfig, todoReducer),
   [],
   compose(
     applyMiddleware(thunkMiddleware)
   )
);

export const persistor = persistStore(store);