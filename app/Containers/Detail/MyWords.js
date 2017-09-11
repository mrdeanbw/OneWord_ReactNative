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
import { LinearGradient } from 'expo';
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import colors, {StoryThemeColorLight, StoryThemeColorDark}  from '../../Constants/colors';
import * as storyActions from '../../actions/stories';

class MyWords extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      storiesList : [],
      AllStoriesList : [],
      userName : ''
    }
  }

  componentWillMount() {
    console.log('next ', this.props.AllStoriesList);
    if (this.state.AllStoriesList != this.props.AllStoriesList){
      this.setState({AllStoriesList : this.props.AllStoriesList});
    }
    this.setState({userName : this.props.userName});
    
    console.log('next username', this.props.userName);


    let _storiesListObj = {};
    let _filteredIdArray = Object.keys(this.props.AllStoriesList).filter((storyId)=>{

      return this.props.AllStoriesList[storyId].createdBy == this.props.userName
    })
    _filteredIdArray.forEach((id)=>{
      let key = id;
      _storiesListObj[key] = this.props.AllStoriesList[id];
    })
    this.setState({storiesList : _storiesListObj});

  }
  componentWillReceiveProps(nextProps) {
    if (this.state.AllStoriesList != nextProps.AllStoriesList){
      this.setState({AllStoriesList : nextProps.AllStoriesList});
    }
    this.setState({userName : nextProps.userName});
    console.log('next username1', nextProps.userName);
  }

  handleSelectStory(storyInfo, selectedStoryId){
    this.props.updateSelectedStoryId(selectedStoryId);
    Actions.ShareStory({storyInfo})
  }
  handleSelectLockedStory(storyInfo, selectedStoryId){
    this.props.updateSelectedStoryId(selectedStoryId);
    Actions.ShowLockedStory({storyInfo});
  }

  filterStoriesByWriter(){
    
    let _storiesListObj = {};
    let _filteredIdArray = Object.keys(this.state.AllStoriesList).filter((storyId)=>{

      return this.state.AllStoriesList[storyId].createdBy == this.props.userName
    })
    _filteredIdArray.forEach((id)=>{
      let key = id;
      _storiesListObj[key] = this.state.AllStoriesList[id];
    })
    this.setState({storiesList : _storiesListObj});
  }

  renderStoriesList(storyIndex, index){
    let storyInfo = this.state.storiesList[storyIndex];
    let storyColorLight = StoryThemeColorLight[this.state.storiesList[storyIndex].defaultStoryThemeColor];
    let storyColorDark = StoryThemeColorDark[this.state.storiesList[storyIndex].defaultStoryThemeColor];
    
    return (
      <LinearGradient
        colors = {[storyColorLight, storyColorDark]}
        style={{alignItems: 'center'}}
        style = {{
          position : 'relative',
          left : 0,
          right : 0,
          top : 0,
          height  :100,
          borderTopLeftRadius : 6,
          borderTopRightRadius : 6,
          marginBottom : -5,
        }}
        start = {{x : 0, y : 1 }}
        end = {{x : 1, y : 1}}
        key = {index}
      >
        {
          this.state.storiesList[storyIndex].passCode == '' ?
            <View style={[styles.storyItemView,{}]} key={index}>
              <TouchableOpacity onPress={() => this.handleSelectStory(storyInfo, storyIndex)}>
                  <Text style={styles.itemText}>{this.state.storiesList[storyIndex].storyName}</Text>
              </TouchableOpacity>
            </View>
            :
            <View style={[styles.storyItemView,{}]} key={index}>
              <TouchableOpacity onPress={() => this.handleSelectLockedStory(storyInfo, storyIndex)}>
                  <Text style={styles.itemText}>{this.state.storiesList[storyIndex].storyName}</Text>
              </TouchableOpacity>
              <Icon name='lock' style={styles.lockIon}/>
            </View>
        }
      </LinearGradient>
    )
  }

  render() {
    //this.filterStoriesByWriter();
    return (
      <ScrollView style={styles.ScrollViewContainer}>
        <View style={styles.container}>
          <LinearGradient
            colors = {[StoryThemeColorLight[3], StoryThemeColorDark[3]]}
            style={{alignItems: 'center'}}
            style = {{
              borderTopLeftRadius : 6,
              borderTopRightRadius : 6,
              marginBottom : -5,
              position : 'relative',
              left : 0,
              right : 0,
              top : 0,
              height  :100
            }}
            start = {{x : 0, y : 1 }}
            end = {{x : 1, y : 1}}
          >
            <View style={[styles.storyItemView,{}]}>
              <TouchableOpacity onPress={()=>Actions.CreateStory()}>
                <Text style={styles.itemText}>Start a new story...</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
          
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
    fontWeight : 'bold',
    backgroundColor : 'transparent'
  },
  lockIon:{
    fontSize : 20, 
    position : 'absolute',
    right : 10,
    top : 10,
    //justifyContent : 'flex-end', 
    color: '#fefefe',
    //alignItems : 'flex-start',
    //alignContent : 'flex-start',
    backgroundColor : 'transparent'
  }
});

const mapStateToProps = (state) => ({
  userName : state.user.userName,
  AllStoriesList : state.stories.StoriesList
});
const mapDispatchToProps = (dispatch) => ({
  login: (userName) => dispatch(authActions.login(userName)),
  updateSelectedStoryId : (storyId) => dispatch(storyActions.updateSelectedStoryId(storyId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyWords);