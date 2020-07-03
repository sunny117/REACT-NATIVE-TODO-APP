import React from 'react';
import App from '../App';
import {render} from 'react-native-testing-library';


describe('<App/>', () => {
    it('TodoScreen snapShot', () => {
        const snap = render(<App />).toJSON();
        expect(snap).toMatchSnapShot();
    });
});