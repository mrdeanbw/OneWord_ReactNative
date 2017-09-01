import * as types from '../actions/types';
const initialState = {
  loading: false,
  error: null,
  token: '',
  user: {},
  email : '',
  password : '',
};

export default function auth(state = initialState, action = {}){
  switch (action.type){
    case types.LOGIN_SUCCESS:
      return {
        ...state
      }
    default:
      return state;
  }
}