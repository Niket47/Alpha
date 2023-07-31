import { View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-paper';

const GoalList = ({ text, id, onPressFunction }) => {
  const ondeletehandler = () => {
    onPressFunction(id);
  };

  return (
    <TouchableOpacity onPress={ondeletehandler}>
      <View
        style={{
          marginVertical: 5,
          paddingVertical: 10,
          paddingHorizontal: 10,
          backgroundColor: '#c2c2c2',
          borderRadius: 10,
        }}>
        <Text style={{ fontSize: 20 }}>{text}</Text>
        <Divider theme={{ colors: { primary: 'green' } }} />
      </View>
    </TouchableOpacity>
  );
};

export default GoalList;
