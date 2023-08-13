import { View, Text, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';
import IconBtn from '../Components/IconBtn';
import { GlobalStyles } from '../constants/Styles';
import CxButton from '../Components/CxButton';
import ExpenseForm from '../ManageExpenses/ExpenseForm';
import { useDispatch } from 'react-redux';
import { addExpense } from '../Redux/ExpesnseSlice';

const ManageExpense = ({ route, navigation }) => {
  const editdexpenseid = route.params?.expenseId;
  const isEditing = !!editdexpenseid;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'ADD Expense',
    });
  }, [navigation, isEditing]);

  const ondeletehandler = () => {
    navigation.goBack();
  };
  const cancelhandler = () => {
    navigation.goBack();
  };
  const Confirmhandler = expenseData => {
    navigation.goBack();
    // dispatch(addExpense(expenseData));
    console.log(expenseData, 'Confirmhandler===>');
  };
  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelhandler}
        onSubmit={Confirmhandler}
        submitbtnlabel={isEditing ? 'Update' : 'add'}
      />
      {/* <View style={styles.buttons}>
        <CxButton
          style={styles.CxButton}
          mode="flat"
          onbtnpress={cancelhandler}>
          Cancel
        </CxButton>
        <CxButton style={styles.CxButton} onbtnpress={Confirmhandler}>
          {isEditing ? 'Update' : 'add'}
        </CxButton>
      </View> */}

      {isEditing && (
        <View style={styles.deletecon}>
          <IconBtn
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onpress={ondeletehandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  deletecon: {
    marginTop: 16,
    paddingTop: 8,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primary200,
  },
  CxButton: {
    minWidth: 150,
  },
});
