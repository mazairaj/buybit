import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Text, Button, Body, Icon, List, ListItem, Footer } from 'native-base'

import { bindActionCreators } from 'redux';
import * as storeActions from '../Actions/actionItem';
import * as loginActions from '../Actions/actionLogin';

import { connect } from 'react-redux';

import MainStoreCard from '../Containers/mainStoreItem.js'
import { Font, AppLoading } from "expo";

class profilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  static navigationOptions = ({ navigation }) => ({
    title: 'My Profile',
    headerTitleStyle: {
        color: '#130f30',
        textAlign: 'center',
        alignSelf:'center',
        fontWeight: '300',
        flex: 1
    },
    headerLeft: (<View style={{flex: 0}}><Button transparent onPress={() => navigation.goBack("Market")}><Icon active name="ios-arrow-back" style={{color: "black"}}/></Button></View>),
    headerRight: (<View></View>)
  })
  componentDidMount() {

  }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
          <Content>
              <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor:"#130f30", paddingTop: 40, paddingBottom: 30}}>
                <Icon type='FontAwesome' name={"user-circle"} style={{fontSize: 85,  color: '#fff', alignSelf: 'center', marginBottom: 10}}/>
                <Text style={{fontSize: 18, color: '#fff', alignSelf: 'center'}}>Username</Text>
              </View>
              <List>
                  <ListItem button onPress={() => {this.props.navigation.navigate('')}}>
                      <Text style={profileStyle.fontStyle}>Edit Profile</Text>
                  </ListItem>
                  <ListItem button onPress={() => {this.props.navigation.navigate('')}}>
                      <Text style={profileStyle.fontStyle}>Edit My Address</Text>
                  </ListItem>
                  <ListItem button onPress={() => {this.props.navigation.navigate('walletPage')}}>
                      <Text style={profileStyle.fontStyle}>Add Crypto Address</Text>
                  </ListItem>
                  <ListItem button onPress={() => {this.props.navigation.navigate('')}}>
                      <Text style={profileStyle.fontStyle}>See what I purchased</Text>
                  </ListItem>
                  <ListItem button onPress={() => {this.props.navigation.navigate('')}}>
                      <Text style={profileStyle.fontStyle}>See what I sold</Text>
                  </ListItem>
                  <ListItem button onPress={() => {this.props.navigation.navigate('')}}>
                      <Text style={profileStyle.fontStyle}>App Share</Text>
                  </ListItem>
                  <ListItem button onPress={() => {this.props.navigation.navigate('')}}>
                      <Text style={profileStyle.fontStyle}>Rate Us</Text>
                  </ListItem>
              </List>
          </Content>
      </Container>
    );
  }
}

const profileStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontStyle: {
    fontSize: 18,
    color: '#130f30'
  }
});


function mapStateToProps(state) {
	return {
    profile: state.get('userProfile'),
    store: state.get('store')
	};
}

function mapDispatchToProps(dispatch) {
	return {
    itemActions: bindActionCreators(storeActions, dispatch),
    loginActions: bindActionCreators(loginActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(profilePage) 