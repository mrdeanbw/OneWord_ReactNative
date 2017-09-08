import * as types from './types';
import firebase, {firebaseApp, firebaseDb} from '../Constants/firebase';

export const fetchStories = (userId) => async (dispatch, store) => {
  firebase.database().ref('Stories/').orderByChild("userId").equalTo(userId).once("value",snapshot => {
    let StoriesList = snapshot.val();
    if (StoriesList){
      console.log("StoriesList", StoriesList);
      dispatch({type : types.FETCH_STORIES_SUCCESS, StoriesList : StoriesList});
    }
    // else {
      
    //   var newRef = firebase.database().ref('Users/').push({
    //     userName : this.state.userName
    //   })
    //   .then((res)=> {
    //     console.log('user registerd!', res, res.key);
    //     var userId = res.key;
    //     this.props.login(this.state.userName, userId);
    //   })
    // }
  }); 
}

export const fetchAllStories = () => async (dispatch, store) => {

  var storiesRef = firebase.database().ref('Stories/');
  storiesRef.on('value', snapshot => {
    let StoriesList = snapshot.val();
    console.log('sanpsht', snapshot, snapshot.val());
    if (StoriesList){
      dispatch({type : types.FETCH_STORIES_SUCCESS, StoriesList : StoriesList});
    }
  }) 
}
export const setPasscode = (passCode) => async (dispatch, store) => {
  dispatch({type : types.SET_PASSCODE, passCode : passCode})
}

export const updateSelectedStoryId = (storyId) => async (dispatch, store) => {
  dispatch({type : types.UPDATE_SELECTED_STORYID, selectedStoryId : storyId})
}




