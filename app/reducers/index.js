
import { combineReducers } from 'redux';
import authReducer from './auth';
import storiesReducer from './stories';

export default combineReducers({
  auth: authReducer,
  stories : storiesReducer
});
