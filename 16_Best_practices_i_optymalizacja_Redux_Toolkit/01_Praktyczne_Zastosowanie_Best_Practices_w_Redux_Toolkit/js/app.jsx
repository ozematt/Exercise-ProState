import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Tasks } from './Tasks';
import store from './redux/store.js';

const App = () => (
  <Provider store={store}>
    <Tasks />
  </Provider>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
