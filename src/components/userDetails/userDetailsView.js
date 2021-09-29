// import defaullt libraries
import React, { Fragment, useEffect,useState } from 'react';
import { SearchBar, Avatar } from 'react-native-elements';
import {View, Keyboard, TouchableOpacity, TouchableHighlight, FlatList, Platform,ActivityIndicator, BackHandler} from 'react-native';
import { Container, Content, Left, Right, Card, CardItem,Thumbnail, Body, Text, Spinner, Grid, Col, Label, Item, Input, Picker, DatePicker, Textarea, ListItem, CheckBox, Row, List, Fab,Header, Button, Title, Footer, FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux'
import moment from 'moment';
import HeaderView from '../header';

// import components
import {styles} from '../../styles/Style';
import { colors } from '../../styles/Colors';
import {PLATFORM} from '../../styles/Typography';

const UserDetailsView = (props) => {


  const [userDetails, setUserDetails] = useState(null);
  let days = "";

  useEffect(() => {
    console.log(props.navigation.state.params.param)
    if(props.navigation.state.params.param) {
      setUserDetails(props.navigation.state.params.param);
    }

    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };

  }, []);

    /* useBackButton */
  function handleBackButtonClick() {
    props.navigation.goBack();
    return true;
  }

  /**
   * Calculate Date as per the registered date
   */
  function dateCalculate() {
    let joinDatew = (new Date().getTime() - new Date(userDetails.registered.date).getTime())/ (1000 * 3600 * 24);
    let new_dt = '';
    if(joinDatew > 365) {
      joinDatew = parseInt(joinDatew / 365);
      new_dt = moment(new Date(userDetails.registered.date)).format('LL'); 
      days = 'Years';
      return new_dt;
    } else {
      new_dt = joinDatew;
      days = 'Days';
      return (new_dt + " " + days + " ago");
    }
  }
  
  /**************************** VIEW ***********************/

  // Load Users Image
  function loadImageOfUser() {
    return(
      <View style={styles.thumbView}>
        {
          userDetails.picture !== null && userDetails.picture.large !== "" && (
            <View style={{flexDirection: 'row'}}>
              <Thumbnail square large style={{height: 200, width: 200}} source={{uri: (userDetails.picture.large)}} />
              
              <View style={{position: 'relative', alignItems: 'flex-end', justifyContent: 'flex-end', paddingLeft: 20 }}>
                <IconCom name='square' size={50} style={{position: 'absolute', transform: [{ rotate: "45deg" }],bottom: -5}} color="#f9cb9c" >
                </IconCom>
              </View>
              <View style={{alignItems: 'flex-end', justifyContent: 'flex-end', marginLeft: -32, bottom: 12}}>
                <Text style={{fontWeight: 'bold'}}>{userDetails.dob.age}</Text>
              </View>
            </View>
          )
        }
        <View style={{borderWidth:1, borderColor: '#ccc', width: '80%', marginTop: 30}}></View>
      </View>
    )
  }

  // Load Users General Information
  function loadGeneralInfo() {
    return(
      <View style={{paddingTop: '2%', paddingLeft: '10%',}}>
        <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row'}}>
          <Text style={styles.emailCs}>Email: </Text>
          <Text style={styles.positionView}>{userDetails.email}</Text>
        </View>
        <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: '2%', flexDirection: 'row',}}>
          <Text style={styles.emailCs}>Date Joined: </Text>
          <Text style={styles.positionView}>{dateCalculate()}</Text>
        </View>
        <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: '2%', flexDirection: 'row',}}>
          <Text style={styles.emailCs}>DOB: </Text>
          <Text style={styles.positionView}>{moment(new Date(userDetails.dob.date)).format('DD MMMM YYYY')}</Text>
        </View>

        <View>
          <Text style={styles.location}> Location </Text>
        </View>
        <View style={{borderWidth:1, borderColor: '#ccc', width: '90%', marginTop: 10}}></View>
      </View>
    )
  }

  // Load Users Location info
  function loadLocationOfUser() {
    return(
      <View style={{paddingTop: '2%', paddingLeft: '10%',}}>
        <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row'}}>
          <Text style={styles.emailCs}>City: </Text>
          <Text style={styles.positionView}>{userDetails.location.city}</Text>
        </View>
        <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: '2%', flexDirection: 'row',}}>
          <Text style={styles.emailCs}>State: </Text>
          <Text style={styles.positionView}>{userDetails.location.state}</Text>
        </View>
        <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: '2%', flexDirection: 'row',}}>
          <Text style={styles.emailCs}>Country: </Text>
          <Text style={styles.positionView}>{userDetails.location.country}</Text>
        </View>
        <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: '2%', flexDirection: 'row',}}>
          <Text style={styles.emailCs}>Postcode: </Text>
          <Text style={styles.positionView}>{userDetails.location.postcode}</Text>
        </View>
      </View>
    )
  }

  return (
    <Container style={[styles.container, {backgroundColor: colors.WHITE}]}>
      <HeaderView leftIcon={true} rightIcon={false} title={userDetails && (userDetails.name.first + " " + userDetails.name.last)} navigation={props.navigation} />
        <Content>
          {
            userDetails ? (
              <Fragment>
                {loadImageOfUser()}
                {loadGeneralInfo()}
                {loadLocationOfUser()}
              </Fragment>
            ) : (
              null
            )
          }
        </Content>
        </Container>
  );
};

export default UserDetailsView;
