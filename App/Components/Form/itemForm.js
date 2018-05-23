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