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
import store from './store';
import Home from './Containers/Home';
import Login from './Containers/Login';
import StoryList from './Containers/StoryList';
import Detail from './Containers/Detail';
import Search from './Containers/Search';
import Setting from './Containers/Setting';
import CreateStory from './Containers/CreateStory';
import CreatePasscode from './Containers/CreatePasscode';
import EditStory from './Containers/EditStory';
import ShowStory from './Containers/ShowStory';
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
   
    <Scene key="Login" hideNavBar component={ Login } />   
    <Scene key="StoryList" component={ StoryList } />
    <Scene key="Search" hideNavBar = {false} title="Search" component={Search} navigationBarStyle={{ borderBottomWidth: 0 }} 
      renderBackButton={()=>
        <TouchableOpacity onPress={()=> Actions.pop()}>
          <Icon name="ios-arrow-back" style={styles.navbarIconBlack} />
        </TouchableOpacity>
      }
    />
    <Scene key="Setting" hideNavBar = {true} title="Setting" component={Setting} />
    <Scene key="CreateStory" hideNavBar = {true} title="Create Story" component={CreateStory} />
    <Scene key="CreatePasscode" hideNavBar = {true} title="Create passcode"  component={CreatePasscode} />
    <Scene key="EditStory" hideNavBar = {true} title="Story" titleStyle={{color:colors.colorBlack}} component={EditStory} />
    <Scene key="ShowStory" hideNavBar = {true} title="Story" titleStyle={{color:colors.colorBlack}} component={ShowStory} />
    <Scene key="ShareStory" hideNavBar = {false} title="Story" titleStyle={{color: colors.colorWhite}} component={ShareStory} 
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