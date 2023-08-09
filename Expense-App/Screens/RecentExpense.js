import { View, Text } from 'react-native';
import React from 'react';
import ExpenseOutput from '../Components/ExpenseOutput';

const RecentExpense = () => {
  return <ExpenseOutput expensePeriod="last 7 days" />;
};

export default RecentExpense;
