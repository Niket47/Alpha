import { View, StyleSheet } from 'react-native';
import React from 'react';
import ExpenseLists from './ExpenseLists';
import ExpesneSummry from './ExpesneSummry';
import { GlobalStyles } from '../constants/Styles';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2021-12-01'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2022-02-18'),
  },
];

const ExpenseOutput = ({ expenses, expensePeriod }) => {
  return (
    <View style={styles.container}>
      <ExpesneSummry expenses={DUMMY_EXPENSES} periodName={expensePeriod} />
      <ExpenseLists expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 15,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
