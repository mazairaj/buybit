
import React, { Component } from 'react';
import { AppRegistry , View, Text} from 'react-native';
import Root           from './App/Containers/container';


export default class App extends Component {
  render() {
    return (
      <Root/>
      // <Root store={store} />
    );
  }
}

