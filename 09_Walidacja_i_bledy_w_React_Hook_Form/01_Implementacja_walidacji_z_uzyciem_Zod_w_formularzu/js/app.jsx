import React from 'react';
import { createRoot } from 'react-dom/client';
import { Order } from './Order';

const App = () => <Order />;

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
