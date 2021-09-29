// import defaullt libraries
import React, { Fragment, useEffect,useState } from 'react';
import { SearchBar, Avatar } from 'react-native-elements';
import {View, Keyboard, TouchableOpacity, ToastAndroid, FlatList, Platform,ActivityIndicator, BackHandler, Dimensions} from 'react-native';
import { Container, Content, Left, Right, Card, CardItem,Thumbnail, Body, Text, Spinner, Grid, Col, Label, Item, Input, Picker, DatePicker, Textarea, ListItem, CheckBox, Row, List, Fab,Header, Button, Title, Footer, FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux'
import moment from 'moment';

// import components
import {styles} from '../../styles/Style';
import { colors } from '../../styles/Colors';
import {PLATFORM} from '../../styles/Typography';
import HeaderView from '../header';

const HomeView = (props) => {

  const [usersList, setUsersList] = useState([]);
  const [postsPerPage] = useState(20);
  const [offset, setOffset] = useState(1);
  const [pageCount, setPageCount] = useState(0)
  const [loader, setLoader] = useState(false);
  var {height, width} = Dimensions.get('window');

  var currentCount = 0;
  let days = '';

  useEffect(() => {
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

  /** Navigate to Details module **/
function goToUserDetails(item) {
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
            <Text style={[styles.itemName, {paddingBottom: 4}]} >{u.item.name.first.trim() + " " + u.item.name.last.trim()}</Text>
            <Text style={[styles.itemPosition, {width: width, flex: 1}]} note>{u.item.email}</Text>
            <Text style={[styles.itemPosition]}>Country | {u.item.location.country}</Text>
          </Body>
          <Right style={{justifyContent: 'center', paddingRight: 0, flexDirection: 'row', justifyContent: 'flex-start', alignItems:'flex-start'}}>
            <Text note> {dateCalculate(u.item.registered.date)} </Text>
            <Icon name="navigate-next" size={20} color="#bbb" />
          </Right>
        </ListItem>
      </TouchableOpacity>
);

// Load users list view
function loadUserList() {
  if (props.users && props.users.results.length > 0) {
      const sorted = props.users.results.sort((a,b)=>{
      const dateA = new Date(`${a.registered.date}`).valueOf();
      const dateB = new Date(`${b.registered.date}`).valueOf();
      if(dateA < dateB){
        return 1; // return -1 here for DESC order
      }
      return -1 // return 1 here for DESC Order
    });
    // console.log(sorted)
    // setUsersList(sorted);

    return(
      <FlatList
        data={sorted}
        renderItem={renderItem}
        keyExtractor={(item,index) => index.toString()}
        // columnWrapperStyle={{height: '40%', width: '50%'}}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        // ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.01}
        // onEndReached={(key) => loadMore(key)}
        
      />
    )
  } else {
      return (
         <View>
           <Text>
             Users Not found
           </Text>
         </View>
       )
    }
  }

  return (
    <Container style={[styles.container, {backgroundColor: colors.WHITE}]}>
        {loader ? (
          <View style={styles.loader}>
            <Spinner color="#18A0FB" />
          </View>
        ) : null}
        <HeaderView leftIcon={false} rightIcon={true} title="Users List" />
        <Content>
          {loadUserList()}
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
