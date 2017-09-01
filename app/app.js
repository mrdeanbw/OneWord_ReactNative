import React from 'react';
import {
  AsyncStorage,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import {
  Router, 
  Route, 
  Schema, 
  Actions,
  Scene,
  Animations, 
  TabBar
} from 'react-native-router-flux'

import Home from './Containers/Home';
import Login from './Containers/Login';
import StoryList from './Containers/StoryList';
import Detail from './Containers/Detail';
import Search from './Containers/Search'
import store from './store';
import Icon from 'react-native-vector-icons/Ionicons';
//Images, Icons
let backButtonFunction = function(){
  return(
    <TouchableOpacity onPress={console.log('aaa')}>
      <Icon name="ios-search" size={30} color="#4F8EF7" />
    </TouchableOpacity>
  )
}
const scenes = Actions.create(
  <Scene key="root">
    <Scene key="Home" hideNavBar component={ Home } />
    <Scene key="Login" hideNavBar component={ Login } />
    
    <Scene key="StoryList" component={ StoryList } />
    <Scene key="Detail" 
      component={ Detail } 
      hideNavBar = {false}
      title = "One Word at a Time"
      renderRightButton = {()=>{
        <Icon name="ios-search" size={30} color="#4F8EF7" />
      }}
    />
    <Scene key="Search" hideNavBar = {false} title="Search" component={Search} />
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