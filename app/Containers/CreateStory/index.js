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
//Const images, colors
import colors from '../../Constants/colors';
export default class CreateStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyName : '',
      switchVal_passCode : false,
    }
  }

  render() {
    
    return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Form>
          <Item style={styles.ListItem}>
            <Label style={{fontSize : 15}}>CHOOSE COLOR</Label>    
          </Item>
        </Form>
        <List>
          <ListItem>
            <View style={[styles.colorBoxItem, {backgroundColor:colors.colorPink}]}/>            
            <View style={[styles.colorBoxItem, {backgroundColor:colors.colorNavy}]}/>       
            <View style={[styles.colorBoxItem, {backgroundColor:colors.colorPurple}]}/>       
            <View style={[styles.colorBoxItem, {backgroundColor:colors.colorBlue}]}/>       
            <View style={[styles.colorBoxItem, {backgroundColor:colors.colorGreen}]}/>      
          </ListItem>
        </List>
      </View>
      
      <View style={styles.viewContainer}>
        <Form>
          <Item style={styles.ListItem}>
            <Label style={{fontSize : 15}}>PASSCODE</Label>
          </Item>
        </Form>

        <List>
          <ListItem icon>
            <Body style={styles.bodyBottom}>    
              <TouchableOpacity onPress={()=> Actions.CreatePasscode()}>
                <Text style={styles.passCode}> -  -  -  - </Text>
              </TouchableOpacity>
              
            </Body>
            <Right style={styles.bodyBottom}>    
              <Switch 
                value = {this.state.switchVal_passCode} 
                onValueChange={(switchVal)=>this.setState({switchVal_passCode : switchVal})} 
                onTintColor={colors.colorPurple}
              />
            </Right>
          </ListItem>
        </List>
      </View>

      <View style={styles.viewContainer}>
        <Form>
          <Item style={styles.ListItem}>
            <Label style={{fontSize : 20, fontWeight : 'bold', color : '#9e9e9e'}}>Name the Story</Label>
          </Item>
        </Form>

        <List>
          <ListItem icon>
            <Body style={styles.bodyBottom}>
              <Input placeholder="Write the first word..." 
                onChangeText={(text)=>{this.setState({storyName : text})}} 
                value={this.state.storyName} 
                placeholderTextColor = '#9e9e9e'
                style={{fontSize : 15}}
              />
            </Body>
          </ListItem>
        </List>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop : 64
  },
  viewContainer:{
    marginTop : 30
  },
  formContainer:{
    marginTop : 20
  },
  inputBox:{
    marginBottom : 10
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
  labelStyle:{
    fontSize : 15
  },
  passCode:{
    fontSize : 15,
    fontWeight : 'bold',
    color : '#7e7e7e',
    marginHorizontal : 10
  },
  bodyBottom:{
    borderBottomWidth : 0
  },
  firstWordInput:{
    fontSize : 15,
    color : '#9e9e9e',
  },

  itemText1:{
    textAlign : 'center',
    textAlignVertical : 'center',
    fontSize : 22,
    color : '#ffffff',
    fontWeight : 'bold'
  }
});