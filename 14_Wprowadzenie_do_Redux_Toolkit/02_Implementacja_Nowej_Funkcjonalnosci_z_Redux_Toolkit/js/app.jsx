import React from 'react';
import { createRoot } from 'react-dom/client';
import { NotificationsPanel } from './NotificationsPanel';
const App = () => <NotificationsPanel />;

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
