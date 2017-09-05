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
//import Button from 'apsl-react-native-button';
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
//import { Form, Item, Input, Label, List, ListItem, Icon, Body, Right, Switch } from 'native-base';
import { Form, Item, Label, List, ListItem, Input, Switch, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import firebase, {firebaseApp, firebaseDb} from '../../Constants/firebase';
//Const images, colors
import colors from '../../Constants/colors';
export default class CreateStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyThemeColor : 'red',
      passCode : '6308',
      storyName : 'Elephant and Monkey',
      switchVal_passCode : false,
      selectedThemeId : 0,
    }
  }

  onPublic(){
    firebase.database().ref('Stories/').push({
      defaultStoryThemeColor : this.state.storyThemeColor,
      passCode : this.state.passCode,
      storyName : this.state.storyName,
      storyContent : ''
    })
    .then((res)=>console.log(res))
    Actions.EditStory(); 
  } 
  handleChooseColor(themeId){
    this.setState({selectedThemeId : themeId});
    console.log('themeId', themeId);
  }
  render() {
    return (
    <View style={styles.container}>
      <Header style={styles.headerContainer}>
        <Left>
          <Button transparent onPress={()=>Actions.pop()}>
            <Icon name='arrow-back' style={{color : colors.colorPurpleDark}}/>
          </Button>
        </Left>
        <Body>
          <Title style={styles.headerTitle}>Create Story</Title>
        </Body>
        <Right>
          <Button transparent onPress={()=>this.onPublic()}>
            <Text style={styles.headerRightBtn}>Publish</Text>
          </Button>
        </Right>
      </Header>

      <View style={styles.viewContainer}>
        <Form>
          <Item style={styles.ListItem}>
            <Label style={{fontSize : 15}}>CHOOSE COLOR</Label>    
          </Item>
        </Form>
        <List>
          <ListItem>
            <TouchableOpacity onPress={()=>this.handleChooseColor(0)} >
              <View style={[styles.colorBoxItem, {backgroundColor:colors.colorPink, opacity : this.state.selectedThemeId == 0 ? 1.0 : .3}]}/>              
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.handleChooseColor(1)} >
              <View style={[styles.colorBoxItem, {backgroundColor:colors.colorNavy, opacity : this.state.selectedThemeId == 1 ? 1.0 : .3}]}/>              
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.handleChooseColor(2)} >
              <View style={[styles.colorBoxItem, {backgroundColor:colors.colorPurple, opacity : this.state.selectedThemeId == 2 ? 1.0 : .3}]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.handleChooseColor(3)} >
              <View style={[styles.colorBoxItem, {backgroundColor:colors.colorBlue, opacity : this.state.selectedThemeId == 3 ? 1.0 : .3}]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.handleChooseColor(4)} >
              <View style={[styles.colorBoxItem, {backgroundColor:colors.colorGreen, opacity : this.state.selectedThemeId == 4 ? 1.0 : .3}]}/>
            </TouchableOpacity>
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
                {this.state.switchVal_passCode?
                  <Text style={styles.passCode} >{this.state.passCode}</Text> 
                  :
                  <Text style={styles.passCode}> ---- </Text>
                }
                
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
    //marginTop : 64
  },
  headerContainer:{
    backgroundColor : colors.colorWhite,
    borderBottomWidth : 0
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
    fontSize : 20,
    fontWeight : 'bold',
    color : '#7e7e7e',
    marginHorizontal : 10,
    letterSpacing : 5
  },
  bodyBottom:{
    borderBottomWidth : 0
  },
  firstWordInput:{
    fontSize : 15,
    color : '#9e9e9e',
  },
  headerRightBtn:{
    fontSize : 18,
    color : colors.colorPurpleDark
  }
});