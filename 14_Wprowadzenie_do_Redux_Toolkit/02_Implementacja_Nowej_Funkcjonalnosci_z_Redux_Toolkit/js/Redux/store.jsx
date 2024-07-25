import { configureStore } from '@reduxjs/toolkit';
import { notificationsSlice } from './actions.jsx';

export const store = configureStore({
  reducer: { notification: notificationsSlice.reducer },
});
