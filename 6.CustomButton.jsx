/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, marginTop: 20, flex: 1 }}>Custom Button</Text>
      <TouchableHighlight
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          width: 100,
          alignSelf: 'center'
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Login</Text>
      </TouchableHighlight>

      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginTop: 20
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}