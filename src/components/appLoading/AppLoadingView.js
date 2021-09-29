// import defaullt libraries
import React, { Fragment, useEffect,useState } from 'react';
import { SearchBar, Avatar } from 'react-native-elements';
import {View, Keyboard, TouchableOpacity, TouchableHighlight, FlatList, Platform,ActivityIndicator,} from 'react-native';
import { Container, Content, Left, Right, Card, CardItem,Thumbnail, Body, Text, Spinner, Grid, Col, Label, Item, Input, Picker, DatePicker, Textarea, ListItem, CheckBox, Row, List, Fab,Header, Button, Title, Footer, FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux'

// import components
import {styles} from '../../styles/Style';
import { colors } from '../../styles/Colors';
import {PLATFORM} from '../../styles/Typography';

const AppLoadingView = (props) => {
  useEffect(() => {
    props.navigation.navigate('App');
  })
  return (<></>)
};

export default AppLoadingView;
