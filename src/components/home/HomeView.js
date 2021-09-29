// import defaullt libraries
import React, { Fragment, useEffect,useState } from 'react';
import { SearchBar, Avatar } from 'react-native-elements';
import {View, Keyboard, TouchableOpacity, ToastAndroid, FlatList, Platform,ActivityIndicator, BackHandler} from 'react-native';
import { Container, Content, Left, Right, Card, CardItem,Thumbnail, Body, Text, Spinner, Grid, Col, Label, Item, Input, Picker, DatePicker, Textarea, ListItem, CheckBox, Row, List, Fab,Header, Button, Title, Footer, FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux'
import moment from 'moment';

// import components
import {styles} from '../../styles/Style';
import { colors } from '../../styles/Colors';
import {PLATFORM} from '../../styles/Typography';
// import {loadUsers} from "../../store/sagas";

const HomeView = (props) => {

  const [usersList, setUsersList] = useState([]);
  const [postsPerPage] = useState(20);
  const [offset, setOffset] = useState(1);
  // const [posts, setAllPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0)
  const [loader, setLoader] = useState(false);
  var currentCount = 0;
  let days = '';
  
  // Pagination
  function getResponse() {
    console.log('respppp');
    if(props.users && props.users.results) {
      setLoader(false);
      const data = props.users.results;
      console.log('data:',data);
      const slice = data.slice(offset - 1 , offset - 1 + postsPerPage)
      console.log('slice:',slice);
    
      // For displaying Data
      // const postData = getPostData(slice)
    
      // Using Hooks to set value
      setUsersList(slice)
      setPageCount(Math.ceil(data.length / postsPerPage))
    }
  }

  useEffect(() => {
    console.log(props.user);
    if(!props.users || (props.users && props.users.results.length === 0)) {
      props.loadUsers();
    }

    // Device Back button handler
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

  /* useBackButton */
  function handleBackButtonClick() {
    if(currentCount >= 1) {
      BackHandler.exitApp();
    }
    if (currentCount < 1) {
        currentCount += 1;
        ToastAndroid.showWithGravityAndOffset(
            "Press back again to exit",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        );
    }
    setTimeout(() => {
        currentCount = 0;
    }, 2000);
    return true;
  }

  /** Trying for PAgination **/
   function loadMore(key) {
    console.log('key:',key);
    if(key.distanceFromEnd < 0 && Platform.OS === PLATFORM.ANDROID) return;
  }

  /** Navigate to Details module **/
function goToUserDetails(item) {
  console.log(item);
  props.navigation.navigate('AboutTattle',{
    param: item
  });
}

/** Calculate date format **/
function dateCalculate(date) {
  let joinDatew = (new Date().getTime() - new Date(date).getTime())/ (1000 * 3600 * 24);
  let new_dt = '';
  if(joinDatew > 365) {
    joinDatew = parseInt(joinDatew / 365);
    new_dt = moment(new Date(date)).format('LL'); 
    return new_dt;
  } else {
    new_dt = joinDatew
    days = 'Days';
    return (new_dt + " " + days + " ago");
  }
}


  /************** VIEW ************/

  /**
   * Render employee list items
   * @param {object} u - each employee data 
   * @param {number} i - index
   */
   const renderItem = (u,i) => (
     <TouchableOpacity>
     <ListItem style={[styles.rowFrontBo, {justifyContent: 'center'}]} noBorder avatar onPress={()=>goToUserDetails(u.item)} key={u.index} >
          {/* <Left > */}
            {
              u.item.picture && u.item.picture.thumbnail !== "" ? (
                  <View style={{alignself: 'center', justifyContent: 'center'}}>
                    <Thumbnail small style={{width: 42, height: 42 }} square source={{uri: (u.item.picture.thumbnail)}} />
                  </View>
              ) : (
                <View style={{alignself: 'center', justifyContent: 'center'}}>
                  <Avatar rounded title={u.item.name.first.charAt(0)} size="small" activeOpacity={0.7} containerStyle={{backgroundColor: "#bbb", height: 40, width:40, borderRadius: 50,}} />
                </View>
              )
            }
        {/* </Left> */}
        <Body style={{marginTop: -3}}>
          <Text style={[styles.itemName]} >{u.item.name.first.trim() + " " + u.item.name.last.trim()}</Text>
          <Text style={[styles.itemPosition]} note>{u.item.email}</Text>
          <Text style={[styles.itemPosition]}>Country | {u.item.location.country}</Text>
        </Body>
        <Right style={{justifyContent: 'center', paddingRight: 0, flexDirection: 'row', justifyContent: 'flex-start', alignItems:'flex-start'}}>
          <Text note> {dateCalculate(u.item.registered.date)} </Text>
          <Icon name="navigate-next" size={20} color="#bbb" />
        </Right>
      </ListItem>
      </TouchableOpacity>
);

/**
   * Render Footer section while scrolling down
   */
 function renderFooter() {
  // if (!props.loading || props.search) return null;
  return (
      <View style={styles.loading}>
          <ActivityIndicator color="#0cb9f2" animating={loader} style={{ height: 30 }}/>
      </View>
    // <ActivityIndicator style={{ color: '#000', height: 30 }} />
  )
}

  return (
    <Container style={[styles.container, {backgroundColor: colors.WHITE}]}>
        {loader ? (
          <View style={styles.loader}>
            <Spinner color="#18A0FB" />
          </View>
        ) : null}
        <Header
          style={styles.all_header}
          androidStatusBarColor={colors.GRAY}>
          <Left style={
              Platform.OS === PLATFORM.IOS
                ? {}
                : styles.header_left_android
            } />
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
              Users List
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {
            (props.users && props.users.results.length > 0) ? (
                <FlatList
              data={props.users.results}
              renderItem={renderItem}
              keyExtractor={(item,index) => index.toString()}
              // columnWrapperStyle={{height: '40%', width: '50%'}}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              // ListFooterComponent={renderFooter}
              onEndReachedThreshold={0.01}
              // onEndReached={(key) => loadMore(key)}
              
            />
            ) : (
              <View>
                <Text>
                  Users Not found
                </Text>
              </View>
            )
          }
        </Content>
  </Container>
  );
};


const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    users: state.users,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => ({
  loadUsers: () => { dispatch({ type: "API_CALL_REQUEST" }); },
 });

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
