import { configureStore } from '@reduxjs/toolkit';
import expensesSlice from './ExpesnseSlice';

const mystore = configureStore({
  reducer: {
    expenses: expensesSlice,
  },
});

export default mystore;
