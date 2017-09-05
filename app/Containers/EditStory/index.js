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
import { Form, Item, Label, List, ListItem, Input, Switch, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
//Const images, colors
import colors from '../../Constants/colors'

export default class EditStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyTitle : 'The Elephants and the Monkeys',    
      writerName : 'jamesmiller94',
      storyContent : 'Once upon a time there lived a group of elephants in the jungle. They lived near a pond.     The king of monkeys was thinking how to send back elephants. He thought very much and got an idea. When elephants will go to the jungle to eat food, monkeys will tell them that the lions are coming to that pond. The elephants should go away. If the lions see them, they will kill them and eat them. So they should go from there. Next morning the king of monkeys told everything to the elephants. Hearing this they ran away from the pond and',
      wordText : '',
      passCode : '6308',
      switchVal_passcode : false, 
    }
  }

  render() {
    console.log(this.state.passCode);
    return (
    <View style={styles.container}>
      <Header style={styles.headerContainer}>
        <Left>
          <Button transparent onPress={()=>Actions.pop()}>
            <Icon name='arrow-back' style={{color : colors.colorRedLight}}/>
          </Button>
        </Left>
        <Body>
          <Title style={styles.headerTitle}>Edit Story</Title>
        </Body>
        <Right>
          <Button transparent onPress={()=>Actions.ShowStory()}>
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
          <ListItem style={styles.colorListItem}>
            <View style={[styles.colorBoxItem, {backgroundColor:colors.colorPink}]}/>            
            <View style={[styles.colorBoxItem, {backgroundColor:colors.colorNavy}]}/>       
            <View style={[styles.colorBoxItem, {backgroundColor:colors.colorPurple}]}/>       
            <View style={[styles.colorBoxItem, {backgroundColor:colors.colorBlue}]}/>       
            <View style={[styles.colorBoxItem, {backgroundColor:colors.colorGreen}]}/>      
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
                onValueChange={(switchVal)=>this.setState({switchVal_passcode : switchVal})} 
                onTintColor={colors.colorNavy}
              />
            </Right>
          </ListItem>
        </List>
      </View>
      
      <View style={styles.storyContentContainer}>
        <Label style={styles.storyTitle}>{this.state.storyTitle}</Label>
        <TextInput 
          multiline={true} 
          editable={true}
          style={styles.storyContent}
          onChangeText={(storyText)=>this.setState({storyContent : storyText})}
          value = {this.state.storyContent}
        />
      </View>

      <TextInput 
        placeholder = "Enter a word"
        placeholderTextColor = {colors.colorGreenLight}
        autoCorrect = {false}
        borderColor = {colors.colorGreenLight}
        borderRadius = {1}
        style={styles.inputBox}
        onChangeText={(text) => this.setState({wordText: text})}
        value={this.state.wordText}
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
    //borderColor : colors.colors.colorGreenLight,
    //borderWidth : 1,
    opacity  : .8,
    borderRadius : 15,
    marginBottom : 20,
    marginHorizontal : 20,
    //padding : 8
  }
});