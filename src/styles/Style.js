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
  content_flex_end: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end'
  },
  card_view: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 12,
    marginBottom: 16,
    borderRadius: 4,
    shadowColor: '#0000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    height: 48,
  },
  card_view_ios: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 50,
    marginBottom: 16,
    borderRadius: 4,
    shadowColor: '#0000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    height: 48,
  },
  card_view_left: {
    backgroundColor: 'transparent',
    padding: 0
  },
  card_view_left_icon: {
    width: 48,
    justifyContent: 'center'
  },
  card_view_search: {
    color: colors.CUSTOM_GRAY_TEXT,
    fontSize: 16,
    paddingLeft: 0,
    textTransform: 'capitalize',
    fontFamily: fontFamily.FONT_FAMILY,
  },
  content_header_title: {
    fontSize: 12,
    color: colors.CUSTOM_BLACK_TITLE,
    paddingLeft: 16,
    paddingBottom: 12,
    fontFamily: fontFamily.FONT_FAMILY,
  },
  full_height_width: {
    width: '100%',
    height: '100%'
  },

  // SIDE BAR

  c__logo: {
    height: 50,
    width: 100, 
  },
  c__avatar: {
    backgroundColor: "#bbb", 
    height: 40, 
    width:40, 
    borderRadius: 50, 
  },
  side_header: {
    height: '15%',
    justifyContent: 'center',
    borderColor: colors.CUSTOM_BORDER,
    borderBottomWidth: 1,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: Platform.OS === PLATFORM.IOS ? '10%' : 0
  },
  title_separator: {
    backgroundColor: '#fff',
    paddingTop: 24,
    paddingBottom: 8,
    paddingLeft: 0,
    marginLeft: 24,
  },
  separator_text: {
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize: 12,
    marginLeft: 0,
    marginBottom: 0,
    fontFamily: fontFamily.FONT_FAMILY,
  },
  board_list: {
    marginLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  board_list_title: {
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize: Platform.OS === PLATFORM.IOS ? 13 : 14,
    paddingLeft: 20,
    fontFamily: fontFamily.FONT_FAMILY,
    fontWeight: 'bold',
    lineHeight: Platform.OS === PLATFORM.IOS ? 0 : 20,
  },
  title_separator_border: {
    backgroundColor: '#fff',
    paddingTop: 24,
    paddingBottom: 8,
    borderTopColor: colors.CUSTOM_BORDER,
    borderTopWidth: 1,
    paddingLeft: 0,
    marginLeft: 24,
  },
  sidebar_title: {
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize: 14,
    fontFamily: fontFamily.FONT_FAMILY,
    fontWeight: 'bold',
    lineHeight: 20,
  },

  // LOGIN

  forgotpsw_lock: {
    alignItems: 'center',
    marginTop: 18,
    justifyContent: 'center'
  },
  reset_psw_view: {
    marginTop: 29,
    alignItems: 'center',
    justifyContent: 'center'
  },
  reset_psw_h2: {
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize: 24,
    fontFamily: fontFamily.FONT_FAMILY,
    marginTop: 4,
    lineHeight: 40,
  },
  reset_desc: {
    textAlign: 'center',
    width: 232,
    fontSize: 16,
    lineHeight: 23,
    color: colors.CUSTOM_GRAY_TEXT,
    fontFamily: fontFamily.FONT_FAMILY,
    marginTop: 8,
  },
  form_view:{
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 32,
    paddingTop: 32,
  },
  logo_ios_view: {
    marginLeft: '8%', 
    justifyContent: 'center'
  },
  logo_android_view: {
    marginLeft: '8%', 
    justifyContent: 'center', 
    height: '22%'
  },
  logo_image: {
    height: Platform.OS === PLATFORM.IOS ? '26%' : '50%', 
    width: '30%', 
    justifyContent: 'center'
  },
  welcome_header: {
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize: 32,
    fontWeight: '400',
    fontFamily: fontFamily.FONT_FAMILY,
    lineHeight: 40,
  },
  welcome_subheader:{
    color: colors.CUSTOM_GRAY_TEXT,
    fontFamily: fontFamily.FONT_FAMILY,
    fontSize: 20,
    marginTop: 4,
  },
  form_view_sign: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 32,
    paddingTop: 48,
  },
  modal_style_ios: {
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30
  },
  modal_style_android: {
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    flex: 1
  },
  l__welcome: {
    fontFamily: fontFamily.FONT_FAMILY,
    marginHorizontal:  32,
  },
  l__formField: {
    marginHorizontal: 32
  },
  l__inputForm: {
    backgroundColor: colors.CUSTOM_BACKGROUND,
    borderColor: colors.CUSTOM_BACKGROUND,
    borderBottomWidth : 1,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 4
  },
  l__forgotText: {
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize: 14,
    textTransform: 'capitalize',
    fontFamily: fontFamily.FONT_FAMILY,
  },
  l__buttonText: {
    fontSize:  16,
    fontFamily: fontFamily.FONT_FAMILY,
    textAlign: 'center',
    color: 'white',
  },
  l__loginButton: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 4,
    marginHorizontal: 32,
    height:48
  },
  f__headerText: {
    marginTop: 28,
    marginHorizontal: 32,
  },
  f__cancel: {
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize:13,
    fontFamily: fontFamily.FONT_FAMILY,
    textAlign: 'right',
  },

  // ACCOUNT

  all_header:{
    backgroundColor: '#eeeeee',
    // borderBottomColor: colors.CUSTOM_BORDER,
    // borderBottomWidth: 1,
  },
  header_left_android: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  header_body_android: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width
  },
  a__headeerTitle: {
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize:  16,
    fontWeight: 'bold',
    fontFamily: fontFamily.FONT_FAMILY
  },
  logout_txt: {
    color: colors.CUSTOM_BLUE,
    fontSize: 14,
    textTransform: 'capitalize',
    fontFamily: fontFamily.FONT_FAMILY,
  },
  avatar_row: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: colors.CUSTOM_BACKGROUND,
  },
  a__accountAvatar: {
    backgroundColor: "#bbb", 
    borderRadius: 50, 
  },
  acc_title: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 12,
  },
  acc_title_txt: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.CUSTOM_BLACK_TITLE,
    fontFamily: fontFamily.FONT_FAMILY,
  },
  acc_title_mail: {
    color: colors.CUSTOM_GRAY_TEXT,
    fontSize: 14,
    fontFamily: fontFamily.FONT_FAMILY,
  },
  a__accountModule: {
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize:  14,
    fontFamily: fontFamily.FONT_FAMILY,
    marginTop: 6,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  acc_dialog_desc: {
    color: colors.CUSTOM_GRAY_TEXT,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 8,
    paddingHorizontal: 16,
    fontFamily: fontFamily.FONT_FAMILY,
    fontSize: 14,
    lineHeight: 21,
  },
  acc_android_view: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.CUSTOM_BORDER,
    padding: 0,
  },
  acc_ios_view: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.CUSTOM_BORDER,
    marginHorizontal: 16,
    marginBottom: 16
  },
  acc_psw_input: {
    width: '100%',
    marginBottom: 0,
    marginLeft: 0,
    paddingHorizontal: 12,
    borderBottomColor: colors.CUSTOM_BORDER,
    borderBottomWidth: 1,
  },
  acc_bottom_input: {
    width: '100%',
    marginBottom: 0,
    marginLeft: 0,
    paddingHorizontal: 12,
  },
  acc_psw_input_ios: {
    marginBottom: 0,
    borderRadius: 1,
    width: '100%',
    marginLeft: 0,
    borderColor: 'transparent',
    borderBottomColor: colors.CUSTOM_BORDER,
    borderBottomWidth: 1
  },
  acc_bottom_input_ios: {
    marginBottom: 0,
    borderRadius: 1,
    width: '100%',
    marginLeft: 0,
    borderColor: 'transparent',
  },

  // CUSTOMERS AND USERS

  thumbnail: {
    height: 40, 
    width:40, 
    borderRadius: 50, 
    marginLeft: -2,
    marginTop: -2
  },
  border_bottom: {
    borderBottomColor: colors.CUSTOM_BORDER,
    borderBottomWidth: 1
  },
  name_text: {
    fontSize: 14,
    color: colors.CUSTOM_BLACK_TITLE,
    fontFamily: fontFamily.FONT_FAMILY,
    fontWeight: 'bold',
  },
  email_text: {
    fontSize: 12,
    color: colors.CUSTOM_GRAY_TEXT,
    marginTop: 2,
    fontFamily: fontFamily.FONT_FAMILY,
  },

  // CONTACT US AND SEARCH

  contact_requestor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.CUSTOM_BLACK_TITLE,
    textTransform: 'capitalize',
    justifyContent: 'flex-end',
    width: '100%',
    fontFamily: fontFamily.FONT_FAMILY,
  },
  row_center_flex: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  contact_date: {
    fontSize: 13,
    lineHeight: 19,
    fontWeight: '500',
    fontFamily: fontFamily.FONT_FAMILY,
  },
  contact_listitem: {
    borderColor: colors.CUSTOM_BORDER,
    paddingBottom: 20,
    paddingTop: 20
  },
  row_grid: {
    marginTop: 4,
    marginBottom: 4,
    marginLeft: -2
  },
  cont_title: {
    fontSize: 14,
    color: colors.CUSTOM_BLACK_TITLE,
    fontWeight: '600',
    textTransform: 'capitalize',
    marginLeft: 4,
    fontFamily: fontFamily.FONT_FAMILY,
  },
  cont_message: {
    color: colors.CUSTOM_GRAY_TEXT,
    fontSize: 13,
    marginLeft: 2,
    textTransform: 'capitalize',
    fontFamily: fontFamily.FONT_FAMILY,
  },
  cont_uuid: {
    color: colors.CUSTOM_GRAY_TEXT,
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 2,
    fontFamily: fontFamily.FONT_FAMILY,
  },
  cont_colors_status: {
    backgroundColor: colors.CUSTOM_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  color_row: {
    alignItems: 'center',
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 2,
    paddingBottom: 2,
  },
  cont_status: {
    color: colors.CUSTOM_GRAY_TEXT,
    fontSize: 12,
    textTransform: 'capitalize',
    marginLeft: 3,
    marginRight: 0,
    fontFamily: fontFamily.FONT_FAMILY,
  },
  search_item_devider: {
    color: colors.CUSTOM_GRAY_TEXT,
    fontSize: 12,
    marginLeft: '1%',
    fontFamily: fontFamily.FONT_FAMILY,
  },
  search_sub_title: {
    fontSize: 12,
    color: colors.CUSTOM_GRAY_TEXT,
    textTransform: 'capitalize',
    marginLeft: '-2%',
    fontFamily: fontFamily.FONT_FAMILY,
  },
  cont_data_not_found: {
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: fontFamily.FONT_FAMILY,
  },

  // FILTER

  filter_header: {
    marginLeft: 5,
    borderTopColor: '#eee',
    borderTopWidth: 1
  },
  filter_list_item: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    paddingTop: 14,
    paddingBottom: 14,
  },
  view_none_row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 25,
  },
  disply_text: {
    color: colors.CUSTOM_GRAY_TEXT,
    fontSize: 13,
    textTransform: 'capitalize',
    marginHorizontal: 0,
    paddingRight: 0,
    fontFamily: fontFamily.FONT_FAMILY,
  },
  modal_header: {
    backgroundColor: colors.WHITE,
    shadowRadius: 0,
    shadowColor: 'transparent',
    elevation: 0,
    borderWidth: 0,
    borderBottomColor: 'transparent',
  },
  header_modal_row: {
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16
  },
  modal_body_header: {
    color: colors.CUSTOM_GRAY_TEXT,
    fontSize: 13,
    textTransform: 'capitalize',
    marginLeft: 0,
    fontFamily: fontFamily.FONT_FAMILY,
  },
  clear_txt_modal: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  modal_clear_all: {
    color: colors.CUSTOM_GRAY_TEXT,
    fontSize: 13,
    marginLeft: 4,
    fontFamily: fontFamily.FONT_FAMILY,
  },
  modal_search_container: {
    paddingHorizontal: 24,
    paddingVertical: 0,
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  modal_search_input: {
    height: 40,
    backgroundColor: colors.CUSTOM_BACKGROUND,
    borderRadius: 6,
    marginVertical: 8,
  },
  active_checkbox: {
    borderRadius: 4,
    backgroundColor: colors.CUSTOM_BLUE,
    borderColor: colors.CUSTOM_BLUE,
  },
  inactive_checkbox: {
    borderRadius: 4,
    borderColor: colors.CUSTOM_GRAY_TEXT,
    borderWidth: 1,
    paddingLeft: 0,
  },
  checkbox_data: {
    marginLeft: 16,
    color: colors.CUSTOM_BLACK_TITLE,
    fontFamily: fontFamily.FONT_FAMILY,
  },
  cancel_modal_button: {
    textTransform: 'capitalize',
    fontSize: 16,
    color: colors.CUSTOM_BLACK_TITLE,
    fontFamily: fontFamily.FONT_FAMILY,
    borderRadius: 0,
  },
  apply_modal_button: {
    textTransform: 'capitalize',
    fontSize: 14,
    color: colors.WHITE,
    fontFamily: fontFamily.FONT_FAMILY,
    borderRadius: 0,
  },
  header_filter_title: {
    color: colors.CUSTOM_BLACK_TITLE,
    textAlign: 'center',
    flex: 1,
    marginTop: 14,
    fontSize: 18,
    width: width
  },
  header_filter_title_ios: {
    color: colors.CUSTOM_BLACK_TITLE,
    textAlign: 'center',
    width: 200,
    fontSize: 14
  },
  clear_view: {
    justifyContent: 'center',
    backgroundColor: colors.CUSTOM_BACKGROUND,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  modal_style_andro: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },

  // EDIT TATTLE

  header_cancel: {
    fontFamily: fontFamily.FONT_FAMILY,
    color: colors.CUSTOM_BLUE,
    fontSize: 13,
    textTransform: 'capitalize',
  },
  append_row: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginRight: '-8%',
  },
  modal_text_cont: {
    fontFamily: fontFamily.FONT_FAMILY,
    color: colors.CUSTOM_GRAY_TEXT,
    fontSize: 15,
    textTransform: 'capitalize',
  },
  dropdown_picker: {
    width: '100%',
    height: 24,
    fontSize: 14,
    backgroundColor: 'transparent',
    color: colors.CUSTOM_GRAY_TEXT,
    borderBottomColor: 'transparent',
  },
  cc_marked: {
    height: 50,
    padding: 16,
    backgroundColor: '#FFF'
  },
  edit_separator: {
    fontFamily: fontFamily.FONT_FAMILY,
    color: colors.CUSTOM_GRAY_TEXT,
    fontSize: 12,
  },
  edit_title: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    paddingTop: 12,
    paddingBottom: 12,
  },
  button_edit_style: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 0,
    paddingTop: 0,
    height: 24,
  },
  button_edit_text: {
    fontFamily: fontFamily.FONT_FAMILY,
    color: colors.CUSTOM_GRAY_TEXT,
    fontSize: 14,
    textTransform: 'capitalize',
    marginRight: 0,
    paddingRight: 0,
  },
  flex_end: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
  },
  dialog_input: {
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#ccc'
  },

  // TATTLE DETAILS

  textInputField: {
    flexDirection: 'row',
  },
  buttonStyle: {
    justifyContent: 'center',
  },
  iconNote: {
    width:'10%', 
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  n__avatar: {
    width:30, 
    height: 30, 
    borderRadius: 50,
    backgroundColor: "#bbb", 
  },
  noteDP: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderColor: colors.CUSTOM_BORDER,
    borderWidth: 1,
  }, 
  noteName: {
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize: 14,
    fontFamily: fontFamily.FONT_FAMILY,
    fontWeight: 'bold',
    marginLeft: 10
  },
  segmentActive: {
    backgroundColor: colors.CUSTOM_BLUE,
    width: '50%',
    justifyContent: 'center',
    borderColor: colors.CUSTOM_BLUE,
  },
  segmentDefault: {
    backgroundColor: colors.WHITE,
    width: '50%',
    justifyContent: 'center',
    borderColor: colors.CUSTOM_BORDER,
  },
  note_header: {
    backgroundColor: colors.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  ios_flex_1: {
    flex: 1, 
    justifyContent: 'center'
  },
  andr_flex_2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  status_header: {
    backgroundColor: colors.WHITE,
    elevation: 1,
    marginVertical: 16,
  },
  status_header_title: {
    color: colors.CUSTOM_BLACK_TITLE,
    textAlign: 'center',
    flex: 1,
    paddingTop: 15,
  },
  active_status: {
    color: colors.CUSTOM_BLUE,
    fontFamily: fontFamily.FONT_FAMILY,
  },
  inactive_status: {
    color: colors.BLACK,
    fontFamily: fontFamily.FONT_FAMILY,
  },
  view_Segment: {
    backgroundColor: Platform.OS === PLATFORM.IOS ? 'transparent' : 'transparent',
    padding: 16,
    height: 64,
  },
  top_left_radius: {
    borderTopLeftRadius: 5, 
    borderBottomLeftRadius: 5
  },
  top_right_radius: {
    borderTopRightRadius: 5, 
    borderBottomRightRadius: 5
  },
  segment_cust_actve: {
    color: colors.WHITE,
    textTransform: 'capitalize',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: fontFamily.FONT_FAMILY,
  },
  segment_cust_default: {
    color: colors.CUSTOM_GRAY_TEXT,
    textTransform: 'capitalize',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: fontFamily.FONT_FAMILY,
  },
  card_style: {
    width: '80%',
    borderRadius: 4,
    elevation: 5,
    marginLeft: '10%',
    position: 'absolute',
    zIndex: 9999,
  },
  row_name: {
    justifyContent: 'flex-start',
    alignContent: 'center',
    paddingLeft: 16,
    flexWrap: 'wrap',
  },
  email_suggested: {
    fontFamily: fontFamily.FONT_FAMILY,
    fontSize: 12,
    color: colors.CUSTOM_GRAY_TEXT,
    textTransform: 'lowercase',
  },
  addnote_btn: {
    justifyContent: 'center',
    marginBottom: Platform.OS === PLATFORM.IOS ? 30 : 0,
  },
  addnote_text: {
    fontFamily: fontFamily.FONT_FAMILY,
    color: colors.CUSTOM_BLUE,
    fontSize: 16,
    textTransform: 'capitalize',
    marginHorizontal: 0,
  },
  show_more_padding: {
    paddingTop: 12,
    paddingBottom: 12,
    marginLeft: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  showmore_key_text: {
    fontFamily: fontFamily.FONT_FAMILY,
    fontSize: 14,
    color: colors.CUSTOM_GRAY_TEXT,
    justifyContent: 'flex-start',
    width: '100%',
  },
  showmore_value: {
    fontFamily: fontFamily.FONT_FAMILY,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.CUSTOM_BLACK_TITLE,
    justifyContent: 'flex-start',
    width: '100%',
  },
  history_row: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.CUSTOM_BACKGROUND,
  },
  history_text: {
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize: 14,
    textTransform: 'capitalize',
    marginLeft: 3,
    marginRight: 0,
    fontFamily: fontFamily.FONT_FAMILY,
    fontWeight: 'bold',
  },
  history_list: {
    elevation: 0,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  listitem_history: {
    marginLeft: 18,
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
  },
  user_uuid_hist: {
    fontFamily: fontFamily.FONT_FAMILY,
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize: 14,
    justifyContent: 'flex-start',
    marginLeft: 16,
    fontWeight: 'bold',
  },
  name_hist: {
    fontFamily: fontFamily.FONT_FAMILY,
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize: 14,
    justifyContent: 'flex-start',
    marginLeft: 16,
    fontWeight: 'bold',
  },
  date_info: {
    fontFamily: fontFamily.FONT_FAMILY,
    color: colors.CUSTOM_GRAY_TEXT,
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  code_type: {
    width: '90%',
    marginTop: 4,
    marginLeft: 27,
    alignItems: 'flex-start',
  },
  text_field: {
    fontFamily: fontFamily.FONT_FAMILY,
    color: colors.CUSTOM_GRAY_TEXT,
    fontSize: 12,
    marginLeft: 4,
    lineHeight: 18,
  },
  value_text: {
    fontFamily: fontFamily.FONT_FAMILY,
    color: colors.CUSTOM_GRAY_TEXT,
    fontSize: 12,
    width: '80%',
  },
  updated_status: {
    fontFamily: fontFamily.FONT_FAMILY,
    color: colors.CUSTOM_BLUE,
    fontSize: 12,
  },
  detail_status_row: {
    alignItems: 'center',
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 2,
    paddingBottom: 2,
  },
  detail_status_header: {
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize: 12,
    textTransform: 'capitalize',
    marginLeft: 3,
    marginRight: 0,
    fontFamily: fontFamily.FONT_FAMILY,
  },
  opacity_flex: {
    flexDirection: 'row',
    marginLeft: 8,
    alignItems: 'center',
  },
  selected_status: {
    fontFamily: fontFamily.FONT_FAMILY,
    color: colors.CUSTOM_BLUE,
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 0,
  },
  updated_on: {
    fontFamily: fontFamily.FONT_FAMILY,
    fontSize: 12,
    color: colors.CUSTOM_GRAY_TEXT,
    textTransform: 'capitalize',
  },
  date_id: {
    fontFamily: fontFamily.FONT_FAMILY,
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  list_view: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    backgroundColor: '#fff',
  },
  list_view_top: {
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    backgroundColor: '#fff',
  },
  custom_show_more: {
    fontFamily: fontFamily.FONT_FAMILY,
    fontSize: 12,
    color: colors.CUSTOM_BLUE,
    fontWeight: '600',
    textTransform: 'capitalize',
    justifyContent: 'center',
    marginTop: 0,
  },
  flex_xolumn: {
    flexDirection: 'column',
    marginHorizontal: 24,
    marginVertical: 10,
  },
  tattle_title: {
    fontFamily: fontFamily.FONT_FAMILY,
    marginLeft: 10,
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: 0,
    marginVertical: 4,
  },
  tattle_message: {
    fontFamily: fontFamily.FONT_FAMILY,
    marginLeft: 10,
    color: colors.CUSTOM_GRAY_TEXT,
    fontSize: 13,
    lineHeight: 19,
    marginLeft: 0,
  },
  notes_row: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.CUSTOM_BACKGROUND,
  },
  note_date_id: {
    fontFamily: fontFamily.FONT_FAMILY,
    color: colors.CUSTOM_GRAY_TEXT,
    fontSize: 12,
  },
  note_card_box: {
    borderRadius: 4,
    shadowColor: '#0000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0,
    shadowRadius: 1.41,
    elevation: 2,
    padding: 16,
  },
  note_view: {
    marginLeft: 56, 
    marginRight: 16, 
    marginTop: -6
  },
  notes_uuid: {
    alignSelf: 'flex-start',
    color: colors.CUSTOM_BLACK_TITLE,
    fontSize: 14,
    fontWeight: '600',
  },
  note_data: {
    fontFamily: fontFamily.FONT_FAMILY,
    fontSize: 14,
    color: colors.CUSTOM_GRAY_TEXT,
  },
  flex_grow: {
    flexGrow: 6, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  footer_tab_history: {
    backgroundColor: colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 10.65,
    elevation: 16,
  },
  history_text_footer: {
    fontFamily: fontFamily.FONT_FAMILY,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 14,
  },
  footer_details_border: {
    borderWidth: 2,
    borderRadius: 10,
    width: 30,
  },

  // OFFLINE 

  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 30,
    zIndex: 9999,

  },
  offlineText: { 
    color: '#fff'
  },

  //****************************** TO DO FEATURE STARTS *******************************//

  noTodoFolder: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#eef4fc',
    borderRadius: Math.round(width+height)/2,
    width: width*0.4,
    
  },
  noTodoText: {
    textAlign: 'center',
    fontFamily: fontFamily.FONT_FAMILY,
    fontSize: 16
  },
  createTodoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: fontFamily.FONT_FAMILY,
  },
  cardTodo: {
    borderRadius:10,
    marginLeft:24,
    marginRight: 24
  },
  todo_active_checkbox: {
    borderRadius: 50,
    backgroundColor: colors.CUSTOM_BLUE,
    borderColor: colors.CUSTOM_BLUE,
    height: 20, 
    width: 20, 
    // backgroundColor: colors.CUSTOM_BACKGROUND, 
    // borderColor:colors.CUSTOM_BORDER
  },
  todo_inactive_checkbox: {
    borderWidth: 1,
    paddingLeft: 0,
    borderRadius: 50, 
    height: 20, 
    width: 20, 
    backgroundColor: colors.CUSTOM_BACKGROUND, 
    borderColor:colors.CUSTOM_BORDER
  },

  //****************************** TO DO FEATURE END *******************************//

  card_view_todo_andr: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 12,
    marginBottom: 16,
    borderRadius: 4,
    // shadowColor: '#0000',
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2,
    height: 48,
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
        lineHeight: 25,
        fontWeight: 'bold',

      },
      default: {
        // other platforms, web for example
      },
    }),
    color: colors.BLACK,
    fontSize: 14,
    letterSpacing: 0.5,
    textAlign: 'left',
  },
  itemPosition: {
    fontFamily: 'calibri',
    color: '#7d7d7d',
    fontSize: 14,
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
    lineHeight:22
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
    fontSize:16,
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
    fontSize:16,
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