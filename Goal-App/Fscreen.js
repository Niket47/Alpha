import React, { useState } from 'react';
import {
  View,
  Button,
  FlatList,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import GoalList from './Components/GoalList';
import GoalInput from './Components/GoalInput';

const Fscreen = () => {
  const theme = useTheme();
  const [visiblemodal, setVisiblemodal] = useState(false);
  const [goallist, setGoallist] = useState([]);

  const addgoaalhandler = enteredgoal => {
    // console.log(enteredgoal);
    setGoallist(currentgoal => [
      ...currentgoal,
      { text: enteredgoal, id: Math.random().toString() },
    ]);
    console.log('object', goallist);
    closemodal();
  };

  const deletehandler = id => {
    console.log('delet');
    setGoallist(currentgoal => {
      return currentgoal.filter(goal => goal.id !== id);
    });
  };
  const modalhandler = () => {
    setVisiblemodal(true);
  };
  const closemodal = () => {
    setVisiblemodal(false);
  };
  return (
    <>
      <View style={{ paddingHorizontal: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
            marginVertical: 20,
          }}>
          <Button onPress={modalhandler} title="visible modal" />
          <GoalInput
            showmodal={visiblemodal}
            onbtnPress={addgoaalhandler}
            onmodalclose={closemodal}
          />
        </View>
        <ScrollView>
          <FlatList
            data={goallist}
            renderItem={({ item }) => {
              return (
                <GoalList
                  text={item.text}
                  id={item.id}
                  onPressFunction={deletehandler}
                />
              );
            }}
            keyExtractor={item => item.id}
          />
        </ScrollView>
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
