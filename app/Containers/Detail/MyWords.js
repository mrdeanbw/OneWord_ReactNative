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

export default class MyWords extends React.Component {
  render() {
    return (
      <ScrollView style={styles.ScrollViewContainer}>
         <View style={styles.container}>
          <View style={[styles.storyItemView,{backgroundColor : '#5CC2FF'}]}>
            <TouchableOpacity>
              <Text style={styles.itemText}>Start a new story...</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.storyItemView,{backgroundColor : '#ff6852'}]}>
            <TouchableOpacity>
              <Text style={styles.itemText}>Big brother, little ss</Text>
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
    );
  }
}

const styles = StyleSheet.create({
  ScrollViewContainer:{
    flex:1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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