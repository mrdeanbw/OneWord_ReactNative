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

import { connect } from 'react-redux';
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import { Form, Item, Label, List, ListItem, Input, Switch, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import CodePin from 'react-native-pin-code';
//Const images, colors
import colors, {StoryThemeColorLight, StoryThemeColorDark}  from '../../Constants/colors';;
import * as storyActions from '../../actions/stories';

class CheckPasscode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passCode : '',
      passCodeItem0 : '',
      passCodeItem1 : '',
      passCodeItem2 : '',
      passCodeItem3 : '',     
      storyThemeColor : 0,
      storyName : '',
      createdBy : '',
    }
  }

  componentWillMount(){
    let _storyName = this.props.storyInfo.storyName; 
    let _createBy = this.props.storyInfo.createdBy;
    // let _storyContent = this.props.storyInfo.storyContent;
    console.log('props',this.props);
    console.log('infor',this.props.storyInfo);

    let _storyThemeColor = this.props.storyInfo.defaultStoryThemeColor;
    this.setState({storyThemeColor : _storyThemeColor});
    this.setState({storyName : _storyName, createdBy : _createBy});
  }

  _handlePress(){
    if (this.state.nameText){
      //Actions.StoryList();
      Actions.Detail();
    }
  } 
  handlePasscode(res){
    console.log("res", res);
  }
 
  checkPasscode(){
    let passCode = this.state.passCodeItem0 + this.state.passCodeItem1 + this.state.passCodeItem2 + this.state.passCodeItem3;
    if (passCode.length == 4 && this.props.storyInfo.passCode != passCode){
      return ( 
        Alert.alert('Invaild Passcode!')
      )
    } 

    if (passCode == this.props.storyInfo.passCode) Actions.ShowStory();
  }
  handleBackButton(){
    Actions.pop();
  }  
  render() {
    return (
      <View style={[styles.container, {backgroundColor : StoryThemeColorLight[this.state.storyThemeColor]}]}>  
        <Header style={styles.headerContainer}>     
          <Left style={{flex : 1}}>
            <Button transparent onPress={()=> this.handleBackButton()}>
              <Icon name="ios-arrow-back" style={{color : colors.colorWhite, flex : .5}}/>
            </Button>
          </Left>
          <Body style={{flex : 2, alignItems : 'center'}}>
            <Title style={styles.headerTitle}>Unlock Story</Title>
          </Body>
          <Right style={{flex : 1}}>
          </Right>
        </Header>

        <View style={styles.titleStyle}> 
          <Text style={styles.titleText}>{this.state.storyName}</Text>
          <Text style={styles.byWriter}>{'by ' + this.state.createdBy}</Text>
        </View>
        <View style={styles.passcodeContainer}>
          <TextInput
            maxLength = {1}
            autoCorrect = {false}
            style = {styles.passCodeLeftItem}
            underlineColorAndroid = 'transparent'
            onChangeText={(passCodeItem0) => {
              this.setState({passCodeItem0});
              setTimeout(()=>this.checkPasscode(), 0);
            }}
          >
          </TextInput>
          <TextInput
            maxLength = {1}
            autoCorrect = {false}
            style = {styles.passCodeItem}
            underlineColorAndroid = 'transparent'
            onChangeText={(passCodeItem1) => {
              this.setState({passCodeItem1});
              setTimeout(()=>this.checkPasscode(), 0);
            }}
          >
          </TextInput>
          <TextInput
            maxLength = {1}
            autoCorrect = {false}
            style = {styles.passCodeItem}
            underlineColorAndroid = 'transparent'
            onChangeText={(passCodeItem2) => {
              this.setState({passCodeItem2});
              setTimeout(()=>this.checkPasscode(), 0);
            }}
          >
          </TextInput>
          <TextInput
            maxLength = {1}
            autoCorrect = {false}
            style = {styles.passCodeRightItem}
            underlineColorAndroid = 'transparent'
            onChangeText={(passCodeItem3) => {
              this.setState({passCodeItem3});
              setTimeout(()=>this.checkPasscode(), 0);
            }}
          >
          </TextInput>
        </View>

        {/* <CodePin
          ref={ref => this.ref = ref}
          code = '1111'
          number = {4}
          text = ''
          error = ''
          containerStyle = {styles.CodePinContainer}
          pinStyle = {styles.pinStyle}
          success = {this.handlePasscode()}
        /> */}
        <View style={styles.textContainder}>
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
  },
  headerContainer:{
    backgroundColor : 'transparent',
    borderBottomWidth : 0
  },
  headerRightBtn:{
    color : colors.colorWhite
  },
  titleText:{
    color: '#fff',
    textAlign : 'center',
    fontWeight : 'bold',
    fontSize : 30,
    alignItems : 'center',
    justifyContent: 'center',
  },
  navBarButtonWhite:{
    color : colors.colorWhite,
    fontSize : 16
  } , 
  textContainder:{
    //textAlign : 'center',
    flexDirection : 'column'
  },
  headerTitle:{
    color: colors.colorWhite,
    flex : 0.5,
    flexDirection : 'row'
  },
  exploreStoriesViewStyle:{
    width : 300,
    borderRadius: 10,
  },
  byWriter:{
    marginTop : 15,
    textAlign : 'center',
    fontSize : 15,
    color : colors.colorWhite,
  },
  passcodeTitle:{
    fontSize : 18,
    color: '#cecece',
    marginTop : 20,
    textAlign : 'center'
  },
  passcodeContainer:{
    marginTop : '20%',
    flexDirection : 'row',
    marginHorizontal : 20,
    opacity : .8,
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
  },
  titleStyle:{
    marginTop : '10%'
  },
  passCodeItem:{
    backgroundColor : colors.colorWhite,
    opacity : .5,
    flex : .25,
    height : 60,
    marginHorizontal : 10,
    borderRadius : 8,
    fontSize : 40,
    textAlign : 'center',
    color : colors.colorBlack
  },
  passCodeLeftItem : {
    backgroundColor : colors.colorWhite,
    opacity : .5,
    flex : .25,
    height : 60,
    marginHorizontal : 10,
    borderRadius : 8,
    fontSize : 40,
    textAlign : 'center',
    color : colors.colorBlack
  },
  passCodeRightItem : {
    backgroundColor : colors.colorWhite,
    opacity : .5,
    flex : .25,
    height : 60,
    marginHorizontal : 10,
    borderRadius : 8,
    fontSize : 40,
    textAlign : 'center',
    color : colors.colorBlack
  }
});

const mapStateToProps = (state) => ({
  userId : state.user.userId,
  userName : state.user.userName,
  defaultThemeColor : state.user.defaultThemeColor,
 
});
const mapDispatchToProps = (dispatch) => ({
  setPasscode : (passCode) => dispatch(storyActions.setPasscode(passCode))                
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckPasscode);