import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { CATEGORIES } from './Data/dummy-data';
import CategoriesGridTiles from './Components/CategoriesGridTiles';

const CategoriesScreen = ({ navigation }) => {
  const renderCategoriesitem = itemData => {
    const onPressOverview = () => {
      navigation.navigate('MealsOverview', { catGid: itemData.item.id });
    };

    return (
      <CategoriesGridTiles
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressOverview}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategoriesitem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
