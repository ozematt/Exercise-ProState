import { configureStore, createSelector, createSlice } from '@reduxjs/toolkit';
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

export const { addTask, removeTask, updateTask, toggleTask } = taskSlice.actions;

export const { selectAll: selectAllTasks, selectById: selectTaskById } = taskAdepter.getSelectors(
  (state) => state.tasks
);

export const selectCompletedTasks = createSelector(selectAllTasks, (tasks) => tasks.filter((task) => task.completed));

export const store = configureStore({
  reducers: taskSlice.reducer,
});
