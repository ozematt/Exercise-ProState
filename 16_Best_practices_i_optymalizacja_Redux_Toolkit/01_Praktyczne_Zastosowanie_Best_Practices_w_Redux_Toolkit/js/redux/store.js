import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

export default configureStore({
  reducer: {
    //looks like that because we export taskSlice.reducer
    tasks: tasksReducer,
  },
});
