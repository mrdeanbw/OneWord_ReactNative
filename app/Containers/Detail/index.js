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
import { Container, Header, Content, Tab, Tabs } from 'native-base';

import { connect } from 'react-redux';
import StoryList from './ExploreStory';
import MyWords from './MyWords';
const FirstRoute = (storiesList) => <StoryList storiesList = {storiesList}/>
const SecondRoute = () => <MyWords />
 
class Detail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      storiesList : {},
      index: 0,
      routes: [
        { key: '1', title: 'Explore Stories' },
        { key: '2', title: 'My Words' },
      ],
    }
  }
  componentWillMount(){
    let userName = this.props.userName;
    console.log('userName from store', userName);
  }

  componenDidMount(){
    let userName = this.props.userName;
    console.log('userName from store', userName);
  }
  componentWillReceiveProps(nextProps){
    console.log('next props in detail', nextProps);
    if (this.state.storiesList != nextProps.storiesList){
      this.setState({storiesList : nextProps.storiesList});
    }
  }
  _handleIndexChange = index => this.setState({ index });
  
  _renderHeader = props => <TabBar {...props} />;
  
  _renderScene = SceneMap({
      '1': FirstRoute,
      '2': SecondRoute,
  });

  FirstRoute = (storiesList) => <StoryList />
  SecondRoute = () => <MyWords />
  
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs initialPage={0} tabBarPosition = 'top' tabBarUnderlineStyle={{backgroundColor : '#915DF4'}}>
          <Tab textStyle={{color : '#915DF4'}} heading="Explore Stories" >
            <StoryList />
          </Tab>
          <Tab textStyle={{color : '#915DF4'}} heading="My Words">
            <MyWords />
          </Tab>
        </Tabs>
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
)(Detail);