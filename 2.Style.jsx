import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyExternalStyle from './GlobalStyle';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={MyExternalStyle.TextItem1}> Hello World 1</Text>
        <Text style={{color: 'green', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}> Hello World 2</Text>
        <Text style={styles.TextItem3}> Hello World 3</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextItem3: {
    color: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});


/*
In GlobalStyle.js

import { StyleSheet } from 'react-native';  // Correct import statement

const MyExternalStyle = StyleSheet.create({
  TextItem1: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MyExternalStyle;  // Exporting correctly

*/