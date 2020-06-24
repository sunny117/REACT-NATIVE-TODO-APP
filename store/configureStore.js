import { createStore } from 'redux';

import Reducer from './Reducer';

export default function configureStore() {
    return createStore(
        Reducer
    );
}