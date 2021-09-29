/**
 * Style.js
 * Create css for the app
 */
import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors } from './Colors';
import { fontFamily, PLATFORM} from './Typography';

const { height,width } = Dimensions.get('window');

export const styles = StyleSheet.create({

  // Common styles
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.CUSTOM_BACKGROUND,
  },
  testColor:{
    borderColor:'red',
    borderWidth:1,
  },
  loader: {
    lineHeight: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom:  '0%',
    left: 0,
    right:  '0%',
    zIndex: 9999,
  },
  dialog_content: {
    backgroundColor: colors.CUSTOM_BACKGROUND,
    borderRadius: 15,
    opacity: 1,
    paddingHorizontal: 0,
    paddingBottom: 0,
    ...Platform.select({
      ios: {
      },
      android: {
        width: '50%'
      },
      default: {
        // other platforms, web for example
      },
    }),
  },
  dialog_title: {
    color: colors.CUSTOM_BLACK_TITLE,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fontFamily.FONT_FAMILY,
  },
  dialog_desc: {
    color: colors.CUSTOM_GRAY_TEXT,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 0,
    paddingHorizontal: 16,
    fontFamily: fontFamily.FONT_FAMILY,
    fontSize: 14,
    lineHeight: 21,
  },
  dialog_row: {
    height: 48,
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.CUSTOM_BORDER,
  },
  dialog_l_button: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    lineHeight: 36,
    textTransform: 'capitalize',
    color: colors.CUSTOM_BLUE,
  },
  dialog_r_button: {
    height: '100%',
    borderLeftColor: colors.CUSTOM_BORDER,
    borderLeftWidth: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    lineHeight: 36,
    textTransform: 'capitalize',
    color: colors.CUSTOM_BLUE,
  },
  dialog_l_button_ios: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    lineHeight: 42,
    textTransform: 'capitalize',
    color: colors.CUSTOM_BLUE,
  },
  dialog_r_button_ios: {
    height: '100%',
    borderLeftColor: colors.CUSTOM_BORDER,
    borderLeftWidth: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    lineHeight: 42,
    textTransform: 'capitalize',
    color: colors.CUSTOM_BLUE,
  },
  FONT_REGULAR: {
    fontFamily: fontFamily.FONT_FAMILY,
  },
  cu__avatar: {
    backgroundColor: "#bbb", 
    height: 30, 
    width:30, 
    borderRadius: 50, 
  },
  cu_thumbnail: {
    height: 30, 
    width:30, 
    borderRadius: 50,
  },

  // ****************//
  employeeStyle: { 
    color: '#fff', 
    fontSize: 21,
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
        fontFamily: 'calibri',
      },
      android: {
        fontFamily: 'calibrib',
      },
      default: {
        // other platforms, web for example
      },
    }),
    // textAlign: 'center', // <-- the magic
    marginTop: 0,
    width: 300,
    letterSpacing: 0.5,
  },
  rowFrontBo: {
    backgroundColor: 'transparent',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingTop: '1%',
    paddingBottom: '1%',
    // justifyContent: 'center',
    // height: 70,
    marginLeft: '5%', 
    marginRight: '5%', 
    // marginBottom: '2%',
    // marginTop: '2%',
  },
  itemName: {
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
        fontFamily: 'calibri',
        lineHeight: 25,
        // paddingTop: 2
      },
      android: {
        fontFamily: 'calibrib',
      },
      default: {
        // other platforms, web for example
      },
    }),
    color: '#5b5b5b',
    fontSize: 16,
    letterSpacing: 0.5,
    textAlign: 'left',
  },
  itemPosition: {
    fontFamily: 'calibri',
    color: '#7d7d7d',
    fontSize: 16,
    ...Platform.select({
      ios: {
        // lineHeight: 24,
      },
      android: {
      },
      default: {
        // other platforms, web for example
      },
    }),
    // letterSpacing: 2
  },
  separator: {
    width: '100%',
    backgroundColor: '#CED0CE'
  },
  cardStyle: {
    marginTop: '15%', 
    elevation: 5, 
    marginLeft: 8, 
    marginRight: 8,
    borderRadius: 10,
    // borderColor: 'red'
  },
  thumbView: {
    // position: 'absolute',
    // top: '-21%',
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
  },
  borderRad: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 50,
    height: 40,
    width: 40,
    marginTop: 10
  },
  nameCs: {
    fontSize:20,
    color: '#5b5b5b',
    // fontWeight: 'bold',
    marginTop: 6,
    marginLeft: 6,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
        fontFamily: 'calibri',
      },
      android: {
        fontFamily: 'calibrib',
      },
      default: {
        // other platforms, web for example
      },
    }),
    letterSpacing: 0.5
  },
  emailCs: {
    // marginTop:3,
    fontSize:18,
    color: '#000',
    fontFamily: 'calibri',
    letterSpacing: 0.5,
    ...Platform.select({
      ios: {
        // paddingBottom: 5,
        lineHeight: 25,
      },
      android: {
      },
      default: {
        // other platforms, web for example
      },
    }),
  },
  positionView : {
    // lineHeight: 30,
    // marginTop: -1,
    fontSize:18,
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf:'center',
    color: '#5b5b5b',
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
        fontFamily: 'calibri',
      },
      android: {
        fontFamily: 'calibrib',
      },
      default: {
        // other platforms, web for example
      },
    }),
    letterSpacing: 0.5,
    // marginTop: -10
    // width: '100%'
  },
  location: {
    textTransform: 'uppercase',
    paddingTop: 30,
    fontWeight: 'bold'
  }
})