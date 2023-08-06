import { View, Text } from 'react-native';
import React from 'react';

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.catGid;
  return (
    <View>
      <Text>MealsOverviewScreen</Text>
      <Text>{catId}</Text>
    </View>
  );
};

export default MealsOverviewScreen;
