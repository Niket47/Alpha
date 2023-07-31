import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../Splash';
import HomeScreen from './HomeScreen';
import Expense from '../PopScreens/Expense';
import Transfer from '../PopScreens/Transfer';
import Income from '../PopScreens/Income';

const Stack = createNativeStackNavigator();
const AppNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SettingsScreen"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Expense"
          component={Expense}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Income"
          component={Income}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
