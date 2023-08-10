import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../constants/Styles';

const CxButton = ({ onbtnpress, children, mode, style }) => {
  return (
    <View style={style}>
      <Pressable onPress={onbtnpress}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CxButton;
const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: 'transparant',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
