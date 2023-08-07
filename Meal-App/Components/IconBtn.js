import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconBtn = ({ onIconPress, icon, size, color }) => {
  return (
    <Pressable
      onPress={onIconPress}
      style={({ pressed }) => pressed && styles.btnPressed}>
      <Icon name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconBtn;
const styles = StyleSheet.create({
  btnPressed: {
    opacity: 0.7,
  },
});
