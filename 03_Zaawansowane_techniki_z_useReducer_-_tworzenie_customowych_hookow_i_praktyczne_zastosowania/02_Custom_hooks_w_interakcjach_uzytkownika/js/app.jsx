import React from 'react';
import { createRoot } from 'react-dom/client';
import { Gallery } from './Gallery';
import '../css/style.css';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Gallery />);
