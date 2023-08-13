const { createSlice } = require('@reduxjs/toolkit');

const EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: '2021-12-19',
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: '2022-01-05',
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.59,
    date: '2022-02-18',
  },
];

const initialState = [];

const expensesSlice = createSlice({
  name: 'expensedata',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    DeleteExpense: (state, action) => {
      state.expense = action.payload;

      const { id } = action.payload;

      if (id) {
        state.expense = state.expense.filter(ele => ele.id !== id);
      }
      console.log('paylod', action.payload);
    },
    updateExpense: (state, action) => {
      state.expense = action.payload;
    },
  },
});

export const { addExpense, DeleteExpense, updateExpense } =
  expensesSlice.actions;
export default expensesSlice.reducer;
