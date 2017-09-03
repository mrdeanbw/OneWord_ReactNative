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
  TabBar,
  ActionConst
} from 'react-native-router-flux';

import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import store from './store';
import Home from './Containers/Home';
import Login from './Containers/Login';
import StoryList from './Containers/StoryList';
import Detail from './Containers/Detail';
import Search from './Containers/Search'
import Setting from './Containers/Setting'


// import Icon from 'react-native-vector-icons/Ionicons';
//Images, Icons
let backButtonFunction = function(){
  return(
    <TouchableOpacity onPress={console.log('aaa')}>
      {/* <Icon name="ios-search" size={30} color="#4F8EF7" /> */}
    </TouchableOpacity>
  )
}
const scenes = Actions.create(
  <Scene key="root">
    <Scene key="Detail" 
      component={ Detail } 
      hideNavBar = {false}
      title = "One Word at a Time"
      renderBackButton={()=>
        <TouchableOpacity onPress={()=> Actions.Search()}>
          <Icon name="ios-search" style={styles.navbarIcon} />
        </TouchableOpacity>
      }
      renderRightButton = {()=>
        <TouchableOpacity onPress={()=>Actions.Setting()}>
          <Icon name="ios-settings-outline" style={styles.navbarIcon} />
        </TouchableOpacity>
      }
    />

    <Scene key="Home" hideNavBar component={ Home } />
    <Scene key="Login" hideNavBar component={ Login } />
    
    <Scene key="StoryList" component={ StoryList } />

    <Scene key="Search" hideNavBar = {false} title="Search" component={Search} />
    <Scene key="Setting" hideNavBar = {false} title="Setting" component={Setting} 
      renderBackButton={()=>
        <TouchableOpacity onPress={()=> Actions.pop()}>
          <Icon name="ios-arrow-back" style={styles.navbarIcon} />
        </TouchableOpacity>
      }
      renderRightButton = {()=>
        <TouchableOpacity onPress={()=>Actions.Detail()}>
          <Text style={styles.navBarButton}>Save</Text>
        </TouchableOpacity>
      }
    />
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

const styles = StyleSheet.create({
  navBarButton:{
    color : '#915DF4',
    fontSize : 18
  },
  navbarIcon:{
    fontSize: 30, 
    color: '#915DF4' 
  }
});