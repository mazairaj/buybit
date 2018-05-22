import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import {Text} from 'react-native'

import { MarketPlace } from '../Components/marketplace'
export default class Root extends Component {
  render() {
    return (
        <Provider>
            <MarketPlace/>
        </Provider>
    );
  }
}

// Root.propTypes = {
//   store: PropTypes.object.isRequired,
// };