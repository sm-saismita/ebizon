// import defaullt libraries
import React, {Fragment} from 'react';
import { View,TouchableOpacity, Platform, ActivityIndicator } from 'react-native';
import { Container, Text, Form, Item, Input, Spinner, Button, Header, Left, Body, Title, Right, Footer, FooterTab, List, ListItem, Card, CardItem, ScrollableTab, Content, Radio, Label, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

// import components
import {styles} from '../../styles/Style';
import { colors } from '../../styles/Colors';
import {PLATFORM} from '../../styles/Typography';

const HeaderView = (props) => {

  return (
    <Fragment>
      <Header
          style={styles.all_header} transparent
          androidStatusBarColor={colors.GRAY}>
            <Left
            style={
              Platform.OS === PLATFORM.IOS
                ? {}
                : styles.header_left_android
            }>
              {
                props.leftIcon ? (
                <Button transparent onPress={() => props.navigation.navigate('Home')}>
                  <Icon name="chevron-left" color='#000' size={20} />
                </Button>
                ) : null
              }
          </Left>
          <Body
            style={
              Platform.OS === PLATFORM.IOS
                ? {flex: 1, justifyContent: 'center'}
                : styles.header_body_android
            }>
            <Title
              style={
                Platform.OS === PLATFORM.IOS
                  ? {}
                  : styles.header_filter_title
              }>
              {props.title}
            </Title>
          </Body>
          <Right >
            {
              props.rightIcon ? (
                <FeatherIcon name="edit" size={20} color="#000" style={{paddingRight: 20}} />
              ) : null
            }
          </Right>
        </Header>
    </Fragment>
  )
};
export default HeaderView;
