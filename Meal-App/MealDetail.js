import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { MEALS } from './Data/dummy-data';
import MealDetailCom from './Components/MealDetailCom';
import IconBtn from './Components/IconBtn';

const MealDetail = ({ route, navigation }) => {
  const mealid = route.params.mealid;

  const selecteditem = MEALS.find(meal => meal.id === mealid);

  const onheaderpress = () => {
    console.log('object');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconBtn
            onIconPress={onheaderpress}
            icon="star"
            size={20}
            color="#fff"
          />
        );
      },
    });
  }, [navigation, onheaderpress]);

  return (
    <>
      <ScrollView>
        <View>
          <Image source={{ uri: selecteditem.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{selecteditem.title}</Text>
        </View>
        <View>
          <MealDetailCom
            duration={selecteditem.duration}
            complexity={selecteditem.complexity}
            affordability={selecteditem.affordability}
            textstyle={styles.detailtext}
          />
          <View style={styles.subCont}>
            <Text style={styles.subtitle}>ingredients</Text>
          </View>
          {selecteditem.ingredients.map(ingredient => (
            <Text style={styles.subtext} key={ingredient}>
              {ingredient}
            </Text>
          ))}
          <View style={styles.subCont}>
            <Text style={styles.subtitle}>steps</Text>
          </View>
          {selecteditem.steps.map(steps => (
            <Text style={styles.subtext} key={steps}>
              {steps}
            </Text>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 8,
    textAlign: 'center',
  },
  detailtext: {
    color: '#fff',
  },
  subtitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subCont: {
    padding: 6,
    marginHorizontal: 4,
    marginVertical: 4,
    borderBottomColor: '#fff',
    borderBottomWidth: 1.5,
  },
  subtext: {
    backgroundColor: '#c2c2c2',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#000',
    fontSize: 18,
    borderRadius: 5,
    marginHorizontal: 30,
    marginVertical: 4,
  },
});
