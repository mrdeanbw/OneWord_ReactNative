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
const GroupImg = require('../../Assets/images/Group.png');
const colorPink = '#FF9D3B';
const colorNavy = '#FD65AF';
const colorPurple = '#B85CFF';
const colorBlue = '#5CC2FF';
const colorGreen = '#2CCEB8';

export default class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName : 'username',
      switchVal_newWords : false,
      switchVal_stories : false

    }
  }

  render() {
    
    return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Form>
          <Item floatingLabel>
            <Label style={{fontSize : 15}}>YOUR NAME</Label>
            <Input 
              onChangeText={(text)=>{this.setState({userName : text})}} 
              value={this.state.userName} 
              style={styles.inputBox}
            />
          </Item>
        </Form>
      </View>
      <View style={styles.viewContainer}>
        <Form>
          <Item style={styles.ListItem}>
            <Label style={{fontSize : 15}}>DEFAULT COLOR</Label>    
          </Item>
        </Form>
        <List>
          <ListItem>
            <View style={[styles.colorBoxItem, {backgroundColor:colorPink}]}/>            
            <View style={[styles.colorBoxItem, {backgroundColor:colorNavy}]}/>       
            <View style={[styles.colorBoxItem, {backgroundColor:colorPurple}]}/>       
            <View style={[styles.colorBoxItem, {backgroundColor:colorBlue}]}/>       
            <View style={[styles.colorBoxItem, {backgroundColor:colorGreen}]}/>      
          </ListItem>
        </List>
      </View>
      
      <View style={styles.viewContainer}>
        <Form>
          <Item style={styles.ListItem}>
            <Label style={{fontSize : 15}}>NOTIFICATIONS</Label>
          </Item>
        </Form>

        <List>
          <ListItem icon>
            <Body>
              <Text style={styles.itemText}>New words in your stories</Text>
            </Body>
            <Right>
              <Switch 
                value = {this.state.switchVal_newWords} 
                onValueChange={(switchVal)=>this.setState({switchVal_newWords : switchVal})} 
                onTintColor={colorPurple}
              />
            </Right>
          </ListItem>

          <ListItem icon>
            <Body>
              <Text style={styles.itemText}>New stories</Text>
            </Body>
            <Right>
              <Switch 
                value = {this.state.switchVal_stories} 
                onValueChange={(switchVal)=>this.setState({switchVal_stories : switchVal})} 
                onTintColor={colorPurple}
              />
            </Right>
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

  itemText1:{
    textAlign : 'center',
    textAlignVertical : 'center',
    fontSize : 22,
    color : '#ffffff',
    fontWeight : 'bold'
  }
});