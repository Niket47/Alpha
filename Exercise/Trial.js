import { View, Text } from 'react-native';
import React from 'react';
import Form from './PassData/Comp/Form';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screen/HomeScreen';
import SecondScreen from './Screen/SecondScreen';

const BoTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Bottomtabs = () => {
  return (
    <BoTab.Navigator>
      <BoTab.Screen name="Homes" component={HomeScreen} />
      <BoTab.Screen name="Settings" component={SecondScreen} />
    </BoTab.Navigator>
  );
};
const Trial = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen
          name="Notif"
          component={Bottomtabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Trial;
