import React, { Component } from 'react';
import { AppRegistry , View, Text} from 'react-native';
import Root           from './App/Containers/container';

import { Font, AppLoading } from "expo";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    // if (this.state.loading) {
      return (
        <Root/>
        // <Root store={store} />
      );
    // } else {
    //   return (
    //     <Text>LOADING...</Text>
    //   )
    // }
  }
}
