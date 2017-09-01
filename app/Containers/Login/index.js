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
//Const images
const GroupImg = require('../../Assets/images/Group.png');

export default class Login extends React.Component {
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
          
          <Button style={styles.buttonView}>
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
    fontSize : 20,
    paddingHorizontal : 10,
    
  },
  exploreStoriesViewStyle:{
    width : 300,
    borderRadius: 10,
  },
  buttonView:{
    backgroundColor: '#FFFFFF',
    marginBottom : 20
  },
  nameText:{
    color : '#ffffff'
  }
});