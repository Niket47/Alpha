import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MealDetailCom from '../Components/MealDetailCom';

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
}) => {
  const navigation = useNavigation();
  const presshandler = () => {
    navigation.navigate('MealDetail', { mealid: id });
  };
  return (
    <View style={styles.mealitem}>
      <Pressable onPress={presshandler}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetailCom
          duration={duration}
          affordability={affordability}
          complexity={complexity}
        />
        {/* <View style={styles.details}>
          <Text style={styles.detailsitem}>{duration}M</Text>
          <Text style={styles.detailsitem}>{affordability}</Text>
          <Text style={styles.detailsitem}>{complexity}</Text>
        </View> */}
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
});
