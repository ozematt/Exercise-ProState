import React from 'react';
import { createRoot } from 'react-dom/client';
import { TasksContext } from './TasksContext';
import { AddTask } from './AddTask';
import { Filter } from './Filter';
import { TasksList } from './TasksList';

const App = () => (
  <TasksContext>
    <AddTask />
    <Filter />
    <TasksList />
  </TasksContext>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
