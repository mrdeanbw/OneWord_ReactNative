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

import { connect } from 'react-redux';
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import { Form, Item, Label, List, ListItem, Input, Switch, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import firebase, {firebaseApp, firebaseDb} from '../../Constants/firebase';
import * as authActions from '../../actions/auth';
import * as storyActions from '../../actions/stories';
//Const images, colors
import colors from '../../Constants/colors';

class CreateStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId : null,
      storyThemeColor : '2',
      passCode : '',
      storyName : '',
      isShowPasscode_enabled : false,
      selectedThemeId : 2,
    }
  }
  componentWillMount(){
    let userId = this.props.userId;
    let userName = this.props.userName;
    let defaultThemeColor = this.props.defaultThemeColor;
    console.log('createstory', userId, userName, defaultThemeColor);
    //this.setState({passCode : this.props.passCode});
  }

  componentDidMount(){
    //this.setState({passCode : this.props.passCode});
    this.setState({selectedThemeId : this.props.selectedThemeId});
    this.setState({storyName : this.props.storyName});
  }
  componentWillReceiveProps(nextProps){
    console.log('nextProps', nextProps);
    if (this.state.passCode != nextProps.passCode){
      this.setState({passCode : nextProps.passCode});
    }
  }
  
  onPublish(){
    if (!this.state.storyName) {
      return Alert.alert('Please fill out Story Name');
    }
    if ( !(this.state.selectedThemeId >= 0) ) {
      return Alert.alert('Please Choose Color');
    }
    firebase.database().ref('Stories/').push({
      defaultStoryThemeColor : this.state.selectedThemeId,
      passCode : this.state.passCode,
      storyName : this.state.storyName,
      storyContent : '',
      createdBy : this.props.userName
    })
    .then((res)=>{
      console.log('create story', res, res.key);
      this.props.updateSelectedStoryId(res.key);
      Actions.ShowStory({storyName : this.state.storyName});
    })
    
  } 
  handleChooseColor(themeId){
    this.setState({selectedThemeId : themeId});
    console.log('themeId', themeId);
  }
  handleSwitch(switchVal){
    this.setState({switchVal_passCode : switchVal})
    if (switchVal){
      
      Actions.CreatePasscode({selectedThemeId : this.state.selectedThemeId, storyName : this.state.storyName});
      this.setState({switchVal_passCode : false})
    }
  }
  render() { 
    return (
    <View style={styles.container}>
      <Header style={styles.headerContainer}>
        <Left style={{flex:1}}>
          <Button transparent onPress={()=>Actions.pop()}>
            <Icon name="ios-arrow-back" style={{color : colors.colorPurpleDark}}/>
          </Button>
        </Left>
        <Body style={{flex : 2, alignItems : 'center'}}>
          <Title style={styles.headerTitle}>Create Story</Title>
        </Body>
        <Right style={{flex:1}}>
          <Button transparent onPress={()=>this.onPublish()}>
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
              <View style={[styles.colorBoxItem, {backgroundColor:colors.colorPink, opacity : this.state.selectedThemeId == 1 ? 1.0 : .3}]}/>              
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.handleChooseColor(2)} >
              <View style={[styles.colorBoxItem, {backgroundColor:colors.colorNavy, opacity : this.state.selectedThemeId == 2 ? 1.0 : .3}]}/>              
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.handleChooseColor(3)} >
              <View style={[styles.colorBoxItem, {backgroundColor:colors.colorPurple, opacity : this.state.selectedThemeId == 3 ? 1.0 : .3}]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.handleChooseColor(4)} >
              <View style={[styles.colorBoxItem, {backgroundColor:colors.colorBlue, opacity : this.state.selectedThemeId == 4 ? 1.0 : .3}]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.handleChooseColor(5)} >
              <View style={[styles.colorBoxItem, {backgroundColor:colors.colorGreen, opacity : this.state.selectedThemeId == 5 ? 1.0 : .3}]}/>
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
                {
                  this.state.passCode == '' ?
                  <Text style={styles.passCode}> ---- </Text>
                  :
                  <Text style={styles.passCode} >{this.state.passCode}</Text>                 
                }              
            </Body>
            <Right style={styles.bodyBottom}>    
              <Switch 
                value = {this.state.switchVal_passCode} 
                onValueChange={(switchVal)=>this.handleSwitch(switchVal)} 
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

const mapStateToProps = (state) => ({
  userId : state.user.userId,
  userName : state.user.userName,
  defaultThemeColor : state.user.defaultThemeColor,
  passCode : state.stories.passCode,
});
const mapDispatchToProps = (dispatch) => ({
  setUser : (userId, userName, defaultThemeColor, isNewWordNotifyEnabled, isNewStoriesNotifyEnabled) => 
                dispatch(authActions.setUser(userId, userName, defaultThemeColor, isNewWordNotifyEnabled, isNewStoriesNotifyEnabled)),
  updateSelectedStoryId : (storyId) => dispatch(storyActions.updateSelectedStoryId(storyId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateStory);