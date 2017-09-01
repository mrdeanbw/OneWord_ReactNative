import * as types from '../actions/types';
const initialState = {
  loading: false,
  error: null,
  token: '',
  user: {},
  email : '',
  password : '',
};

export default function story(state = initialState, action = {}){
  switch (action.type){
    case types.REG_STORY_SUCCESS:
      return {
        ...state
      }
    default:
      return state;
  }
}