import React from 'react';
import {
  AsyncStorage,
  ActivityIndicator,
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
//import Button from 'apsl-react-native-button';
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import { Form, Item, Input, Label, List, ListItem, Icon, Body, Right, Switch } from 'native-base';
//Const images, colors
const colorPink = '#FF9D3B';
const colorNavy = '#FD65AF';
const colorPurple = '#B85CFF';
const colorBlue = '#5CC2FF';
const colorGreen = '#2CCEB8';
const colorWhite = '#ffffff'

export default class ShareStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText : 'The Elephants and the Monkeys',    
      writerName : 'jamesmiller94',
      storyContent : 'Once upon a time there lived a group of elephants in the jungle. They lived near a pond.     The king of monkeys was thinking how to send back elephants. He thought very much and got an idea. When elephants will go to the jungle to eat food, monkeys will tell them that the lions are coming to that pond. The elephants should go away. If the lions see them, they will kill them and eat them. So they should go from there. Next morning the king of monkeys told everything to the elephants. Hearing this they ran away from the pond and'
    }
  }

  render() {
    
    return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>{this.state.titleText}</Text>  
        <Text style={styles.byWriter}>{'by ' + this.state.writerName}</Text>
      </View>
      
      <View style={styles.storyContentContainer}>
        <TextInput 
          multiline={true} 
          editable={false}
          style={styles.storyContent}
        >
          {this.state.storyContent}
        </TextInput>
        <Button 
          title="Join the Story" 
          color={colorGreen} 
          style={styles.buttonStyle} 
          onPress={()=>Actions.EditStory()}
        />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorGreen,
    marginTop : 64
  },
  titleContainer:{
    marginTop : 30
  },
  formContainer:{
    marginTop : 20
  },
  storyContentContainer:{
    flex : 1,
    marginTop : 30,
    marginHorizontal : 20,
    backgroundColor : colorWhite,
    
  },  
  ListItem:{
    borderWidth : 0,
    borderBottomWidth : 0
  },
  itemText:{
    fontSize : 17,
  },
  colorBoxItem:{
    width : 30,
    height : 30,
    marginHorizontal : 6,
    borderRadius : 4
  },
  titleStyle:{
    fontSize : 30,
    color : colorWhite,
    // fontWeight : 'bold',
    textAlign : 'center'
  },
  byWriter:{
    marginTop : 15,
    textAlign : 'center',
    fontSize : 15,
    color : colorWhite,
  },
  storyContent:{
    flex : .9,
    fontSize : 15,

  },
  buttonStyle:{
    backgroundColor : colorGreen,
    borderColor : colorGreen,
    //marginHorizontal : 50,
    borderWidth : 0,
    borderRadius : 20,
    overflow : 'visible'
  },
});