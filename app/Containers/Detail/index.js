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
//import { TabViewAnimated, TabViewPagerScroll, TabBar, SceneMap } from 'react-native-tab-view';
import { TabViewAnimated, TabViewPagerScroll, TabBar, SceneMap } from '../../Components/TabView';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

import StoryList from './ExploreStory';
import MyWords from './MyWords';
const FirstRoute = () => <StoryList />
const SecondRoute = () => <MyWords />
 

export default class Detail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: '1', title: 'Explore Stories' },
        { key: '2', title: 'My Words' },
      ],
    }
  }
  _handleIndexChange = index => this.setState({ index });
  
  _renderHeader = props => <TabBar {...props} />;
  
    _renderScene = SceneMap({
      '1': FirstRoute,
      '2': SecondRoute,
  });
  
  render() {
    return (
      <Container>
        {/* <Header>
          <Left>
            <Button transparent>
              <Icon name="ios-search" size={30} color="#4F8EF7" />
            </Button>
          </Left>
          <Body style={{width : 150}}>
            <Text style={{fontSize : 20}}>One Word at a Time</Text>
          </Body>
          <Right>
          <Icon name="md-settings" size={30} color="#4F8EF7" />
          </Right>
        </Header> */}
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
        />
      </Container>
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