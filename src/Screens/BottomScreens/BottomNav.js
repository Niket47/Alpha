import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeMain from './HomeMain';
import Transaction from './Transaction';
import AddTrans from './AddTrans';
import Profile from './Profile';
import Budget from './Budget';
import Icons from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const navigation = useNavigation();
  const [opened, setOpened] = useState(false);

  const OpenMenu = () => {
    setOpened(!opened);
    // Alert.alert('image clicked');
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          bottom: 25,
          right: 20,
          left: 20,
          elevation: 2,
          borderRadius: 15,
        },
      }}>
      <Tab.Screen
        name="Home1"
        component={HomeMain}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../../../src/assets/icons/home.png')}
                style={{ tintColor: tabInfo.focused ? '#7F3DFF' : '#C6C6C6' }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../../../src/assets/icons/Transaction.png')}
                style={{ tintColor: tabInfo.focused ? '#7F3DFF' : '#C6C6C6' }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="AddTrans"
        component={AddTrans}
        options={{
          tabBarLabel: 'AddData',
          tabBarIcon: ({ size, color, focused }) => (
            <View style={styles.tabicon}>
              {opened ? (
                <View style={styles.Touchable}>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Income')}>
                    <View style={styles.Income}>
                      <Image
                        style={styles.TouchableImage}
                        source={require('../../assets/icons/income.png')}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Transfer')}>
                    <View style={styles.Transaction}>
                      <Image
                        style={styles.TouchableImage}
                        source={require('../../assets/icons/expense.png')}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Expense')}>
                    <View style={styles.Expense}>
                      <Image
                        style={styles.TouchableImage}
                        source={require('../../assets/icons/exchange.png')}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              ) : null}

              <Pressable onPress={OpenMenu}>
                <View
                  style={{
                    backgroundColor: '#7F3DFF',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                    padding: 15,
                  }}>
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      resizeMode: 'cover',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    source={require('../../assets/icons/close-plus.png')}
                    //   source={
                    //     focused
                    //       ? require('../../assets/icons/close-plus.png')
                    //       : require('../../assets/icons/close.png')
                    //   }
                  />
                </View>
              </Pressable>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Budget"
        component={Budget}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../../../src/assets/icons/pie-chart.png')}
                style={{ tintColor: tabInfo.focused ? '#7F3DFF' : '#C6C6C6' }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('../../../src/assets/icons/user.png')}
                style={{ tintColor: tabInfo.focused ? '#7F3DFF' : '#C6C6C6' }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabicon: {
    marginTop: -80,
    // top: -27,
    alignItems: 'center',
  },
  TouchableImage: {
    width: 35,
    height: 35,
    backgroundColor: '#7F3DFF',
    borderRadius: 50,
  },
  Touchable: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Expense: {
    position: 'absolute',
    left: 50,
    backgroundColor: '#7F3DFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
  },
  Transaction: {
    position: 'absolute',
    right: 50,
    backgroundColor: '#7F3DFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
  },
  Income: {
    position: 'absolute',
    top: -80,
    backgroundColor: '#7F3DFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
  },
});
export default BottomNav;
