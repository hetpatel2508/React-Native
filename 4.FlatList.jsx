/* eslint-disable no-trailing-spaces */
import { View, Text, FlatList } from 'react-native';
import React from 'react';

export default function App() {
  const users = [
    {
      id: 1,
      name: 'Urvish Patel',
    },
    {
      id: 2,
      name:  'Het Patel',
    },
    {
      id: 3,
      name:  'Sahil Patel',
    },
    {
      id: 4,
      name:  'Deep Patel',
    },
    {
      id: 5,
      name:  'Dev Patel',
    },
  ];

  return (
    <View>
      <Text>FlatList Example</Text>
      <FlatList 
        data={users}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id}
        style={{marginTop: 20}} 
      />
    </View>
  );
}
