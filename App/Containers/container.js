import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import {Text} from 'react-native'

import configureStore from '../store';
// import {
//   setCustomTextInput,
//   setCustomText,
// } from 'react-native-global-props';

import { MarketPlace } from '../Components/marketplace'

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
        <Provider store={store}>
            <MarketPlace/>
        </Provider>
    );
  }
}

// Root.propTypes = {
//   store: PropTypes.object.isRequired,
// };