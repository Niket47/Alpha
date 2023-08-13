import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Form from '../PassData/Comp/Form';

const HomeScreen = () => {
  const [alldata, SetAlldata] = useState([]);
  
  
  
  
  const confirm = data => {
    console.log(data);
    SetAlldata(data);
    console.log(alldata, '////');
  };
  return (
    <View>
      <Form submit={confirm} />
    </View>
  );
};

export default HomeScreen;
