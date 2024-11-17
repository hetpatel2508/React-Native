import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [selected, setSelected] = React.useState(0);
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Custom Radio Button</Text>

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 , alignSelf: 'flex-start'}}>This is a Question</Text>

      {/* <TouchableOpacity style={styles.subMain} onPress={() => setSelected(1)}>
        <View style={styles.UpperDot}>
          {selected === 1 ? <View style={styles.LowerDot} /> : null}
        </View>
        <Text style={styles.optionText}>Option 1</Text>
      </TouchableOpacity> */}

      {
        options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.subMain}
            onPress={() => setSelected(index + 1)}
          >
            <View style={styles.UpperDot}>
              {selected === index + 1 ? <View style={styles.LowerDot} /> : null}
            </View>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subMain: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  UpperDot: {
    borderWidth: 1,
    borderColor: 'black',
    height: 20,
    width: 20,
    borderRadius: 20 / 2, // Circle shape
    marginRight: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LowerDot: {
    height: 12,
    width: 12,
    borderRadius: 12 / 2, // Circle shape
    backgroundColor: 'black',
  },
  optionText: {
    fontSize: 18,
    color: 'black',
  },
});
