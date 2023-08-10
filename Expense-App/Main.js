import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpense from './Screens/AllExpense';
import ManageExpenses from './Screens/AllExpense';
import RecentExpense from './Screens/RecentExpense';
import { GlobalStyles } from './constants/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconBtn from './Components/IconBtn';
import ManageExpense from './Screens/ManageExpense';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const ExpenceOverview = () => {
  const navigation = useNavigation();

  return (
    <BottomTab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconBtn
            icon="plus"
            color={tintColor}
            size={24}
            onpress={() => {
              navigation.navigate('ManageExpence');
            }}
          />
        ),
      })}>
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
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: '#fff',
            tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
          }}>
          <Stack.Screen
            name="ExpenceOverview"
            component={ExpenceOverview}
            options={{
              headerShown: false,
            }}
          />

          {/* <Stack.Screen name="ManageExpence" component={ManageExpenses} /> */}
          <Stack.Screen
            name="ManageExpence"
            component={ManageExpense}
            options={{ presentation: 'modal' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Main;
