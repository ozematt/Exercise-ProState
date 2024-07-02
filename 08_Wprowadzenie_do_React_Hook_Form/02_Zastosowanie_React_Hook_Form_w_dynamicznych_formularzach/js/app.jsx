import React from 'react';
import { createRoot } from 'react-dom/client';
import { Recipe } from './Recipe';

const App = () => <Recipe />;

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
