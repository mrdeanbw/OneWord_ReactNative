import * as types from '../actions/types';
const initialState = {
  StoriesList : [],
  loading: false,
  error: null,
  token: '',
  user: {},
  email : '',
  password : '',
  passCode : '',
};

export default function story(state = initialState, action = {}){
  switch (action.type){
    case types.REG_STORY_SUCCESS:
      return {
        ...state
      }
    case types.FETCH_STORIES_SUCCESS:
      console.log('StoriesList in action', action.StoriesList);
      return {
        ...state,
        StoriesList : action.StoriesList
      }
    case types.SET_PASSCODE:
      console.log("reduxer", action.passCode);
      return {
        ...state,
        passCode : action.passCode
      }    
    default:
      return state;
  }
}