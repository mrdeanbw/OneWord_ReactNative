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
import colors from '../../Constants/colors';
import * as storyActions from '../../actions/stories';

class CreatePasscode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passCode : '',
      passCodeItem0 : '',
      passCodeItem1 : '',
      passCodeItem2 : '',
      passCodeItem3 : '',     
    }
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
 

  handleBackButton(){
    let passCode = this.state.passCodeItem0 + this.state.passCodeItem1 + this.state.passCodeItem2 + this.state.passCodeItem3;    
    if (passCode.length>0 && passCode.length < 4) return (
      Alert.alert('Passcode length must be 4')
    )
    //Actions.pop({passCode : passCode});
    // Actions.CreateStory({
    //   passCode : passCode,
    //   selectedThemeId : this.props.selectedThemeId, 
    //   storyName : this.props.storyName
    // });
    this.props.setPasscode(passCode);
    Actions.CreateStory({passCode : passCode});

  }  
  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.headerContainer}>     
          <Left style={{flex : .5}}>
            <Button transparent onPress={()=> this.handleBackButton()}>
              <Icon name='arrow-back' style={{color : colors.colorWhite, flex : .5}}/>
            </Button>
          </Left>
          <Body style={{flex : 1}}>
            <Title style={styles.headerTitle}>Create Passcode</Title>
          </Body>
          <Right style={{flex : .5}}>
          </Right>
        </Header>

        <View style={styles.titleStyle}> 
          <Text style={styles.titleText}>Strip Truth or Dare</Text>
        </View>
        <View style={styles.passcodeContainer}>
          <TextInput
            maxLength = {1}
            autoCorrect = {false}
            style = {styles.passCodeLeftItem}
            onChangeText={(passCodeItem0) => {
              this.setState({passCodeItem0});
            }}
          >
          </TextInput>
          <TextInput
            maxLength = {1}
            autoCorrect = {false}
            style = {styles.passCodeItem}
            onChangeText={(passCodeItem1) => {
              this.setState({passCodeItem1});
            }}
          >
          </TextInput>
          <TextInput
            maxLength = {1}
            autoCorrect = {false}
            style = {styles.passCodeItem}
            onChangeText={(passCodeItem2) => {
              this.setState({passCodeItem2});
            }}
          >
          </TextInput>
          <TextInput
            maxLength = {1}
            autoCorrect = {false}
            style = {styles.passCodeRightItem}
            onChangeText={(passCodeItem3) => {
              this.setState({passCodeItem3});
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
    backgroundColor : colors.colorPurpleDark,
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
  textContainder:{
    //textAlign : 'center',
    flexDirection : 'column'
  },
  headerTitle:{
    color: colors.colorWhite,
    flex : 0.5,
    flexDirection : 'row'
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
)(CreatePasscode);