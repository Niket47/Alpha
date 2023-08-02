import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const PrimaryBtn = ({ children }) => {
  const onCXbtnPress = () => {
    console.log('onCXbtnPress');
  };
  return (
    <View
      style={{
        backgroundColor: '#ae2d6e',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 0.4,
        borderRadius: 20,
        margin: 3,
      }}>
      <TouchableOpacity
        onPress={onCXbtnPress}
        android_ripple={{ color: '#c2c2c2' }}>
        <Text style={{ textAlign: 'center', color: '#fff' }}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryBtn;
