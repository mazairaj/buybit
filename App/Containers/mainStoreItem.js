import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'



var {height, width} = Dimensions.get('window');

export default class MainStoreCard extends Component {
    constructor(props){
        super(props);
        // this.returnEven = this.returnEven.bind(this)
        // this.returnOdd = this.returnOdd.bind(this)
        this.state = {

        };
    }
    render() {
      var {item} = this.props
      console.log("ITEM", item)
        return (
            <Card>
            <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'https://scontent.fmia1-2.fna.fbcdn.net/v/t1.0-9/12439023_10206114395882164_3964247135252667796_n.jpg?_nc_cat=0&oh=05a55a2f207aa5a6feaf1b40ce862cee&oe=5B7BF562'}} />
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
                <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg"}} style={{height: 200, width: null, flex: 1}}/>
                <View style={{flex: 1}}>
                  <View style={styles.itemInformation}>
                    <Text>${item.itemPriceUSD}</Text>
                    <Text>Price in ETH</Text>
                  </View >
                  <View style={styles.itemInformation}>
                    <Text note>"100% on rotten tomatoes"</Text>
                  </View>
                </View>
              </CardItem>
              <CardItem>
                <Left>
                    <Icon active name="eye" />
                    <Text>12 Views</Text>
                </Left>
                <Right>
                  <Button transparent>
                    <Icon active name="cart" />
                    <Text>Add To Cart</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardBodyContainer: {
      flex: '1 1',
      flexDirection: 'row'
    },
    itemInformation: {
      flex: 1,
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  });