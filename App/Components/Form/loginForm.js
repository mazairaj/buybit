import React, { Component, PropTypes } from 'react';
import {StyleSheet,
Text, View, Image, TouchableOpacity, TextInput, ActionSheetIOS, ScrollView } from 'react-native';
import {Button, Switch, Header, Right} from 'native-base';

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
  componentWillMount(){
    const {setParams} = this.props.navigation;
    setParams({state: "Login"});
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    console.log("HEY NOW", this)
    // headerTitle instead of title
    return {
    header: (
      <Header style={{backgroundColor: "#21CE99"}}>
        <Right style={{alignSelf:"flex-end", marginBottom: 5, color: '#fff'}}><TouchableOpacity ><Text style={{color: '#fff'}}>"HEY</Text></TouchableOpacity></Right>
    </Header> ),
    }
  };
  toggleRoute (e) {
    this.setState({route: ( this.state.route === 'Login') ? 'signUp' : 'Login'});
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
      // <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Header style={{backgroundColor: "#21CE99"}}>
          <Right style={{alignSelf:"flex-end", marginBottom: 5, color: '#fff'}}><TouchableOpacity onPress={(e) => this.toggleRoute(e).bind(this)}><Text style={{color: '#fff'}}>{this.state.route}</Text></TouchableOpacity></Right>
        </Header>
        <Text style={{fontSize: 27}}>{this.state.route}</Text>
        {alt === "Login" ? (
          <TextInput 
            placeholder='First Name'
            autoCapitalize='none'
            autoCorrect={false} 
            autoFocus={true} 
            value={this.state.firstName} 
            onChangeText={(text) => this.setState({ firstName: text })} />
          ) : (null)}
        {alt === "Login" ? (
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
        {alt === "Login" ? (
          <TextInput 
            placeholder='Repeat Password'
            autoCapitalize='none'
            autoCorrect={false} 
            secureTextEntry={true} 
            value={this.state.passwordRepeat} 
            onChangeText={(text) => this.setState({ passwordRepeat: text })} />
          ) : (null)}
        <View style={{margin: 7}}/>
        {alt === "SignUp" ? ( 
          <Button onPress={(e) => this.userLogin(e)} title={this.state.route}></Button>
        ) : (
          <Button onPress={(e) => this.userSignup(e)} title={this.state.route}/>
        )}
        <Text style={{fontSize: 16, color: 'blue'}} onPress={(e) => this.toggleRoute(e).bind(this)}>{alt}</Text>
        </View>
      // </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: '#21CE99',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: '#21CE99',
    alignItems: 'center',
    justifyContent: 'center',
  },

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