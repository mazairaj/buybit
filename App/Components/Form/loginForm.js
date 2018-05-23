import React, { Component, PropTypes } from 'react';
import {StyleSheet,
Text, View, Image, TouchableOpacity, TextInput, ActionSheetIOS } from 'react-native';
import {Button, Switch} from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionLogin from '../../Actions/actionLogin';

class userForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
        route: 'Login',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordRepeat: '',
    };
  }
  toggleRoute (e) {
        let alt = (this.state.route === 'Login') ? 'signUp' : 'Login';
        this.setState({ route: alt });
        e.preventDefault();
  }
  userLogin (e) {
        this.props.actionLogin.login({'email': this.state.username, 
                                      'password': this.state.password});
        e.preventDefault();
  }
  userSignup (e) {
        this.props.actionLogin.signup({'firstName': this.state.firstName, 
                                      'lastName': this.state.lastName,
                                      'email': this.state.username, 
                                      'password': this.state.password, 
                                      'passwordRepeat': this.state.passwordRepeat});
        e.preventDefault();
  }
  render() {
    let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
    return(
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 27}}>{this.state.route}</Text>
        {alt ? (
          <TextInput 
            placeholder='First Name'
            autoCapitalize='none'
            autoCorrect={false} 
            autoFocus={true} 
            value={this.state.firstName} 
            onChangeText={(text) => this.setState({ firstName: text })} />
          ) : (null)}
        {alt ? (
          <TextInput 
            placeholder='Last Name'
            autoCapitalize='none'
            autoCorrect={false} 
            autoFocus={true} 
            value={this.state.lastName} 
            onChangeText={(text) => this.setState({ lastName: text })} />
        ) : (null)}
        <TextInput 
            placeholder='Email/Username'
            autoCapitalize='none'
            autoCorrect={false} 
            autoFocus={true} 
            keyboardType='email-address'
            value={this.state.username} 
            onChangeText={(text) => this.setState({ username: text })} />
        <TextInput 
            placeholder='Password'
            autoCapitalize='none'
            autoCorrect={false} 
            secureTextEntry={true} 
            value={this.state.password} 
            onChangeText={(text) => this.setState({ password: text })} />
        {alt ? (
          <TextInput 
            placeholder='Repeat Password'
            autoCapitalize='none'
            autoCorrect={false} 
            secureTextEntry={true} 
            value={this.state.passwordRepeat} 
            onChangeText={(text) => this.setState({ passwordRepeat: text })} />
          ) : (null)}
        <View style={{margin: 7}}/>
        {alt ? ( 
          <Button onPress={(e) => this.userLogin(e)} title={this.state.route}/>
        ) : (
          <Button onPress={(e) => this.userSignup(e)} title={this.state.route}/>
        )}
        <Text style={{fontSize: 16, color: 'blue'}} onPress={(e) => this.toggleRoute(e)}>{alt}</Text>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({

});

function mapStateToProps(state) {
  return {
    userProfile: state.get('userProfile')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionLogin: bindActionCreators(actionLogin, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(userForm);