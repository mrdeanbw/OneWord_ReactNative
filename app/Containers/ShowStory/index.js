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
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import colors from '../../Constants/colors';

export default class ShowStory extends React.Component {
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
          <Button transparent onPress={()=>Actions.pop()}>
            <Icon name='arrow-back' style={{color : colors.colorGreenLight}}/>
          </Button>
        </Left>
        <Body>
          <Title style={styles.headerTitle}>Story</Title>
        </Body>
        <Right>
          <Button transparent onPress={()=>Actions.EditStory()}>
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
          value = {this.state.storyContent}
        />
      </View>
      <TextInput 
          //multiline={true} 
          placeholder = "Enter a word"
          placeholderTextColor = {colors.colorGreenLight}
          borderColor = {colors.colorGreenLight}
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
    backgroundColor: colors.colorWhite,
    //marginTop : 64
  },
  titleContainer:{
    marginTop : 30
  },
  formContainer:{
    marginTop : 20
  },
  headerContainer:{
    backgroundColor : colors.colorWhite,
  },
  storyContentContainer:{
    flex : 1,
    marginTop : 30,
    marginHorizontal : 20,
    backgroundColor : colors.colorWhite,
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
    color : colors.colorWhite,
  },
  storyContent:{
    flex : .9,
    fontSize : 15,
    lineHeight : 25
  },
  headerTitle:{
    color : 'rgba(0,0,0,.5)'
  },
  headerRightBtn:{
    color:colors.colorGreenLight,
    fontSize : 17
  },
  buttonStyle:{
    backgroundColor : colors.colorGreen,
    borderColor : colors.colorGreen,
    //marginHorizontal : 50,
    borderWidth : 0,
    borderRadius : 20,
    overflow : 'visible'
  },
  inputBox:{
    borderColor : colors.colorGreenLight,
    opacity  : .8,
    borderRadius : 15,
    borderWidth : 1,
    marginBottom : 10,
    marginHorizontal : 10,
    padding : 8 
  }
});