import { View, FlatList, Text } from 'react-native';
import React, { useEffect } from 'react';
import { MEALS, CATEGORIES } from './Data/dummy-data';
import MealItem from './Components/MealItem';

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.catGid;

  const displymeals = MEALS.filter(mealitem => {
    return mealitem.categoryIds.indexOf(catId) >= 0;
  });

  //  optional if error
  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId,
    ).title;

    navigation.setOptions({
      headerTitle: categoryTitle,
    });
  }, [catId, navigation]);
  //  optional if error

  const renderItem = itemData => {
    const item = itemData.item;
    const mealporps = {
      id: item.id,
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
