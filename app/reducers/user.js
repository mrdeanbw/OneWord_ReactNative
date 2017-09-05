import * as types from '../actions/types';
const initialState = {
  userName : '',
  defaultThemeColor : '',
  isNewWordNotifyEnabled : false,
  isNewStoriesNotifyEnabled : false,
  loading: false,
  //error: null,
  //token: '',
  //email : '',
  //password : '',
};

export default function Auth_user(state = initialState, action = {}){
  switch (action.type){
    case types.LOGIN_SUCCESS:
      console.log(action.userName);
      return {
        ...state,
        userName : action.userName,
        userId : action.userId
      }
     case types.SETTING_USER_SUCCESS:
     return {
      ...state,
      userName : action.userName,
      defaultThemeColor : action.defaultThemeColor,
      isNewWordNotifyEnabled : action.isNewWordNotifyEnabled,
      isNewStoriesNotifyEnabled : actio.isNewStoriesNotifyEnabled,
    }
    default:
      return state;
  }
}
