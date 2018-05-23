import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import {Text, View} from 'react-native'

import configureStore from '../store';
// import {
//   setCustomTextInput,
//   setCustomText,
// } from 'react-native-global-props';

import MarketPlace  from '../Components/marketplace'
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login</Text>
      </View>
    );
  }
}
const store = configureStore();
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Market: MarketPlace,
  },
  {
    initialRouteName: 'Home',
  }
);
export default class Root extends Component {
  render() {
    return (
        <Provider store={store}>
            <RootStack/>
        </Provider>
    );
  }
}

// Root.propTypes = {
//   store: PropTypes.object.isRequired,
// };