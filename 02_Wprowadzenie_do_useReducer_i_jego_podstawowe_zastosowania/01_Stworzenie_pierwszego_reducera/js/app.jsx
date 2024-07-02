import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeSelector } from './ThemeSelector.jsx';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<ThemeSelector />);
