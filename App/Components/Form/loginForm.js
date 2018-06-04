import React, { Component, PropTypes } from 'react';
import {StyleSheet,
Text, View, Image, ImageBackground, TouchableOpacity, TextInput, ActionSheetIOS, ScrollView } from 'react-native';
import {Button, Switch, Header, Right, Container, Icon} from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionLogin from '../../Actions/actionLogin';

const backIcon = require("../../../Assets/signup/back.png");
const personIcon = require("../../../Assets/login/login1_person.png");
const lockIcon = require("../../../Assets/login/login1_lock.png");
const emailIcon = require("../../../Assets/signup/signup_email.png");
const logo = require("../../../Assets/BuyBitLogo.png")


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
  static navigationOptions = {
    header: null
  }
  componentWillMount(){
    const {setParams} = this.props.navigation;
    setParams({state: "Login"});
  }
  toggleRoute (e) {
    this.setState({route: ( this.state.route === 'Login') ? 'SignUp' : 'Login'});
        e.preventDefault();
  }
  userLogin (e) {
    const {navigate} =this.props.navigation
        this.props.actionLogin.login({'email': this.state.username, 
                                      'password': this.state.password})
        navigate('Market')
        e.preventDefault(e);
  }
  userSignup (e) {
    console.log("Signup", this)
        this.props.actionLogin.signup({'firstName': this.state.firstName, 
                                      'lastName': this.state.lastName,
                                      'email': this.state.username, 
                                      'password': this.state.password, 
                                      'passwordRepeat': this.state.passwordRepeat});
        e.preventDefault(e);
  }
  forgotPassword(e){
      // Not yet finish
      e.preventDefault(e);
  }
  loginForm(){
    return(
          <View style={loginStyles.container}>
              <View style={loginStyles.markWrap}>
                <Image source={logo} style={loginStyles.mark} resizeMode="contain" />
              </View>
            <View style={loginStyles.wrapper}>
                <View style={loginStyles.inputWrap}>
                  <View style={loginStyles.iconWrap}>
                    <Image source={emailIcon} style={loginStyles.icon} resizeMode="contain" />
                  </View>
                  <TextInput 
                    placeholder="Username" 
                    placeholderTextColor="#130f30"
                    autoCorrect={false} 
                    autoCapitalize='none'
                    onChangeText={(text) => this.setState({ username: text })}
                    style={loginStyles.input} />
                </View>
                <View style={loginStyles.inputWrap}>
                  <View style={loginStyles.iconWrap}>
                    <Image source={lockIcon} style={loginStyles.icon} resizeMode="contain" />
                  </View>
                  <TextInput 
                    placeholderTextColor="#130f30"
                    placeholder="Password" 
                    autoCapitalize='none'
                    autoCorrect={false} 
                    style={loginStyles.input}
                    onChangeText={(text) => this.setState({ password: text })}
                    secureTextEntry />
                </View>
                <TouchableOpacity activeOpacity={.5} onPress={(e) => this.forgotPassword(e)}>
                  <View>
                    <Text style={loginStyles.forgotPasswordText}>Forgot Password?</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.5} onPress={(e) => this.userLogin(e)}>
                  <View style={loginStyles.button}>
                    <Text style={loginStyles.buttonText}>Sign In</Text>
                  </View>
                </TouchableOpacity>
            </View>
            <View style={loginStyles.container}>
              <View style={loginStyles.signupWrap}>
                <Text style={loginStyles.accountText}>Dont have an account?</Text>
                <TouchableOpacity activeOpacity={.5} onPress={(e) => this.toggleRoute(e)} title={this.state.route}>
                  <View>
                    <Text style={loginStyles.signupLinkText}>Sign Up</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      )
  }
  signupForm(){
    return(       
        <View style={signupStyles.container}>
          <View style={signupStyles.headerContainer}>
            <View style={signupStyles.headerIconView}>
              <TouchableOpacity style={signupStyles.headerBackButtonView} activeOpacity={.5} onPress={(e) => this.toggleRoute(e)} title={this.state.route} >
                <Image 
                  source={backIcon} 
                  style={signupStyles.backButtonIcon} 
                  resizeMode="contain"/>
              </TouchableOpacity>
            </View>
            <View style={signupStyles.headerTitleView}>
              <Text style={signupStyles.titleViewText}>Sign Up</Text>
            </View>
          </View>
          <View style={signupStyles.inputsContainer}>
            <View style={signupStyles.inputContainer}>
              <View style={signupStyles.iconContainer}>
                <Image 
                  source={personIcon}
                  style={signupStyles.inputIcon}
                  resizeMode="contain"/>
              </View>
              <TextInput
                style={[signupStyles.input, signupStyles.whiteFont]}
                placeholder="Last Name"
                autoCorrect={false} 
                placeholderTextColor="#130f30"
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ lastName: text })}/>
              <TextInput
                style={[signupStyles.input, signupStyles.whiteFont]}
                placeholder="First Name"
                autoCorrect={false} 
                placeholderTextColor="#130f30"
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ firstName: text })}/>  
            </View>

            <View style={signupStyles.inputContainer}>
              <View style={signupStyles.iconContainer}>
                <Image 
                  source={emailIcon} 
                  style={signupStyles.inputIcon} 
                  resizeMode="contain"/>
              </View>
              <TextInput
                style={[signupStyles.input, signupStyles.whiteFont]}
                placeholder="Email"
                placeholderTextColor="#130f30"
                autoCorrect={false} 
                autoCapitalize='none'
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ username: text })}  />
            </View>

            <View style={signupStyles.inputContainer}>
              <View style={signupStyles.iconContainer}>
                <Image 
                  source={lockIcon} 
                  style={signupStyles.inputIcon} 
                  resizeMode="contain"/>
              </View>
              <TextInput
                secureTextEntry={true}
                style={[signupStyles.input, signupStyles.whiteFont]}
                placeholder="Password"
                autoCapitalize='none'
                autoCorrect={false} 
                placeholderTextColor="#130f30"
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ password: text })} />
            </View>

            <View style={signupStyles.inputContainer}>
              <View style={signupStyles.iconContainer}>
                <Image 
                  source={lockIcon} 
                  style={signupStyles.inputIcon} 
                  resizeMode="contain" />
              </View>
              <TextInput
                secureTextEntry={true}
                style={[signupStyles.input, signupStyles.whiteFont]}
                autoCorrect={false} 
                autoCapitalize='none'
                placeholder="Repeat Password"
                placeholderTextColor="#130f30"
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.setState({ passwordRepeat: text })}/>
            </View>

          </View>

          <View style={signupStyles.footerContainer}>
            <TouchableOpacity activeOpacity={.5} onPress={(e) => this.userSignup(e)}>
              <View style={signupStyles.signup}>
                <Text style={signupStyles.whiteFont}>Join Us</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.5} onPress={(e) => this.toggleRoute(e)} title={this.state.route}>
              <View style={signupStyles.signin}>
                <Text style={signupStyles.blackFont}>Already have an account?<Text style={signupStyles.blackFont}> Sign In</Text></Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
      )
  }
  displayError(){
    //not yet completed
    return(
      <Text> this is the error !</Text>
      )
  }
  render() {
    let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
    return(
      <View style={{flex: 1}}>
        { alt === "SignUp" ? ( this.loginForm.apply(this)
      ) : ( this.signupForm.apply(this) )}
      </View>
    )
  }
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  markWrap: {
    flex: 1,
    marginTop: 50,
    paddingVertical: 30,
  },
  mark: {
    flex: 1
  },
  backgroundStyle: {
    flex: 1,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#4ca950",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#130f30",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#130f30"
  },
  signupLinkText: {
    color: "#130f30",
    marginLeft: 5,
  },
  signup: {
    backgroundColor: '#FF3366',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

const signupStyles = StyleSheet.create({
 container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    marginTop: 50
  },
  inputsContainer: {
    flex: 3,
    marginTop: 20,
  },
  footerContainer: {
    flex: 1
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginTop: 25,
    marginLeft: 25,
  },
  titleViewText: {
    fontSize: 35,
    color: '#130f30',
  },
  inputs: {
    paddingVertical: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75,
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  signup: {
    backgroundColor: '#F2BA2E',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  },
  blackFont: {
    color: '#130f30'
  }
})


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