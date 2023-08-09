import { View, Text } from 'react-native';
import React from 'react';
import ExpenseOutput from '../Components/ExpenseOutput';

const AllExpense = () => {
  return <ExpenseOutput expensePeriod="last" />;
};

export default AllExpense;
