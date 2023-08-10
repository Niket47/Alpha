import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../constants/Styles';
import DateFormate from './DateFormate';
import { useNavigation } from '@react-navigation/native';

const ExpenseItems = ({ id, description, date, amount }) => {
  const navigation = useNavigation();

  const expensepresshandler = () => {
    // navigation.navigate('ManageExpense');
    navigation.navigate('ManageExpence', {
      screen: 'ManageExpence',
      expenseId: id,
    });
  };

  return (
    <Pressable
      onPress={expensepresshandler}
      style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.Expenseitem}>
        <View>
          <Text style={[styles.textbase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.description}>{DateFormate(date)}</Text>
        </View>
        <View style={styles.amountcont}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItems;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },

  Expenseitem: {
    padding: 12,
    marginVertical: 12,
    backgroundColor: GlobalStyles.colors.primary100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
  },
  textbase: {
    fontSize: 20,
    color: GlobalStyles.colors.primary500,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountcont: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});
