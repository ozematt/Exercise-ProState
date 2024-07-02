import React from 'react';
import { createRoot } from 'react-dom/client';
import { Tasks } from './Tasks';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Tasks />);
