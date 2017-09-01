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

export default class StoryList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> StoryList------</Text>
        <View style={[styles.storyItemView,{backgroundColor : '#5CC2FF'}]}>
          <TouchableOpacity>
            <Text style={styles.itemText}>Start a new story...</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.storyItemView,{backgroundColor : '#ff6852'}]}>
          <TouchableOpacity>
            <Text style={styles.itemText}>Strip Truth or Dare</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.storyItemView,{backgroundColor : '#ff6852'}]}>
          <TouchableOpacity>
            <Text style={styles.itemText}>The Elephants and the Monkeys</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.storyItemView,{backgroundColor : '#ff6852'}]}>
          <TouchableOpacity>
            <Text style={styles.itemText}>The Fox and the Wolf</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.storyItemView,{backgroundColor : '#ff6852'}]}>
          <TouchableOpacity>
            <Text style={styles.itemText}>Big brother, little sister</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.storyItemView,{backgroundColor : '#ff6852'}]}>
          <TouchableOpacity>
            <Text style={styles.itemText}>Really short story that will make voucry</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.storyItemView,{backgroundColor : '#ff6852'}]}>
          <TouchableOpacity>
            <Text style={styles.itemText}>Start a new story...</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  storyItemView:{
    flex : 1,
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent : 'center',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginBottom : -5
    
    //height : 100,

  },
  itemText:{
    textAlign : 'center',
    textAlignVertical : 'center',
    fontSize : 22,
    color : '#ffffff',
    fontWeight : 'bold'
  }
});