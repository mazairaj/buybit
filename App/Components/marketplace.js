import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Image, View, StyleSheet, Dimensions, ListView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'

import { bindActionCreators } from 'redux';
import * as storeActions from '../Actions/actionItem';
import * as loginActions from '../Actions/actionLogin';

import { connect } from 'react-redux';

import MainStoreCard from '../Containers/mainStoreItem.js'

var {height, width} = Dimensions.get('window');

class MarketPlace extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    var {itemActions} = this.props
    itemActions.storeLookUp()

  }
  conditionalList(items) {
    if (items.length > 0 ) {
      return (
        <ListView
        dataSource = {storeItems}
        renderHeader = {() => <Text>Popular</Text>} //Render CreatePost first
        renderRow={(val, i) => {
          var even = (i === 0 || !!(i && !(i%2)));
          return (
            <MainStoreCard item={val} even={even}/>
          )
        }
        }/>
      )
    }
  }
  render() {
    console.log(this.props.store)
    var storeItems = !!this.props.store.storeItems ? this.props.store.storeItems: [];
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(storeItems);
    return (
      <Container>
        <Header />
        <Content>
          { storeItems.length > 0 ? 
            <ListView
              dataSource = {dataSource}
              renderHeader = {() => <Text>Popular</Text>} //Render CreatePost first
              renderRow={(val, i) => {
                var even = (i === 0 || !!(i && !(i%2)));
                return (
                  <MainStoreCard item={val} even={even}/>
                )
              }
              }/> : null }
        </Content>
      </Container>
    );
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
    flex: '1 1',
    flexDirection: 'row'
  },
  itemInformation: {
    flex: 1,
    alignItems: 'center'
  }
});