import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const Input = ({ ConFig }) => {
  return (
    <View>
      <TextInput style={styles.input} {...ConFig} />
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
