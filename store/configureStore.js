import { createStore, applyMiddleware } from 'redux';
import { autoRehydrate } from 'redux-persist';

import Reducer from './Reducer';

export default function configureStore(initialState) {
    return createStore(
        Reducer,
        initialState,
        autoRehydrate,
        applyMiddleware
    );
}