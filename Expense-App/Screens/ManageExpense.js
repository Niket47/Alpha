import { View, Text, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';
import IconBtn from '../Components/IconBtn';
import { GlobalStyles } from '../constants/Styles';
import CxButton from '../Components/CxButton';

const ManageExpense = ({ route, navigation }) => {
  const editdexpenseid = route.params?.expenseId;
  const isEditing = !!editdexpenseid;

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
  const Confirmhandler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <CxButton
          style={styles.CxButton}
          mode="flat"
          onbtnpress={cancelhandler}>
          Cancel
        </CxButton>
        <CxButton style={styles.CxButton} onbtnpress={Confirmhandler}>
          {isEditing ? 'Update' : 'add'}
        </CxButton>
      </View>

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
