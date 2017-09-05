import * as types from './types';
import firebase, {firebaseApp, firebaseDb} from '../Constants/firebase';
// export const login = (userName) => async dispatch => {
//   let userName = '';
//   dispatch({ type: LOGIN_SUCCESS, userName: userName });
// }

export const login = (userName, userId) => async (dispatch, store) => {
  console.log('here is actions/auth/login', userName, userId);

  dispatch(loginSuccess({userName, userId}));
}

function loginSuccess(data) {
  console.log('data', data)
  return {type : types.LOGIN_SUCCESS, ...data};
}

export const setUser = (userId,userName, defaultThemeColor, isNewWordNotifyEnabled, isNewStoriesNotifyEnabled) => async (dispatch, store) =>{
  firebase.database().ref('Users/' + userId).set({
    userName : userName,
    defaultThemeColor : defaultThemeColor,
    isNewWordNotifyEnabled : isNewWordNotifyEnabled,
    isNewStoriesNotifyEnabled : isNewStoriesNotifyEnabled
  })
  .then((res) => dispatch({
    type : SETTING_USER_SUCCESS, 
    userName : userName,
    defaultThemeColor : defaultThemeColor,
    isNewWordNotifyEnabled : isNewWordNotifyEnabled,
    isNewStoriesNotifyEnabled : isNewStoriesNotifyEnabled
  }))
}
