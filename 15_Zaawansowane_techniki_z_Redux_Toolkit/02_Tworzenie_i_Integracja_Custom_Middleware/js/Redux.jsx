import { configureStore, createSlice } from '@reduxjs/toolkit';
import { loggerMiddleware } from './loggerMiddleware.js';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {},
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});
export const { increment, decrement } = counterSlice.actions;

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});
