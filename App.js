// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>HEllo World!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { Component } from 'react';
import { AppRegistry , View, Text} from 'react-native';
import Root           from './App/Containers/container';
// import configureStore from './app/store/configureStore.prod.js';

// const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Root/>
      // <Root store={store} />
    );
  }
}

