import { configureStore } from '@reduxjs/toolkit';
import ExpesnseSlice from './ExpesnseSlice';

const sotre = configureStore({
  reducer: {
    app: ExpesnseSlice,
  },
});

export default sotre;
