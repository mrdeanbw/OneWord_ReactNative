import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
  )
);

export default store;
