import * as types from './types';
import firebase, {firebaseApp, firebaseDb} from '../Constants/firebase';

export const login = (userName, userId) => async (dispatch, store) => {
  console.log('here is actions/auth/login', userName, userId);

  dispatch(loginSuccess({userName, userId}));
}

function loginSuccess(data) {
  console.log('data', data)
  return {type : types.LOGIN_SUCCESS, ...data};
}

export const setUser = (userId,userName, defaultThemeColor, isNewWordNotifyEnabled = false, isNewStoriesNotifyEnabled = false) => async (dispatch, store) =>{
  console.log(userId, defaultThemeColor, isNewStoriesNotifyEnabled);
  firebase.database().ref('Users/' + userId).set({
    userName : userName,
    defaultThemeColor : defaultThemeColor,
    isNewWordNotifyEnabled : isNewWordNotifyEnabled,
    isNewStoriesNotifyEnabled : isNewStoriesNotifyEnabled
  })
  .then((res) => dispatch({
    type : types.SETTING_USER_SUCCESS, 
    userName : userName,
    defaultThemeColor : defaultThemeColor,
    isNewWordNotifyEnabled : isNewWordNotifyEnabled,
    isNewStoriesNotifyEnabled : isNewStoriesNotifyEnabled
  }))
}
