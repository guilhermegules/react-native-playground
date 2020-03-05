import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SandBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 40,
    backgroundColor: '#ddd',
  },
  boxOne: {
    padding: 10,
    backgroundColor: 'violet',
  },
  boxTwo: {
    padding: 10,
    backgroundColor: 'gold',
  },
  boxThree: {
    padding: 10,
    backgroundColor: 'coral',
  },
  boxFour: {
    padding: 10,
    backgroundColor: 'skyblue',
  },
});

export default SandBox;
