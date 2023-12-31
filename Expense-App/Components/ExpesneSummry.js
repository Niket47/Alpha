import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../constants/Styles';

const ExpesneSummry = ({ expenses, periodName }) => {
  // const expensesum = expenses.reduce((sum, expense) => {
  //   return sum + expense.amount;
  // }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      {/* <Text style={styles.sum}>${expensesum.toFixed(2)}</Text> */}
      <Text style={styles.sum}>${expenses}</Text>
    </View>
  );
};

export default ExpesneSummry;
const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 22,
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
  sum: {
    fontSize: 16,
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});
