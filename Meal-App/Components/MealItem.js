import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import React from 'react';

const MealItem = ({ title, imageUrl, duration, affordability, complexity }) => {
  return (
    <View style={styles.mealitem}>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailsitem}>{duration}M</Text>
          <Text style={styles.detailsitem}>{affordability}</Text>
          <Text style={styles.detailsitem}>{complexity}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealitem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailsitem: {
    marginHorizontal: 4,
    fontSize: 15,
  },
});
