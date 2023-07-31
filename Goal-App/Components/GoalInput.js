import { View, Text, Button, Modal, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

const GoalInput = ({ onbtnPress, showmodal, onmodalclose }) => {
  const [enteredgoal, setEnteredgoal] = useState('');

  const goalinputhandler = enterdtext => {
    setEnteredgoal(enterdtext);
  };
  const btnpresshandler = () => {
    onbtnPress(enteredgoal);
    setEnteredgoal('');
  };

  return (
    <>
      <Modal visible={showmodal} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={styles.textinput}
            label="Text"
            value={enteredgoal}
            onChangeText={goalinputhandler}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{ width: '40%' }}>
              <Button
                title="add goal"
                color="#841584"
                onPress={btnpresshandler}
              />
            </View>
            <View style={{ width: '40%' }}>
              <Button
                title="close modal"
                color="#120a12"
                onPress={onmodalclose}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  textinput: {
    width: '85%',
    marginBottom: 20,
  },
});

export default GoalInput;
