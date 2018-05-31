import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Image, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'
import { Font, AppLoading } from "expo";

import { bindActionCreators } from 'redux';
import * as storeActions from '../Actions/actionItem';
import * as loginActions from '../Actions/actionLogin';
import * as cartActions from '../Actions/actionCart';

import { connect } from 'react-redux';

var {height, width} = Dimensions.get('window');

class MainStoreCard extends Component {
    constructor(props){
        super(props);
        // this.returnEven = this.returnEven.bind(this)
        // this.returnOdd = this.returnOdd.bind(this)
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
  addItemToCart() {
    var {cartActions} = this.props
    cartActions.addItemCart(this.props.item)
    console.log(this)
  }
    render() {
      var {item} = this.props
      console.log("ITEM", item)
      if (this.state.loading) {
        return (
        <AppLoading/>
        )
      } else{
        return (
            <Card>
            <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'https://www.whittierfirstday.org/wp-content/uploads/default-user-image-e1501670968910.png'}} />
                  <Body>
                    <Text>User Name</Text>
                    <Text note>Tagline</Text>
                  </Body>
                </Left>
                <Right >
                  <Button transparent>
                    <Icon active name="paper-plane" />
                  </Button>
                </Right>
              </CardItem>
              <CardItem>
                <TouchableOpacity style={{flex: 1}} onPress={(e) => this.props.navigation.navigate("ItemPage", {item: item})}>
                  <Image source={{uri: `${item.itemImage}`}} style={{height: 200, width: null, flex: 1}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={(e) => this.props.navigation.navigate("ItemPage", {item: item})}>
                  <View style={{flex: 1}}>
                    <View style={styles.itemInformation}>
                      <Text>${item.itemPriceUSD}</Text>
                      <Text>Price in ETH</Text>
                    </View >
                    <View style={styles.itemInformation}>
                      <Text note>"100% on rotten tomatoes"</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </CardItem>
              <CardItem>
                <Left>
                    <Icon active name="eye" />
                    <Text>12 Views</Text>
                </Left>
                <Right>
                  <Button transparent onPress={(e) => this.addItemToCart()}>
                    <Icon active name="cart" />
                    <Text>Add To Cart</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
        )
      }
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
    loginActions: bindActionCreators(loginActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainStoreCard) 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardBodyContainer: {
      flex: 1,
      flexDirection: 'row'
    },
    itemInformation: {
      flex: 1,
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  });