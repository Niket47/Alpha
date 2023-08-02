import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import PrimaryBtn from '../Components/PrimaryBtn';

const StartGameScren = () => {
  return (
    <View
      style={{
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: '#72063c',
        elevation: 4,
        alignItems: 'center',
      }}>
      <TextInput
        style={{
          fontSize: 32,
          height: 70,
          width: 50,
          textAlign: 'center',
          borderBottomColor: '#ddb52f',
          borderBottomWidth: 2,
          color: '#ddb52f',
          marginVertical: 8,
          fontWeight: 'bold',
        }}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
      />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <PrimaryBtn>Reset</PrimaryBtn>
        </View>
        <View style={{ flex: 1 }}>
          <PrimaryBtn>Confirm</PrimaryBtn>
        </View>
      </View>
    </View>
  );
};

export default StartGameScren;
