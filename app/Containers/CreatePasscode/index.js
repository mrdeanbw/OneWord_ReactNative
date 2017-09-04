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
import Button from 'apsl-react-native-button';
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import { Form, Item, Input, Label, List, ListItem, Icon, Body, Right, Switch } from 'native-base';
import CodePin from 'react-native-pin-code';
//Const images

export default class CreatePasscode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameText : '',
      text : '6'
    }
  }

  _handlePress(){
    if (this.state.nameText){
      //Actions.StoryList();
      Actions.Detail();
    }
  } 

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}> 
          <Text style={styles.titleText}>Strip Truth or Dare</Text>
        </View>

        <CodePin
          ref={ref => this.ref = ref}
          code = 'number'
          number = {4}
          text = ''
          error = ''
          containerStyle = {styles.CodePinContainer}
          pinStyle = {styles.pinStyle}
        />
        <View>
          <Text style={styles.passcodeTitle}>Enter passcode</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#915DF4',
    alignItems: 'center',
  },
  headerContainer:{
    marginTop : 100,
    alignItems: 'center',
  },
  titleText:{
    color: '#fff',
    textAlign : 'center',
    fontWeight : 'bold',
    fontSize : 30,
    alignItems : 'center',
    justifyContent: 'center',
  },
  InputContainer:{
    flex: 1.2,
    alignItems : 'center'
  },
  exploreStoriesText:{
    color : '#B85CFF',
    textAlign : 'center',
    fontSize : 19,
    paddingHorizontal : 10,
    
  },
  exploreStoriesViewStyle:{
    width : 300,
    borderRadius: 10,
  },
  buttonView:{
    backgroundColor: '#FFFFFF',
    borderRadius : 20,
    marginBottom : 20,
    borderColor : '#FFFFFF',
    height : 50
  },
  passcodeTitle:{
    fontSize : 15,
    color: '#cecece',
  },
  passcodeContainer:{
    marginTop : 100
  },
  colorBoxItem:{
    width : 60,
    height : 60,
    marginHorizontal : 6,
    borderRadius : 6,
  },
  CodePinContainer:{
    backgroundColor : '#915DF4'
  },
  pinStyle:{
    width : 50,
    height : 60,
    marginHorizontal  : 2,
    marginLeft : 5,
    marginRight : 5,
    backgroundColor : '#fefefefe'
  }
});