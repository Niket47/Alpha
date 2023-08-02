import { View, Text, Alert, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import PrimaryBtn from '../Components/PrimaryBtn';

const StartGameScren = ({ forPickNumber }) => {
  const [entervalue, setEntervalue] = useState('');

  const NumberInputhandler = entertext => {
    setEntervalue(entertext);
  };

  const onConfirmhandler = () => {
    console.log(entervalue);
    const choosenumber = Number(entervalue);
    if (isNaN(choosenumber) || choosenumber <= 0 || choosenumber > 99) {
      Alert.alert('Invalid Number', 'Number only 0 to 99', [
        { text: 'OK', onPress: onResethandler },
      ]);
      return;
    }
    console.log(choosenumber);
    forPickNumber(choosenumber);
    setEntervalue('');
  };

  const onResethandler = () => {
    setEntervalue('');
  };

  return (
    <View style={styles.mainCont}>
      <TextInput
        style={styles.TextInputCont}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        value={entervalue}
        onChangeText={NumberInputhandler}
      />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <PrimaryBtn onCXbtnPress={onResethandler}>Reset</PrimaryBtn>
        </View>
        <View style={{ flex: 1 }}>
          <PrimaryBtn onCXbtnPress={onConfirmhandler}>Confirm</PrimaryBtn>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainCont: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#72063c',
    elevation: 4,
    alignItems: 'center',
  },
  TextInputCont: {
    fontSize: 32,
    height: 70,
    width: 50,
    textAlign: 'center',
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
  },
});
export default StartGameScren;
