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
import { Font } from 'expo';
import store from './store';
import Home from './Containers/Home';
import Login from './Containers/Login';
import Detail from './Containers/Detail';
import Search from './Containers/Search';
import Setting from './Containers/Setting';
import CreateStory from './Containers/CreateStory';
import CreatePasscode from './Containers/CreatePasscode';
import CheckPasscode from './Containers/CheckPasscode';
import EditStory from './Containers/EditStory';
import ShowStory from './Containers/ShowStory';
import ShowLockedStory from './Containers/ShowLockedStory';
import ShareStory from './Containers/ShareStory';
import colors from './Constants/colors'


let renderBackButton = function(){
  return(
    <TouchableOpacity onPress={()=> Actions.pop()}>
      <Icon name="ios-arrow-back" style={styles.navbarIcon} />
    </TouchableOpacity>
  )
}
const scenes = Actions.create(
  <Scene key="root">
    <Scene key="Home" hideNavBar component={ Home } />
    <Scene key="Detail" 
      component={ Detail } 
      hideNavBar = {true}
      title = "One Word at a Time"  
    />
   
    <Scene key="Login" hideNavBar component={ Login } />   

    <Scene key="Search" hideNavBar = {true} title="Search" component={Search} navigationBarStyle={{ borderBottomWidth: 0 }} 
    />
    <Scene key="Setting" hideNavBar = {true} title="Setting" component={Setting} />
    <Scene key="CreateStory" hideNavBar = {true} title="Create Story" component={CreateStory} />
    <Scene key="CreatePasscode" hideNavBar = {true} title="Create passcode"  component={CreatePasscode} />
    <Scene key="CheckPasscode" hideNavBar = {true} component={CheckPasscode} />
    
    <Scene key="EditStory" hideNavBar = {true} title="Story" component={EditStory} />
    <Scene key="ShowStory" hideNavBar = {true} title="Story" component={ShowStory} />
    <Scene key="ShowLockedStory" hideNavBar = {true} title="Story" component={ShowLockedStory} />
    <Scene key="ShareStory" hideNavBar = {true} title="Story" titleStyle={{color: colors.colorWhite}} component={ShareStory} 
      navigationBarStyle={{backgroundColor : colors.colorGreen, borderBottomWidth: 0  }}
      renderBackButton={()=>
        <TouchableOpacity onPress={()=> Actions.pop()}>
          <Icon name="ios-arrow-back" style={styles.navbarIconWhite} />
        </TouchableOpacity>
      }
      renderRightButton = {()=>
        <TouchableOpacity onPress={()=>Actions.Detail()}>
          <Text style={styles.navBarButtonWhite}>Share</Text>
        </TouchableOpacity>
      }
    />
  </Scene>
);

export default class Root extends React.Component {
  componentWillMount(){
    Font.loadAsync({
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
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
    color : colors.colorPurpleDark,
    fontSize : 18
  },
  navbarIcon:{
    fontSize: 30, 
    color: colors.colorPurpleDark
  },
  navbarIconWhite:{
    fontSize: 30, 
    color: colors.colorWhite
  },
  navbarIconGreen:{
    fontSize: 30, 
    color: '#00ff00' 
  },
  navbarIconWhite:{
    fontSize: 30, 
    color: colors.colorWhite
  },
  navBarStyle:{
    color : colors.colorPurpleDark
  },
  navBarButtonGreeen:{
    fontSize : 30,
    color : '#00ff00'
  },
  navBarButtonWhite:{
    fontSize : 18,
    color : colors.colorWhite
  },
  navbarIconBlack:{
    fontSize : 30,
    color : colors.colorBlack
  }
});