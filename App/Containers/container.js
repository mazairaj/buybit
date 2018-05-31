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
import userForm from '../Components/Form/loginForm'
import ItemPage from '../Components/itemPage'
const store = configureStore();
const RootStack = createStackNavigator(
  {
    Login: userForm,
    Market: MarketPlace,
    ItemPage: ItemPage
  },
  {
    initialRouteName: 'Login',
  },
  { headerMode: 'screen' }
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