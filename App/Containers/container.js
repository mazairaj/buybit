import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import {Text} from 'react-native'
export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Text>HOOOO</Text>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};