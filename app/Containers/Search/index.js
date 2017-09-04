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
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import { Container, Header, Item, Input, Icon } from 'native-base';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchkey : '',
    }
  }

  render() {
    
    return (
    <View style={styles.container}>
      <Header searchBar rounded style={{paddingTop : 0, height : 50, backgroundColor : '#eeeeee'}}>
          <Item style={{backgroundColor : '#ffffff'}}>
            <Input placeholder="Search" onChangeText={(text)=>{this.setState({searchkey : text})}} value={this.state.searchkey} />
            <Icon name="ios-search" />
          </Item>
      </Header>

      <ScrollView style={styles.ScrollViewContainer}>
        <View>
          <View style={[styles.storyItemView,{backgroundColor : '#ff6852'}]}>
            <TouchableOpacity onPress={()=>Actions.ShareStory()}>
              <Text style={styles.itemText}>Strip Truth or Dare</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.storyItemView,{backgroundColor : '#33a55b'}]}>
            <TouchableOpacity>
              <Text style={styles.itemText}>The Elephants and the Monkeys</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.storyItemView,{backgroundColor : '#fc4d61'}]}>
            <TouchableOpacity>
              <Text style={styles.itemText}>The Fox and the Wolf</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.storyItemView,{backgroundColor : '#ff6852'}]}>
            <TouchableOpacity>
              <Text style={styles.itemText}>Big brother, little sister</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.storyItemView,{backgroundColor : '#FF7D49'}]}>
            <TouchableOpacity>
              <Text style={styles.itemText}>Really short story that will make voucry</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.storyItemView,{backgroundColor : '#FF9D3B'}]}>
            <TouchableOpacity>
              <Text style={styles.itemText}>What a Lovely Dream</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.storyItemView,{backgroundColor : '#2EC4A3'}]}>
            <TouchableOpacity>
              <Text style={styles.itemText}>Strip Truth or Dare</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

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
  nameText:{
    color : '#ffffff'
  },
  ScrollViewContainer:{
    flex:1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop : 64
  },
  storyItemView:{
    flex : 1,
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent : 'center',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginBottom : -5,   
    height : 100,

  },
  itemText:{
    textAlign : 'center',
    textAlignVertical : 'center',
    fontSize : 22,
    color : '#ffffff',
    fontWeight : 'bold'
  }
});