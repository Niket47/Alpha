import { View, Text } from 'react-native';
import React, { useState } from 'react';
import ExpenseOutput from '../Components/ExpenseOutput';
import { useSelector } from 'react-redux';

const AllExpense = () => {
  const data = useSelector(state => state.expenses.id);

  return <ExpenseOutput expenses={data} expensePeriod="last" />;
};

export default AllExpense;
