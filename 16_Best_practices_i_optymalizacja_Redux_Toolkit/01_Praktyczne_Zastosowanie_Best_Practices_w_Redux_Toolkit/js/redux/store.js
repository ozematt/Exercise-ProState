import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createEntityAdapter } from '@reduxjs/toolkit';

const taskAdepter = createEntityAdapter({
  selectId: (task) => task.id,
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: 0,
  reducers: {
    addTask: taskAdepter.addOne,
    removeTask: taskAdepter.removeOne,
    updateTask: taskAdepter.updateOne,
  },
});

const store = configureStore({
  reducers: taskSlice.reducer,
});

export default store;
