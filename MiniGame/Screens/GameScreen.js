import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Title from '../Components/Title';
import PrimaryBtn from '../Components/PrimaryBtn';

const GameScreen = ({ nbrpicked }) => {
  const [nbr, setNbr] = useState(nbrpicked);
  // setNbr(nbrpicked);
  return (
    <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 20 }}>
      <View>
        <Title>Opp guess</Title>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 30, color: '#ddb52f' }}>{nbr}</Text>
        </View>
      </View>
      <View>
        <Text>higher or nbr</Text>
        <PrimaryBtn>+</PrimaryBtn>
        <PrimaryBtn>-</PrimaryBtn>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default GameScreen;
