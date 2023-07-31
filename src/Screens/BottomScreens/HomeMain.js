import { View, Text, SafeAreaView, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import { IconButton } from 'react-native-paper';

const HomeMain = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
        <IconButton
          icon="reorder-horizontal"
          iconColor="#FFF"
          containerColor="#7F3DFF"
          size={30}
          onPress={() => navigation.openDrawer()}
        />
        <Text>HomeMain</Text>
      </SafeAreaView>
    </>
  );
};

export default HomeMain;
