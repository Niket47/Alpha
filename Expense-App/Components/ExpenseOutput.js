import { View } from 'react-native';
import React from 'react';
import ExpenseLists from './ExpenseLists';
import ExpesneSummry from './ExpesneSummry';

const ExpenseOutput = ({ expense }) => {
  return (
    <View>
      <ExpesneSummry />
      <ExpenseLists />
    </View>
  );
};

export default ExpenseOutput;
