import * as types from '../actions/types';
const initialState = {
  userName : '',
  // userData: {
  //   userName : ''
  // },
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
        userName : action.userName
      }
    default:
      return state;
  }
}