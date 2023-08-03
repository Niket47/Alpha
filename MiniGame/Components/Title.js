import { View, Text } from 'react-native';
import React from 'react';

const Title = ({ children }) => {
  return (
    <Text
      style={{
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        borderColor: '#ddb52f',
        borderWidth: 3,
        padding: 12,
      }}>
      {children}
    </Text>
  );
};

export default Title;
