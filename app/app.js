import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';

import Home from './Containers/Home';
import Login from './Containers/Login';
import StoryList from './Containers/StoryList';
import store from './store';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="StoryList" component={ StoryList } />
    <Scene key="Login" hideNavBar component={ Login } />
    <Scene key="Home" hideNavBar component={ Home } />
    
  </Scene>
);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Router hideNavBar={ true } scenes={ scenes }/>
      </Provider>
    );
  }
}