import { configureStore } from '@reduxjs/toolkit';
import { createEntityAdapter } from '@reduxjs/toolkit';

const taskAdepter = createEntityAdapter({
  selectId: (task) => task.id,
});

const store = configureStore({});

export default store;
