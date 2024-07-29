import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createEntityAdapter } from '@reduxjs/toolkit';

const taskAdepter = createEntityAdapter({
  selectId: (task) => task.id,
});

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: taskAdepter.addOne,
    removeTask: taskAdepter.removeOne,
    updateTask: taskAdepter.updateOne,
  },
});

const selectTasks = (state) => state.tasks;
console.log(selectTasks());
export const { addTask, removeTask, updateTask } = taskSlice.actions;

export const { selectAll: selectAllTasks } = taskAdepter.getSelectors((state) => state.tasks);

export const store = configureStore({
  reducers: taskSlice.reducer,
});

// git add .
// git commit -m "
