import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDCVIzhFishp1DSIrCGX5tLSi1g8i4ggr0",
  //authDomain: "<your-auth-domain>",
  databaseURL: "https://one-word-at-a-time.firebaseio.com",
  storageBucket: "one-word-at-a-time.appspot.com"
};

export default firebase

export const firebaseApp = firebase.initializeApp(firebaseConfig)

export const firebaseDb = firebaseApp.database().ref()

export const firebaseStorage = firebaseApp.storage()