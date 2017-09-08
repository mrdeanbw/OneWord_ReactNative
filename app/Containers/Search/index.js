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
import { Container, Header, Item, Input, Icon } from 'native-base';
import { LinearGradient } from 'expo';

import colors, {StoryThemeColorLight, StoryThemeColorDark}  from '../../Constants/colors';
import * as storyActions from '../../actions/stories';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchkey : '',
      storiesList : [],
      AllStoriesList : [],
      filteredStoryList : []
    }
  }

  componentWillMount() {
    if (this.state.AllStoriesList != this.props.AllStoriesList){
      this.setState({AllStoriesList : this.props.AllStoriesList});
      this.setState({storiesList : this.props.AllStoriesList});
    }
  }

  handleChangeText(searchkeyInput){
    this.setState({searchkey : searchkeyInput});
    let _storiesListObj = {};
    let _filteredIdArray = Object.keys(this.state.AllStoriesList).filter((storyId)=>{

      return this.state.AllStoriesList[storyId].storyName.toLowerCase().includes(searchkeyInput.toLowerCase());
    })
    _filteredIdArray.forEach((id)=>{
      let key = id;
      _storiesListObj[key] = this.state.AllStoriesList[id];
    })
    this.setState({storiesList : _storiesListObj});
  }
  
  handleSelectStory(storyInfo, selectedStoryId){
    this.props.updateSelectedStoryId(selectedStoryId);
    Actions.ShareStory({storyInfo})
  }
  handleSelectLockedStory(storyInfo, selectedStoryId){
    this.props.updateSelectedStoryId(selectedStoryId);
    Actions.ShowLockedStory({storyInfo});
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
          height  :100
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
    return (
      <View style={styles.container}>
        <Header searchBar rounded style={{paddingTop : 0, height : 50, backgroundColor : '#eeeeee'}}>
          <Item style={{backgroundColor : '#ffffff'}}>
            <Input placeholder="Names of stories" onChangeText={(text)=>this.handleChangeText(text)} value={this.state.searchkey} />
            <Icon name="ios-search" />
          </Item>
        </Header>

        <ScrollView style={styles.ScrollViewContainer}>
          {
            this.state.storiesList && Object.keys(this.state.storiesList).map((storyIndex, index) => 
              this.renderStoriesList(storyIndex, index)
            )
          }
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
    //flex: 1
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
)(Search);