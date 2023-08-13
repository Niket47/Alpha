import { View, Text, Keyboard, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Input from './Input';
import { GlobalStyles } from '../constants/Styles';
import CxButton from '../Components/CxButton';

const ExpenseForm = ({ submitbtnlabel, onSubmit, onCancel }) => {
  const [inputvalues, setInputvalues] = useState({
    amount: '',
    date: '',
    description: '',
  });
  //   const inputchangehandler = (identi, entertext) => {
  //     setInputvalues(currnt => {
  //       return {
  //         ...currnt,
  //         [identi]: entertext,
  //       };
  //     });
  //   };
  const inputchangehandler = (fieldName, entertext) => {
    setInputvalues({
      ...inputvalues,
      [fieldName]: entertext,
    });
  };

  const onSubmithandler = () => {
    const expenseData = {
      amount: +inputvalues.amount,
      date: inputvalues.date,
      description: inputvalues.description,
    };
    console.log(expenseData);
    onSubmit(expenseData);
  };

  return (
    <View>
      <Text style={styles.title}>Your Expense</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Input
          style={styles.rowinput}
          label="Amount"
          TextInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: entertext => inputchangehandler('amount', entertext),
            value: inputvalues.amount,
          }}
        />
        <Input
          style={styles.rowinput}
          label="Date"
          TextInputConfig={{
            maxLength: 10,
            placeholder: 'yyyy-mm-dd',
            onChangeText: entertext => inputchangehandler('date', entertext),
            value: inputvalues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        TextInputConfig={{
          multiline: true,
          onChangeText: entertext =>
            inputchangehandler('description', entertext),
          value: inputvalues.description,
        }}
      />
      <View style={styles.buttons}>
        <CxButton style={styles.CxButton} mode="flat" onbtnpress={onCancel}>
          Cancel
        </CxButton>
        <CxButton style={styles.CxButton} onbtnpress={onSubmithandler}>
          {submitbtnlabel}
        </CxButton>
      </View>
    </View>
  );
};

export default ExpenseForm;
const styles = StyleSheet.create({
  rowinput: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  CxButton: {
    minWidth: 150,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
