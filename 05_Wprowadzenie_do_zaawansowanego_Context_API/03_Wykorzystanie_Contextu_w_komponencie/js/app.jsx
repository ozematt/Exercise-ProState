import React from 'react';
import { createRoot } from 'react-dom/client';
import { TasksContextProvider } from './TasksContext';
import { AddTask } from './AddTask';
import { Filter } from './Filter';
import { TasksList } from './TasksList';

const App = () => (
  <TasksContextProvider>
    <AddTask />
    <Filter />
    <TasksList />
  </TasksContextProvider>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
