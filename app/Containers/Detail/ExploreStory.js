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
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import colors, {StoryThemeColor}  from '../../Constants/colors';

class StoryList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      storiesList : [],
    }
  }
  componentWillMount(){
    
  }

  componentWillReceiveProps(nextProps){
    console.log('next pros in storylist', nextProps);
    if (this.state.storiesList != nextProps.storiesList){
      this.setState({storiesList : nextProps.storiesList});
    }
  }

  renderStoriesList(storyIndex, index){
    console.log('storyData', storyIndex, index, this.state.storiesList[storyIndex].storyName);
    let storyInfo = this.state.storiesList[storyIndex];
    let storyColor = StoryThemeColor[this.state.storiesList[storyIndex].defaultStoryThemeColor];
    
    return (
    
      <View style={[styles.storyItemView,{backgroundColor : storyColor}]} key={index}>
        <TouchableOpacity onPress={() => Actions.ShareStory({storyInfo})}>
          <Text style={styles.itemText}>{this.state.storiesList[storyIndex].storyName}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={styles.ScrollViewContainer}>
         <View style={styles.container}>
          <View style={[styles.storyItemView,{backgroundColor : '#5CC2FF'}]}>
            <TouchableOpacity onPress={()=>Actions.CreateStory()}>
              <Text style={styles.itemText}>Start a new story...</Text>
            </TouchableOpacity>
          </View>

          {
            this.state.storiesList && Object.keys(this.state.storiesList).map((storyIndex, index) => 
              this.renderStoriesList(storyIndex, index)
            )
          }
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

const mapStateToProps = (state) => ({
  userName : state.user.userName,
  storiesList : state.stories.StoriesList
});
const mapDispatchToProps = (dispatch) => ({
  login: (userName) => dispatch(authActions.login(userName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryList);