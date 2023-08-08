import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpense from './Screens/AllExpense';
import ManageExpenses from './Screens/AllExpense';
import RecentExpense from './Screens/RecentExpense';
import { GlobalStyles } from './constants/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const ExpenceOverview = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}>
      <BottomTab.Screen
        name="RecentExpense"
        component={RecentExpense}
        options={{
          title: 'Recent Expense',
          tabBarIcon: ({ size, color }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="AllExpense"
        component={AllExpense}
        options={{
          title: 'All Expense',
          tabBarIcon: ({ size, color }) => {
            return <Icon name="calendar" size={size} color={color} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};
const Main = () => {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpenceOverview"
            component={ExpenceOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Main;
