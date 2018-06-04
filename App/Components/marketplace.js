import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Image, View, StyleSheet, Dimensions, ListView, TouchableOpacity, } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'
import { Font, AppLoading } from "expo";

import { bindActionCreators } from 'redux';
import * as storeActions from '../Actions/actionItem';
import * as loginActions from '../Actions/actionLogin';

import { connect } from 'react-redux';

import MainStoreCard from '../Containers/mainStoreItem.js'

var {height, width} = Dimensions.get('window');

class MarketPlace extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    header: <Header style={{backgroundColor: "#21CE99", height: 90}}>
    <Left style={{alignSelf:"flex-end",}}>
      <Button transparent>
        <Icon active name="menu" style={{color: "black"}}/>
      </Button>
    </Left>
    <Right style={{alignSelf:"flex-end",}}>
      <Button activeOpacity={.5} onPress={(e) => this.props.navigation.navigate("ItemPage", {item: item})}>
        <Icon active name="cart" style={{color: "black"}}/>
      </Button>
      <Button transparent>
        <Icon active name="search" style={{color: "black"}}/>
      </Button>
    </Right>
  </Header>,
  };
  constructor(props){
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    var {itemActions} = this.props
    itemActions.storeLookUp()
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  conditionalList(items) {
    if (items.length > 0 ) {
      
      return (
        <ListView
        dataSource = {storeItems}
        // renderHeader = {() => <Text>Popular</Text>} //Render CreatePost first
        renderRow={(val, i) => {
          var even = (i === 0 || !!(i && !(i%2)));
          return (
            <MainStoreCard item={val} even={even} navigation={this.props.navigation}/>
          )
        }
        }/>
      )
    }
  }
  render() {
    console.log("this is this.prop:", this.props)
    console.log(this.props.store)
    var storeItems = !!this.props.store.storeItems ? this.props.store.storeItems: [];
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(storeItems);
    if (this.state.loading) {
    return (
        <AppLoading/>
        )
      } else{
        return (
        <Container style={{backgroundColor: "#fff"}}>
          <Content>
            { storeItems.length > 0 ? 
              <ListView
                dataSource = {dataSource}
                renderRow={(val, i) => {
                  var even = (i === 0 || !!(i && !(i%2)));
                  return (
                    <MainStoreCard item={val} even={even} navigation={this.props.navigation}/>
                  )
                }
                }/> : null }
          </Content>
        </Container>
      );
    }
  }
}
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

export default connect(mapStateToProps, mapDispatchToProps)(MarketPlace) 
// export { MarketPlace }

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
    alignItems: 'center'
  }
});