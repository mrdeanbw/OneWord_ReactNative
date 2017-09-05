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
import Button from 'apsl-react-native-button';
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
//Const images
const GroupImg = require('../../Assets/images/Group.png');
import firebase, {firebaseApp, firebaseDb} from '../../Constants/firebase'
import * as authActions from '../../actions/auth';
// export default class Login extends React.Component {
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName : ''
    }
  }
  componentWillMount(){

  }

  _handleExploreStories(){
    if (this.state.userName){
      firebase.database().ref('Users/').orderByChild("userName").equalTo(this.state.userName).once("value",snapshot => {
        let userData = snapshot.val();
        var userId = Object.keys(userData)[0];
        if (userData){
          console.log("userData already exist", userData);
        }
        else{
          firebase.database().ref('Users/').push({
            userName : this.state.userName
          })
          .then((res)=> console.log('user registerd!', res, res.key))
        }
      });
      this.props.login(this.state.userName, userId);
      Actions.Detail();
    }
    return;
  } 

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}> 
          <Image source={ GroupImg } style={styles.GroupImg} resizeMode="contain" />
          <Text style={styles.titleText}>One Word at a Time</Text>
        </View>
        <View style={styles.InputContainer}> 
          <TextInput
            maxLength = {40}
            placeholder = 'Enter your name...'
            placeholderTextColor = '#C0C0C0'
            autoCorrect = {false}
            style = {styles.nameText}
            onChangeText={(userName) => this.setState({userName})}
          >
          </TextInput>
          <View
            style={{
              width : 350,
              borderBottomColor: '#c0c0c0',
              borderBottomWidth: 1,  
              marginTop : 10,
              marginBottom : 20
            }}
          />
          
          <Button style={styles.buttonView}
            onPress = {() => this._handleExploreStories()}
          >
            <View style={styles.exploreStoriesViewStyle}>
              <Text style={styles.exploreStoriesText}>Explore Stories</Text>
            </View>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B85CFF',
    alignItems: 'center',
  },
  headerContainer:{
    flex : 6,
    alignItems: 'center',
  },
  GroupImg: {
    marginTop : 200,
    marginBottom : 20,
  
  },
  titleText:{
    color: '#fff',
    textAlign : 'center',
    fontSize : 23,
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
    // width : '90%',
    // borderRadius: 10,
  },
  buttonView:{
    backgroundColor: '#FFFFFF',
    borderColor : '#FFFFFF',
    borderRadius : 20,
    height : 50
  },
  nameText:{
    color : '#ffffff'
  }
});

const mapStateToProps = (state) => ({
  userName : state.userName
});

const mapDispatchToProps = (dispatch) => ({
  login: (userName, userId) => dispatch(authActions.login(userName, userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);