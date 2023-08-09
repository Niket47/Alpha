import { View, Text, FlatList } from 'react-native';
import React from 'react';
import ExpenseItems from './ExpenseItems';

const renderExpenseItem = itemData => {
  return <ExpenseItems {...itemData.item} />;
};

const ExpenseLists = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ExpenseLists;
