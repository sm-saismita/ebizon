// import defaullt libraries
import React, { Fragment, useEffect,useState } from 'react';
import { SearchBar, Avatar } from 'react-native-elements';
import {View, Keyboard, TouchableOpacity, TouchableHighlight, FlatList, Platform,ActivityIndicator, BackHandler} from 'react-native';
import { Container, Content, Left, Right, Card, CardItem,Thumbnail, Body, Text, Spinner, Grid, Col, Label, Item, Input, Picker, DatePicker, Textarea, ListItem, CheckBox, Row, List, Fab,Header, Button, Title, Footer, FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux'
import moment from 'moment';

// import components
import {styles} from '../../styles/Style';
import { colors } from '../../styles/Colors';
import {PLATFORM} from '../../styles/Typography';

const UserDetailsView = (props) => {

  const [userDetails, setUserDetails] = useState(null);
  const [detailsMinimal, setDetailsMinimal] = useState([null]);
  let days = "";

  function backButtonHandler() {}

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
  

  return (
    <Container style={[styles.container, {backgroundColor: colors.WHITE}]}>
        <Header
          style={styles.all_header}
          androidStatusBarColor={colors.GRAY}>
          <Left
            style={
              Platform.OS === PLATFORM.IOS
                ? {}
                : styles.header_left_android
            }>
            <Button transparent onPress={() => props.navigation.navigate('Home')}>
              <Text
                style={[styles.logout_txt, Platform.OS === PLATFORM.IOS ? {paddingLeft: 14} : null]}>
                Back
              </Text>
            </Button>
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
              {userDetails && (userDetails.name.first + " " + userDetails.name.last)}
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {
            userDetails ? (
              <Fragment>
                    <View style={styles.thumbView}>
                      {
                        userDetails.picture !== null && userDetails.picture.large !== "" && (
                          // <View style={ { borderColor: '#d6d6d6', borderWidth:2,borderRadius: 50, elevation:5,}}>
                          <Thumbnail square large style={{height: 150, width: 150}} source={{uri: (userDetails.picture.large)}} />
                          // </View>
                        )
                      }
                      <View style={styles.borderRad}>
                        <Text style={styles.nameCs}>{userDetails.dob.age}</Text>
                      </View>
                      <View style={{borderWidth:1, borderColor: '#ccc', width: '80%', marginTop: 10}}></View>
                    </View>

                      <View style={{paddingTop: '6%', paddingLeft: '10%',}}>
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
