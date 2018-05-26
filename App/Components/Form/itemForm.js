import React, { Component, PropTypes } from 'react';
import {StyleSheet,
Text, View, Image, TouchableOpacity, TextInput, ActionSheetIOS } from 'react-native';
import {Button, Switch} from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionItem from '../../Actions/actionItem';

import Video from 'react-native-video';
import ImagePicker from 'react-native-image-crop-picker';
import { RNS3 } from 'react-native-aws3';

var BUTTONS = [
  'Photo Library',
  'Camera',
  'Delete Image',
  'Cancel',
];

class itemForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
        itemCreator: this.props.userProfile._id,
        itemTitle: '',
        itemPriceUSD: '',
        itemPriceETH: '',
        itemDesciption: '',
        itemCondition: '',
        itemImage: '',
    };
  }
  itemCreate(e) {
        this.props.actionItem.signup({'itemCreator': this.state.itemCreator, 
                                      'itemTitle': this.state.itemTitle,
                                      'itemPriceUSD': this.state.itemPriceUSD, 
                                      'itemPriceETH': this.state.itemPriceETH,
                                      'itemDesciption': this.state.itemDesciption,
                                      'itemCondition': this.state.itemCondition,
                                      'itemImage': this.state.itemImage});
        e.preventDefault();
  }
  render() {
    return(
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 27}}>"Item Form"</Text>
        <TextInput 
            placeholder='Item Title'
            autoCapitalize='none'
            autoCorrect={false} 
            autoFocus={true} 
            value={this.state.itemTitle} 
            onChangeText={(text) => this.setState({ itemTitle: text })} />
        <TextInput 
            placeholder='Item Price in USD'
            keyboardType={'numeric'}
            value={this.state.itemPriceUSD} 
            onChangeText={(value) => this.setState({ itemPriceUSD: value })} />
        <Picker
		  selectedValue={this.state.itemCondition}
		  style={{ height: 50, width: 100 }}
		  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
		  <Picker.Item label="Service" value="Service" />
		  <Picker.Item label="New" value="New" />
		  <Picker.Item label="New(Other)" value="New(Other)" />
		  <Picker.Item label="Used" value="Used" />
		  <Picker.Item label="For Parts or Not Working" value="For Parts or Not Working" />
		</Picker>
		<TextInput 
            placeholder='Item Description'
            autoCapitalize='none'
            autoCorrect={false} 
            autoFocus={true} 
            value={this.state.itemDesciption} 
            onChangeText={(text) => this.setState({ itemDesciption: text })} />
        <View style={{margin: 7}}/>
        <Button onPress={(e) => this.itemCreate(e)} title={"Post"}/>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({

});

function mapStateToProps(state) {
  return {
    itemForm: state.get('myStoreItem')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionItem: bindActionCreators(actionItem, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(itemForm);
