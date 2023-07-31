import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './Feed';
import CustomDrawer from './CustomDrawer';
import ExportData from './ExportData';
import Notification from './Notification';

const Drawer = createDrawerNavigator();

const Main = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Feed"
        component={Feed}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ExportData"
        component={ExportData}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
};

export default Main;
