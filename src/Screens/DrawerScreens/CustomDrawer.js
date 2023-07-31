import { View, Text } from 'react-native';
import React from 'react';
import Notification from './Notification';
import ExportData from './ExportData';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Menu } from 'react-native-paper';

const CustomDrawer = ({ navigation }) => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Text>CustomDrawer</Text>
        <Text>Notification</Text>
        <Text>ExportData</Text>
        <Menu.Item
          leadingIcon="notification-clear-all"
          onPress={() => navigation.navigate('Notification')}
          title="Notification"
        />
        <Menu.Item
          leadingIcon="file-export"
          onPress={() => navigation.navigate('ExportData')}
          title="ExportData"
        />
      </View>
    </>
  );
};

export default CustomDrawer;
