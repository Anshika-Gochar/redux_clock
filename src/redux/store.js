import { configureStore } from '@reduxjs/toolkit';
import clockReducer from './Slices/clockSlice';

const store = configureStore({
  reducer: {
    clock: clockReducer
  }
});

export default store;
