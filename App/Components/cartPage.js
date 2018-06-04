import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Image, View, StyleSheet, Dimensions, ListView, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Body, Icon, List, ListItem, Footer } from 'native-base'

import { bindActionCreators } from 'redux';
import * as storeActions from '../Actions/actionItem';
import * as cartActions from '../Actions/actionCart';

import { connect } from 'react-redux';

const logo = require("../../Assets/BuyBitLogo.png")
const whitelogo = require("../../Assets/buybitWhite.png")
const ethereum =  require("../../Assets/ethereum.png")

import { Font, AppLoading } from "expo";

var {height, width} = Dimensions.get('window');

class cartPage extends Component {
  constructor(props){
    super(props);
    this.state = { 
      loading: true, 
      totalPrice: 10,
      currentStep: 1, 
      currentAddress: this.props.profile.address ? this.props.profile.address[0] : 0,
      currentPaymentMethod: 0};
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  static navigationOptions = ({ navigation }) => ({
    title: 'My Cart',
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
  stepDisplay(){
    switch(this.state.currentStep){
      case 0:
        var stepOne = function() {
           return {
             alignSelf: 'center', 
             color: '#4ca950',
             fontSize: 32
           }
         }
        var stepTwo = function() {
           return {
             alignSelf: 'center', 
             color: "#F2BA2E",
             fontSize: 28
           }
         }
        var stepThree = function() {
           return {
             alignSelf: 'center', 
             color: "#F2BA2E",
             fontSize: 28
           }
         }
        var stepFour = function() {
           return {
             alignSelf: 'center', 
             color: "#F2BA2E",
             fontSize: 28
           }
         }
        break
      case 1:
        var stepOne = function() {
           return {
             alignSelf: 'center', 
             color: '#4ca950',
             fontSize: 28
           }
         }
        var stepTwo = function() {
           return {
             alignSelf: 'center', 
             color: '#4ca950',
             fontSize: 32
           }
         }
        var stepThree = function() {
           return {
             alignSelf: 'center', 
             color: "#F2BA2E",
             fontSize: 28
           }
         }
        var stepFour = function() {
           return {
             alignSelf: 'center', 
             color: "#F2BA2E",
             fontSize: 28
           }
         }
        break
      case 2:
        var stepOne = function() {
           return {
             alignSelf: 'center', 
             color: '#4ca950',
             fontSize: 28
           }
         }
        var stepTwo = function() {
           return {
             alignSelf: 'center', 
             color: '#4ca950',
             fontSize: 28
           }
         }
        var stepThree = function() {
           return {
             alignSelf: 'center', 
             color: '#4ca950',
             fontSize: 32
           }
         }
        var stepFour = function() {
           return {
             alignSelf: 'center', 
             color: "#F2BA2E",
             fontSize: 28
           }
         }
        break
      case 3:
        var stepOne = function() {
           return {
             alignSelf: 'center', 
             color: '#4ca950',
             fontSize: 28
           }
         }
        var stepTwo = function() {
           return {
             alignSelf: 'center', 
             color: '#4ca950',
             fontSize: 28
           }
         }
        var stepThree = function() {
           return {
             alignSelf: 'center', 
             color: '#4ca950',
             fontSize: 28
           }
         }
        var stepFour = function() {
           return {
             alignSelf: 'center', 
             color: '#4ca950',
             fontSize: 32
           }
         }
        break
    }

    return (
      <View style={{flex: .1, flexDirection: 'column', justifyContent: 'center', marginTop: 20}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity style={{alignSelf: 'center'}}  onPress={() => this.setState({currentStep: 0})}>
             <Icon type='MaterialCommunityIcons' name={"numeric-1-box"} style={stepOne()}/>
             <Text style={{fontSize: 12, fontWeight: '700'}}>My Cart</Text>
           </TouchableOpacity>
          <View style={{marginTop: 15, backgroundColor: "grey", height: 3, width: 60}}></View>
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => this.setState({currentStep: 1})}>
             <Icon type='MaterialCommunityIcons' name={"numeric-2-box"} style={stepTwo()}/>
             <Text style={{fontSize: 12, fontWeight: '700'}}>Delivery</Text>
           </TouchableOpacity>
          <View style={{marginTop: 15, backgroundColor: "grey", height: 3, width: 60}}></View>
           <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => this.setState({currentStep: 2})}>
             <Icon type='MaterialCommunityIcons' name={"numeric-3-box"} style={stepThree()}/>
             <Text style={{fontSize: 12, fontWeight: '700'}}>Payment</Text>
           </TouchableOpacity>
          <View style={{marginTop: 15, backgroundColor: "grey", height: 3, width: 60}}></View>
           <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => this.setState({currentStep: 3})}>
             <Icon type='MaterialCommunityIcons' name={"numeric-4-box"} style={stepFour()}/>
             <Text style={{fontSize: 12, fontWeight: '700'}}>Order</Text>
           </TouchableOpacity>
        </View>
      </View>

    )

  }
  emptyCart(){
    return(
      <View style={emptyCartStyles.container}>
          <Icon active name="ios-cart-outline" style={{color: "black", fontSize: 40}}/>
          <Text style={emptyCartStyles.fontStyle}>Your Shopping Cart is empty.</Text>
      </View>
    )
  }
  cartPage(){
    // var total = this.props.cart.cart.reduce((a, b) => ({x: a.x + b.x}));
    return (
      <Container style={notEmptyCartStyles.container}>
        {this.stepDisplay.apply(this)}
        <Content style={notEmptyCartStyles.contentContainer}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
            <View style={{flex: 1, flexDirection: 'column', paddingLeft: 20}}>
              <Text style={notEmptyCartStyles.priceFont}>Total Price :</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 30, marginTop: 0}}>
              <Text style={notEmptyCartStyles.priceFont}>{this.state.totalPirce} $</Text>
            </View>
          </View>

          <List style={notEmptyCartStyles.listContainer}>
                <ListItem style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', flexWrap: "wrap", paddingTop: 5, paddingBottom: 2, borderBottomColor: '#F5F5F5', borderBottomWidth: 1, borderTopColor: '#F5F5F5', borderTopWidth: 1}}>
                    <View style={{flex: .25}}>
                      <Image borderRadius={5} style={{height: 60, width: 60}} source={{uri: 'http://justcreative.com/wp-content/uploads/2009/cool-designer-tshirts/cool-designer-tshirt%20(13).jpg'}} />
                    </View>

                    <View style={{flex: .5, flexDirection: 'column', justifyContent: 'flex-start'}}>
                      <Text style={{color: '#808080', fontSize: 17, alignSelf: 'flex-start', paddingBottom: 10}}>Strapless Short Logo Whatever</Text>
                      <Text style={{color: '#130f30', fontWeight: 'bold', fontSize: 16, alignSelf: 'flex-start'}}>10.10 $</Text>
                    </View>

                    <View style={{flex: .25, flexDirection: 'column', justifyContent:'flex-end'}}>
                      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                        <Button transparent style={{alignSelf: 'center', height: 20, paddingTop: 0, paddingBottom: 0}}>
                          <Icon active name="md-arrow-dropup-circle" style={{color: "black", fontSize: 16}}/>
                        </Button>
                        <Text style={{color: '#130f30', fontWeight: 'bold', fontSize: 18}}>1</Text>
                        <Button transparent style={{alignSelf: 'center', height: 20, paddingTop: 0, paddingBottom: 0}}>
                          <Icon active name="md-arrow-dropdown-circle" style={{color: "black", fontSize: 16}}/>
                        </Button>
                      </View>
                    </View>
                </ListItem>
          </List>
        </Content>
        <Footer style={{backgroundColor: 'black', borderColor: 'transparent'}}>
            <Button style={{backgroundColor: null, borderColor: 'transparent', flex: 1, flexDirection: 'row'}}
              onPress={() => this.setState({currentStep: this.state.currentStep + 1})}>
              <View style={{flex: 1}}></View>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: '300'}}>Next Step</Text>
              </View>
              <View style={{flex: 1}}>
                <Icon style={{alignSelf: 'flex-end'}}active name="ios-arrow-forward-outline" style={{color: "white"}}/>
              </View>
            </Button>
        </Footer>
      </Container>
      )
  }
  addressPage(){
    // var addresses = this.props.profile.address
    var addresses = [{city: "West Palm Beach, FL",
    place: '33 Old Shirley Drive'}, 
    {city: "Miami, FL",
    place: '132 Sunshine Drive'}, 
    {city: "New York, NY",
    place: '32 buybit street'}]
    var addressDisplay = addresses.map((address, index) => {
      if(index == this.state.currentAddress){
           var cardStyle = function() {
             return {
               backgroundColor: "#75CF3F", borderRadius: 10, borderColor: null, borderWidth: 0, shadowColor: 'transparent'
             }
           }
      }else{
           var cardStyle = function() {
             return {
               backgroundColor: "#D6D6D6", borderRadius: 10, borderColor: "transparent", borderWidth: 0, shadowColor: 'transparent'
             }
           }
      }
      return (
        <Card key={address.place} style={{elevation: 0, shadowOpacity: 0, backgroundColor: 'transparent', borderColor: 'transparent'}}>
          <CardItem style={cardStyle()} button onPress={() => this.setState({currentAddress: index})}>
            <Body style={cardStyle()}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 5, paddingBottom: 5}}>
                  <View style={{flex: 0.15, flexDirection: 'row', justifyContent: 'center'}}>
                   <Icon active style={{color: "#fff", alignSelf: 'center'}} type="FontAwesome" name="map-marker"/>
                  </View>
                  <View style={{flex: 0.6, flexDirection: 'column', justifyContent: 'center'}}>
                   <Text style={{fontSize: 20, color: "#fff", paddingBottom: 5}}>{address.city}</Text>
                   <Text style={{fontSize: 12, color: "#fff", paddingBottom: 5}}>{address.place}</Text>
                  </View>
                  <View style={{flex: 0.25, flexDirection: 'row', justifyContent: 'center'}}>
                   <Icon active style={{color: "#fff", alignSelf: 'center'}}  name="ios-checkmark-circle"/>
                  </View>
                </View>
            </Body>
          </CardItem>
        </Card>
      )
    })

    return(
      <Container style={notEmptyCartStyles.container}>
        {this.stepDisplay.apply(this)}
        <Content style={{flex: 1, marginLeft: 10, marginRight: 10}} padder>
          {addressDisplay}
          <Card>
            <CardItem style= {{paddingTop: 15, paddingBottom: 15}}>
              <Body>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>
                  Add Address <Icon active type="EvilIcons" name="plus"/>
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Footer style={{backgroundColor: 'black', borderColor: 'transparent'}}>
            <Button style={{backgroundColor: null, borderColor: 'transparent', flex: 1, flexDirection: 'row'}}
              onPress={() => this.setState({currentStep: this.state.currentStep + 1})}>
              <View style={{flex: 1}}></View>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: '300'}}>Next Step</Text>
              </View>
              <View style={{flex: 1}}>
                <Icon style={{alignSelf: 'flex-end'}}active name="ios-arrow-forward-outline" style={{color: "white"}}/>
              </View>
            </Button>
        </Footer>
      </Container>
    )
  }
  paymentPage(){
    // var addresses = this.props.profile.address
    var paymentMethods = [{name: "Pay Using BuyBit",
    token: whitelogo, exchangeRate: 1}, 
    {name: "Pay Using Ethereum",
    token: ethereum, exchangeRate: 575}, 
    {name: "Pay Using Bitcoin",
     token: "bitcoin", exchangeRate: 8000}]

    var paymentDisplay = paymentMethods.map((payment, index) => {
      if(index == this.state.currentPaymentMethod){
           var cardStyle = function() {
             return {
               backgroundColor: "#5B9BD7", borderRadius: 10, borderColor: null, borderWidth: 0, shadowColor: 'transparent'
             }
           }
      }else{
           var cardStyle = function() {
             return {
               backgroundColor: "#EAA71F", borderRadius: 10, borderColor: "transparent", borderWidth: 0, shadowColor: 'transparent'
             }
           }
      }
      return (
        <Card key={payment.token} style={{elevation: 0, shadowOpacity: 0, backgroundColor: 'transparent', borderColor: 'transparent'}}>
          <CardItem style={cardStyle()} button onPress={() => this.setState({currentPaymentMethod: index})}>
            <Body style={cardStyle()}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 5, paddingBottom: 5}}>
                  <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'center'}}>
                   { payment.token == "bitcoin" ? 
                   <Icon active style={{color: "#fff", alignSelf: 'center', fontSize: 34}} type="MaterialCommunityIcons" name={payment.token}/>
                   :
                   <Image borderRadius={5} style={{alignSelf: 'center', height: 34, width: 34}} source={payment.token} />
                   }
                  </View>
                  <View style={{flex: 0.6, flexDirection: 'column', justifyContent: 'center'}}>
                   <Text style={{fontSize: 20, color: "#fff", paddingBottom: 5, alignSelf: 'center'}}>{payment.name}</Text>
                   <Text style={{fontSize: 16, color: "#fff", alignSelf: 'center'}}>{(this.state.totalPrice / payment.exchangeRate).toFixed(5)} {payment.token}</Text>
                  </View>
                  <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'center'}}>
                   <Icon active style={{color: "#fff", alignSelf: 'center'}}  name="ios-checkmark-circle"/>
                  </View>
                </View>
            </Body>
          </CardItem>
        </Card>
      )
    }, this)

    return(
      <Container style={notEmptyCartStyles.container}>
        {this.stepDisplay.apply(this)}
        <Content style={{flex: 1}} padder>
          {paymentDisplay}
          <Card>
            <CardItem style= {{paddingTop: 15, paddingBottom: 15}}>
              <Body>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>
                  Add Coin <Icon active type="EvilIcons" name="plus"/>
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Footer style={{backgroundColor: 'black', borderColor: 'transparent'}}>
            <Button style={{backgroundColor: null, borderColor: 'transparent', flex: 1, flexDirection: 'row'}}
              onPress={() => this.setState({currentStep: this.state.currentStep + 1})}>
              <View style={{flex: 1}}></View>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: '300'}}>Next Step</Text>
              </View>
              <View style={{flex: 1}}>
                <Icon style={{alignSelf: 'flex-end'}}active name="ios-arrow-forward-outline" style={{color: "white"}}/>
              </View>
            </Button>
        </Footer>
      </Container>
    )
  }
  orderPage(){
    return (
    <Container style={notEmptyCartStyles.container}>
      {this.stepDisplay.apply(this)}
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <Image borderRadius={5} style={{alignSelf: 'center', height: 120, width: 120, marginBottom: 30}} source={logo} />
        <Text style={{fontSize: 20, alignSelf: 'center', fontWeight: 'bold', paddingBottom: 5}}>Thank you</Text>
        <Text style={{fontSize: 14, alignSelf: 'center', paddingBottom: 10}}>You order code is <Text style={{fontSize: 20, fontWeight: 'bold'}}>#SD12312</Text></Text>
        <Text style={{fontSize: 14, alignSelf: 'center', paddingBottom: 5}}>You can review or change your order in the order page.</Text>
      </View>
      <Footer style={{backgroundColor: 'black', borderColor: 'transparent'}}>
            <Button style={{backgroundColor: null, borderColor: 'transparent', flex: 1, flexDirection: 'row'}} 
             onPress={() => this.props.navigation.navigate('myProfile')}>
              <View style={{flex: 1, flexDirection: 'row' ,justifyContent: 'center'}}>
                <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: '300'}}>View My Order</Text>
                <Icon style={{alignSelf: 'flex-end'}}active name="ios-arrow-forward-outline" style={{color: "white"}}/>
              </View>
            </Button>
      </Footer>
    </Container>
    )
  }
  notEmptyCart(){
    switch(this.state.currentStep){
      case 0:
        return this.cartPage()
      case 1:
        return this.addressPage()
      case 2:
        return this.paymentPage()
      case 3:
        return this.orderPage()
    }
  }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    console.log("cartPage console log on this.props: ", this.props)
    var cart = this.props.cart.cart

    return (
      <View style={{flex: 1}}>
        { cart.length != 0 ? (
            this.emptyCart() 
          ) : (
            this.notEmptyCart()
          )
        }
      </View>
    );
  }
}
function mapStateToProps(state) {
	return {
    profile: state.get('userProfile'),
    store: state.get('store'),
    cart: state.get('cart')
	};
}
function mapDispatchToProps(dispatch) {
	return {
    itemActions: bindActionCreators(storeActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch), 
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(cartPage) 

const emptyCartStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontStyle: {
    fontSize: 20,
    color: '#130f30',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const notEmptyCartStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  contentContainer: {
    flex: 1,
    marginTop: 20
  },
  listContainer: {
    flex: 1
  },
  listItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  priceFont: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});