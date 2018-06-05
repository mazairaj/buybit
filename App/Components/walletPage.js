import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Text, Button, Body, Icon, List, ListItem,Thumbnail, Footer } from 'native-base'

import { bindActionCreators } from 'redux';
import * as storeActions from '../Actions/actionItem';
import * as loginActions from '../Actions/actionLogin';

import { connect } from 'react-redux';

import MainStoreCard from '../Containers/mainStoreItem.js'
import { Font, AppLoading } from "expo";

const logo = require("../../Assets/BuyBitLogo.png")

class walletPage extends Component {
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
    title: 'My Wallet',
    headerTitleStyle: {
        color: '#130f30',
        textAlign: 'center',
        alignSelf:'center',
        fontWeight: '300',
        flex: 1
    },
    headerLeft: (<View style={{flex: 0}}><Button transparent onPress={() => navigation.goBack("profilePage")}><Icon active name="ios-arrow-back" style={{color: "black"}}/></Button></View>),
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
          <Content style={{flex: 1, flexDirection: 'column', backgroundColor: '#fff'}}>

              <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'center', backgroundColor:"#EEEEEE", paddingLeft: 15, paddingTop: 40, paddingBottom: 10}}>
                <View style={{flex: 0.25}}>
                  <Icon type='FontAwesome' name={"user-circle"} style={{fontSize: 85,  color: '#130f30', alignSelf: 'flex-start', marginBottom: 10}}/>
                </View>
                <View style={{flex:0.50, flexDirection: 'column', paddingTop: 10, paddingLeft: 15}}>
                  <Text style={{fontSize: 22, color: '#130f30', alignSelf: 'flex-start', marginBottom: 15}}>Account 1</Text>
                  <Text style={{fontSize: 14, color: '#130f30', alignSelf: 'flex-start'}}>0x343vfdq870jm...</Text>
                </View>
                <View style={{flex:0.25, flexDirection: 'column', justifyContent: 'center', marginRight: 15}}>
                  <Icon type='SimpleLineIcons' name={"options"} style={{color: '#130f30', alignSelf: 'center' }}/>
                </View>
              </View>

              <View style={{flex: 0.15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor:"#EEEEEE"}}>
                <View style={{flex: 0.5, flexDirection: 'column', justifyContent: 'flex-start', marginLeft: 15, paddingLeft: 15, paddingRight: 15}}>
                  <Text>0 BBT</Text>
                  <Text>0.00 USD</Text>
                </View>
                <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'flex-end', paddingLeft: 15, paddingRight: 15}}>
                  <Button warning style={{margin: 15}}><Text style={{fontWeight: 'bold'}}> Buy </Text></Button>
                  <Button warning style={{margin: 15}}><Text style={{fontWeight: 'bold'}}> Send </Text></Button>
                </View>
              </View>

              <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor:"#FFF", padding: 15}}>
                
                <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 15, paddingRight: 15}}>
                  <View style={{flex: 0.5, flexDirection: 'column',justifyContent: 'center'}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>You have 2 tokens</Text>                    
                  </View>
                  <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Button warning><Text style={{fontWeight: 'bold'}}> Add Token </Text></Button>
                  </View>
                </View>

                <View style={{flex: 0.8, flexDirection: 'column', justifyContent: 'flex-end'}}>
                  <List>
                      <ListItem style={{marginLeft: 5}}>
                          <Thumbnail square size={40} source={logo} style={{marginRight: 15}}/>
                          <Text style={{fontSize: 18, fontWeight: 'bold'}}>0 BBT</Text>
                      </ListItem>
                      <ListItem style={{marginLeft: 5}}>
                          <Thumbnail square size={40} source={logo} style={{marginRight: 15}}/>
                          <Text style={{fontSize: 18, fontWeight: 'bold'}}>0 ETH</Text>
                      </ListItem>
                  </List>
                </View>

              </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(walletPage) 