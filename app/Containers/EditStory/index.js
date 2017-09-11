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
//Const images, colors
import colors from '../../Constants/colors'
import firebase, {firebaseApp, firebaseDb} from '../../Constants/firebase';

class EditStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyName : '',    
      storyContent : '',
      oneWord : '',
      passCode : '',
      switchVal_passcode : false, 
      selectedThemeId : '2'
    }
  }

  componentWillMount(){
    let _selectedStoryId = this.props.selectedStoryId;
    this.setState({selectedStoryId : _selectedStoryId});
    let _passCode = this.props.StoriesList[_selectedStoryId].passCode;
    let _storyContent = this.props.StoriesList[_selectedStoryId].storyContent;
    let _selectedThemeId = this.props.StoriesList[_selectedStoryId].defaultStoryThemeColor; 
    let _storyName = this.props.StoriesList[_selectedStoryId].storyName; 

    this.setState({storyContent : _storyContent});
    this.setState({selectedThemeId : _selectedThemeId});
    this.setState({passCode : _passCode});
    this.setState({storyName : _storyName});
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

  componentWillReceiveProps(nextProps){
    console.log('nextProps', nextProps);
    if (this.state.passCode != nextProps.passCode){
      this.setState({passCode : nextProps.passCode});
    }
  }
  
  handleSave(){
    if (!this.state.storyName) {
      return Alert.alert('Please fill out Story Name');
    }
    firebase.database().ref('Stories/' + this.props.selectedStoryId).update({
      defaultStoryThemeColor : this.state.selectedThemeId,
      passCode : this.state.passCode,
      storyName : this.state.storyName,
      storyContent : this.state.storyContent,
      //createdBy : this.props.userName
    })
    .then((res)=>{
      //console.log('res', res, res.key);
      this.props.updateSelectedStoryId(res.key);
    })
    Actions.ShowStory({storyName : this.state.storyName}); 
  }
  render() {
    console.log(this.state.passCode);
    return (
    <View style={styles.container}>
      <Header style={styles.headerContainer}>
        <Left style={{flex:1}}>
          <Button transparent onPress={()=>Actions.pop()}>
            <Icon name="ios-arrow-back" style={{color : colors.colorRedLight}}/>
          </Button>
        </Left>
        <Body style={{flex : 2, alignItems : 'center'}}>
          <Title style={styles.headerTitle}>Edit Story</Title>
        </Body>
        <Right style={{flex:1}}>
          <Button transparent onPress={()=> {
              this.handleSave();
              Actions.ShowStory();
            }}
          >
            <Text style={styles.headerRightBtn}>Save</Text>
          </Button>
        </Right>
      </Header>

      <View style={styles.colorBoxContainer}>
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
      <View style={styles.colorBoxContainer}>
        <Form>
          <Item style={styles.ListItem}>
            <Label style={{fontSize : 15}}>PASSCODE</Label>    
          </Item>
        </Form>
        <List>
          <ListItem icon>
            <Body>
              <Text style={styles.itemText}>{this.state.passCode}</Text>
            </Body>
            <Right>
              <Switch 
                value = {this.state.switchVal_passcode} 
                onValueChange={(switchVal)=>this.handleSwitch(switchVal)} 
                onTintColor={colors.colorNavy}
              />
            </Right>
          </ListItem>
        </List>
      </View>
      
      <View style={styles.storyContentContainer}>
        <Label style={styles.storyTitle}>{this.state.storyName}</Label>
        <TextInput 
          multiline={true} 
          editable={true}
          style={styles.storyContent}
          onChangeText={(storyText)=>this.setState({storyContent : storyText})}
          value = {this.state.storyContent}
        />
      </View>

      <TextInput 
        ref = {(e)=> {textInput = e}} 
        autoFocus = {true}
        placeholder = "Enter a word"
        placeholderTextColor = {colors.colorGreenLight}
        autoCorrect = {false}
        borderColor = {colors.colorGreenLight}
        borderRadius = {1}
        style={styles.inputBox}
        value={this.state.oneWord}
        underlineColorAndroid = 'transparent'
        onChangeText={(text) => this.setState({oneWord: text})}
        onSubmitEditing = {(event)=>{
          console.log('onewrd', event.nativeEvent.text);
          let _storyContent = this.state.storyContent;
          _storyContent = _storyContent + event.nativeEvent.text + ' ';
          this.setState({storyContent : _storyContent});
          this.setState({oneWord : ''});
        }}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorWhite,
    //marginTop : 64
  },
  colorBoxContainer:{
    marginTop : 20,
    borderBottomWidth : 0

  },
  headerContainer:{
    backgroundColor : colors.colorWhite,
    borderBottomWidth : 0
  },
  storyContentContainer:{
    flex : 1,
    marginTop : 30,
    marginHorizontal : 20,
    backgroundColor : colors.colorWhite,
    borderBottomWidth : .5,
    borderColor : 'rgba(0,0,0,.5)',
    marginBottom : 10
  },  
  ListItem:{
    borderWidth : 0,
    borderBottomWidth : 0
  },
  itemText:{
    fontSize : 20,
    letterSpacing : 10,
    color : 'rgba(0,0,0,1.0)'
  },
  colorBoxItem:{
    width : 30,
    height : 30,
    marginHorizontal : 6,
    borderRadius : 4
  },
  colorListItem:{
    borderBottomWidth : 0
  },
  storyTitle:{
    fontSize : 20,
    fontWeight : 'bold',
    color : 'rgba(0,0,0,.7)',
    marginBottom : 20
  },
  storyContent:{
    flex : .9,
    fontSize : 15,
    lineHeight : 30
  },
  headerTitle:{
    color : 'rgba(0,0,0,.5)'
  },
  headerRightBtn:{
    color:colors.colorRedLight,
    fontSize : 17
  },
  inputBox:{
    opacity  : .8,
    borderRadius : 15,
    marginBottom : 20,
    marginHorizontal : 20,
  }
});

const mapStateToProps = (state) => ({
  userId : state.user.userId,
  userName : state.user.userName,
  defaultThemeColor : state.user.defaultThemeColor,
  passCode : state.stories.passCode,
  selectedStoryId : state.stories.selectedStoryId,
  StoriesList : state.stories.StoriesList,
});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditStory);