import { configureStore } from '@reduxjs/toolkit';
import { loggerMiddleware } from './loggerMiddleware.js';

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});
