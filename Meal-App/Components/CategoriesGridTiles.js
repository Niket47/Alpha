import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';
import React from 'react';

const CategoriesGridTiles = ({ title, color ,onPress}) => {
  return (
    <View style={[styles.griditem, { backgroundColor: color }]}>
      <Pressable
        style={({ pressed }) => [
          styles.btn,
          pressed ? styles.btnpressed : null,
        ]}
        onPress={onPress}
        android_ripple={{ color: '#ccc' }}>
        <View style={styles.innerCont}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoriesGridTiles;

const styles = StyleSheet.create({
  griditem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: '#fff',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  btn: {
    flex: 1,
  },
  btnpressed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  innerCont: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
