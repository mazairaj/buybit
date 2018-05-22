import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Image, View, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'

class MarketPlace extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
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
            <CardItem cardBody style={styles.cardBodyContainer}>
              <Image style={{flex: '1 0',}} source={{uri: 'https://scontent.fmia1-2.fna.fbcdn.net/v/t1.0-9/15966063_10208225199250929_8665281952004263846_n.jpg?_nc_cat=0&oh=4a5e47fe7ecf061402e1a83596b5b226&oe=5B90CABA'}} style={{height: 200, width: null, flex: 1}}/>
              <View style={styles.itemInformation}>
                <Text>Item title</Text>
                <Text note>Item Description</Text>
                <Text>$100</Text>
                <Button rounded success>
                    <Text>Shop Now</Text>
                </Button>
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
            <CardItem cardBody style={styles.cardBodyContainer}>
              <Image style={{flex: '1 0',}} source={{uri: 'https://scontent.fmia1-2.fna.fbcdn.net/v/t1.0-9/15966063_10208225199250929_8665281952004263846_n.jpg?_nc_cat=0&oh=4a5e47fe7ecf061402e1a83596b5b226&oe=5B90CABA'}} style={{height: 200, width: null, flex: 1}}/>
              <View style={{flex: 1}}>
                <View style={styles.itemInformation}>
                  <Text>Item title</Text>
                  <Text note>Item Description</Text>
                  <Text>$100</Text>
                </View>
                <View style={styles.itemInformation}>
                  <Button rounded success>
                      <Text>Shop Now</Text>
                  </Button>
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
        </Content>
      </Container>
    );
  }
}

export { MarketPlace }

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
    alignItems: 'center'
  }
});