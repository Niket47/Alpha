import { createSlice } from '@reduxjs/toolkit';

// initionlstate = {
//   expense: [],
//   status: 'loading',
// };

const ExpenseSlice = createSlice({
  name: 'expenses',
  expense: [],
  status: 'loading',
  reducers: {
    addExpense: () => {},
    DeleteExpense: () => {},
    updateExpense: () => {},
  },
});

export default ExpenseSlice.reducer;
