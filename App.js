import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Root from './app/app.js';

export default class App extends React.Component {
  render() {
    return (
      <Root/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//"react": "16.0.0-alpha.12",
// "react-native-router-flux": "^4.0.0-beta.21",