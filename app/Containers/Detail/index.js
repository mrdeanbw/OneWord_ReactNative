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

import { Content, Tab, Tabs, Form, Item, Label, List, ListItem, Input, Switch, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { TabViewAnimated, TabViewPagerScroll, TabBar, SceneMap } from '../../Components/TabView';
//import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { connect } from 'react-redux';
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import StoryList from './ExploreStory';
import MyWords from './MyWords';
import colors from '../../Constants/colors';

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
  }
  _handleIndexChange = index => this.setState({ index });
  
  _renderHeader = props => <TabBar {...props} />;
  
  _renderScene = SceneMap({
      '1': FirstRoute,
      '2': SecondRoute,
  });

  FirstRoute = () => <StoryList />
  SecondRoute = () => <MyWords />
  
  onSetting(){
    Actions.Setting();
  }
  onSearch(){
    Actions.Search();
  }
  render() {
    return (
      <Container>
        <Header style={styles.headerContainer}>
          <Left style={{flex : 1}}> 
            <Button transparent onPress={()=>this.onSearch()}>
              <Icon name="ios-search" style={styles.navbarIcon} />
            </Button>
          </Left>
          <Body style={{flex : 2, alignItems : 'center'}}>
            <Title style={styles.headerTitle}>One Word at a Time</Title>
          </Body>
          <Right style={{flex : 1}}> 
            <Button transparent onPress={()=>this.onSetting()}>
              <Icon name="ios-settings-outline" style={styles.navbarIcon} />
            </Button>
          </Right>
        </Header>

        <Tabs Style={{backgroundColor : '#fff'}} initialPage={0} tabBarPosition = 'top' style={{backgroundColor : '#fff'}} tabBarUnderlineStyle={{ position:'absolute', marginBottom : 45, backgroundColor : '#915DF4'}}>
          <Tab  tabStyle={{backgroundColor : '#fff'}}  activeTabStyle ={{backgroundColor : '#fff'}} textStyle ={{color : '#4f4f4f', fontWeight : '400'}} activeTextStyle={{color : '#915DF4'}} heading="Explore Stories" tabStyle={{backgroundColor : '#ffffff'}} style={{backgroundColor : '#fff'}} >
            <StoryList />
          </Tab>
          <Tab tabStyle={{backgroundColor : '#fff'}} activeTabStyle ={{backgroundColor : '#fff'}} textStyle ={{color : '#4f4f4f'}}  activeTextStyle={{color : '#915DF4'}} heading="My Words">
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
  headerTitle:{
    color : '#3f3f3f'
  },  
  headerContainer:{
    borderBottomWidth : 0,
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
  },
  navbarIcon:{
    fontSize: 30, 
    color: colors.colorPurpleDark
  },
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