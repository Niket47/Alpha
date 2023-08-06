import { View, FlatList, Text } from 'react-native';
import React from 'react';
import { MEALS } from './Data/dummy-data';
import MealItem from './Components/MealItem';

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.catGid;

  const displymeals = MEALS.filter(mealitem => {
    return mealitem.categoryIds.indexOf(catId) >= 0;
  });

  const renderItem = itemData => {
    const item = itemData.item;
    const mealporps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
    };
    return <MealItem {...mealporps} />;
  };

  return (
    <View>
      <FlatList
        data={displymeals}
        keyExtractor={itemData => itemData.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;
