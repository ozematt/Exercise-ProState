import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';

const taskAdepter = createEntityAdapter({
  sortComparer: (a, b) => b.completed - a.completed,
});

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: taskAdepter.getInitialState(),
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

export default taskSlice.reducer;
