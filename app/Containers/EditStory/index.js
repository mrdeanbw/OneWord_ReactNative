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
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
//Const images, colors
const colorPink = '#FF9D3B';
const colorNavy = '#FD65AF';
const colorPurple = '#B85CFF';
const colorBlue = '#5CC2FF';
const colorGreen = '#2CCEB8';
const colorGreenLight = '#33c08d';
const colorWhite = '#ffffff'

export default class EditStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText : 'The Elephants and the Monkeys',    
      writerName : 'jamesmiller94',
      storyContent : 'Once upon a time there lived a group of elephants in the jungle. They lived near a pond.     The king of monkeys was thinking how to send back elephants. He thought very much and got an idea. When elephants will go to the jungle to eat food, monkeys will tell them that the lions are coming to that pond. The elephants should go away. If the lions see them, they will kill them and eat them. So they should go from there. Next morning the king of monkeys told everything to the elephants. Hearing this they ran away from the pond and',
      wordText : ''
    }
  }

  render() {
    
    return (
    <View style={styles.container}>
      <Header style={styles.headerContainer}>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' style={{color : colorGreenLight}}/>
          </Button>
        </Left>
        <Body>
          <Title style={styles.headerTitle}>Story</Title>
        </Body>
        <Right>
          <Button transparent>
            <Text style={styles.headerRightBtn}>Edit</Text>
          </Button>
        </Right>
      </Header>

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

      </View>
      <TextInput 
          //multiline={true} 
          placeholder = "Enter a word"
          placeholderTextColor = {colorGreenLight}
          borderColor = {colorGreenLight}
          borderRadius = {1}
          style={styles.inputBox}
          onChangeText={(text) => this.setState({wordText: text})}
          value={this.state.wordText}
        >
      </TextInput>


    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorWhite,
    //marginTop : 64
  },
  titleContainer:{
    marginTop : 30
  },
  formContainer:{
    marginTop : 20
  },
  headerContainer:{
    backgroundColor : colorWhite,
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
    fontSize : 20,
    color : 'rgba(0,0,0,.8)',
    fontWeight : 'bold',
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
  headerTitle:{
    color : 'rgba(0,0,0,.5)'
  },
  headerRightBtn:{
    color:colorGreenLight,
    fontSize : 17
  },
  buttonStyle:{
    backgroundColor : colorGreen,
    borderColor : colorGreen,
    //marginHorizontal : 50,
    borderWidth : 0,
    borderRadius : 20,
    overflow : 'visible'
  },
  inputBox:{
    borderColor : colorGreenLight,
    opacity  : .8,
    borderRadius : 15,
    borderWidth : 1,
    marginBottom : 10,
    marginHorizontal : 10,
    padding : 8
    
  }
});