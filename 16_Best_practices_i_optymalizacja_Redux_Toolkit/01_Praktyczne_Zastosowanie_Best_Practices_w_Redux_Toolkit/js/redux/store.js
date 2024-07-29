import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createEntityAdapter } from '@reduxjs/toolkit';

const taskAdepter = createEntityAdapter({
  sortComparer: (a, b) => b.completed - a.completed,
});

const initialState = taskSlice.getInitialState();

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: taskAdepter.addOne,
    removeTask: taskAdepter.removeOne,
    updateTask: taskAdepter.updateOne,
    toggleTask: (state, action) => {
      const task = state.entities[action.payload];
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;

export const { selectAll: selectAllTasks } = taskAdepter.getSelectors((state) => state.tasks);

export const store = configureStore({
  reducers: taskSlice.reducer,
});

const selectTasks = (state) => state.tasks;
console.log(selectTasks);

const
