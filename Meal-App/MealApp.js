import { View, StatusBar, Text } from 'react-native';
import React from 'react';
import CategoriesScreen from './CategoriesScreen';
import MealsOverviewScreen from './MealsOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MealApp = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#351401" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: '#fff',
            contentStyle: { backgroundColor: '#9b7d6e' },
          }}>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              headerTitle: 'Meals Categories',
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MealApp;
