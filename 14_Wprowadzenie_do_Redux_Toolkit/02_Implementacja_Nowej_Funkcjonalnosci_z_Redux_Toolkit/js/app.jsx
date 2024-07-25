import React from 'react';
import { createRoot } from 'react-dom/client';
import { NotificationsPanel } from './NotificationsPanel';

import { store } from './Redux/store.jsx';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <NotificationsPanel />
  </Provider>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
