import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button, Divider, TextInput } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const Fscreen = () => {
  const theme = useTheme();
  const [enteredgoal, setEnteredgoal] = useState('');
  const [goallist, setGoallist] = useState([]);
  const goalinputhandler = enterdtext => {
    setEnteredgoal(enterdtext);
  };
  const addgoaalhandler = () => {
    // console.log(enteredgoal);
    setGoallist(currentgoal => [...currentgoal, enteredgoal]);
    console.log('object', goallist);
    setEnteredgoal('');
  };
  return (
    <>
      <View style={{ paddingHorizontal: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginVertical: 20,
          }}>
          <TextInput
            style={styles.textinput}
            label="Text"
            value={enteredgoal}
            onChangeText={goalinputhandler}
          />
          <Button mode="contained" onPress={addgoaalhandler}>
            Add goal
          </Button>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
          }}>
          <ScrollView>
            {goallist.map((items, index) => {
              return (
                <View
                  style={{
                    marginVertical: 5,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    backgroundColor: '#c2c2c2',
                    borderRadius: 10,
                  }}>
                  <Text style={{ fontSize: 20 }} key={index}>
                    {items}
                  </Text>
                  <Divider theme={{ colors: { primary: 'green' } }} />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textinput: {
    width: '70%',
  },
});
export default Fscreen;
