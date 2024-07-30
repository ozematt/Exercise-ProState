import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';

const taskAdepter = createEntityAdapter({
  sortComparer: (a, b) => b.completed - a.completed,
});

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: taskAdepter.getInitialState(),
  // this is how state looks like
  //   "ids": [],
  //   "entities": {},
  reducers: {
    // default fn
    addTask: taskAdepter.addOne,
    removeTask: taskAdepter.removeOne,
    updateTask: taskAdepter.updateOne,
    // toggle task
    toggleTask: (state, action) => {
      const task = state.entities[action.payload];
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

// export reducers
export const { addTask, removeTask, updateTask, toggleTask } = taskSlice.actions;

// get selectors
export const { selectAll: selectAllTasks, selectById: selectTaskById } = taskAdepter.getSelectors(
  (state) => state.tasks
);

/**
 * return all completed tasks
 */
export const selectCompletedTasks = createSelector(selectAllTasks, (tasks) => tasks.filter((task) => task.completed));

/**
 * preferred export
 */
export default taskSlice.reducer;
