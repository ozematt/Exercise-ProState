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

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});
