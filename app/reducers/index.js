
import { combineReducers } from 'redux';
import userReducer from './user';
import storiesReducer from './stories';

export default combineReducers({
  user : userReducer,
  stories : storiesReducer
});
