import React from 'react';
import {
  AsyncStorage,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

//const image
const mobileExplore = require('../../Assets/images/iphone-jet-black.png');
export default class ClientInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.titleText}>Explore Stories</Text>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>Nam dapibus nisl vitae elit fringilla rutrum. </Text>
            <Text style={styles.contentText}>Aenean sollicitudin, erat a elementum rutrum, </Text>
            <Text style={styles.contentText}>neque sem.</Text>
          </View>
        </View>
        <View>
        </View>
        <ScrollView >
          <Image source={ mobileExplore } resizeMode="contain" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7CA42',
    alignItems: 'center',
    
  },
  topContainer: {
    marginTop : 100,
  },
  titleText:{
    //flexDirection: 'row',
    //flex : 1,
    //justifyContent : 'center',
    textAlign : 'center',
    color: '#fff',
    fontSize : 25,
    paddingBottom : 15,
    
  },
  contentContainer:{
    marginHorizontal : 10
  },
  contentText:{
    color: '#fff',
    textAlign : 'center',
    fontSize : 17,
    alignItems : 'center',
    justifyContent: 'center',
  }
});