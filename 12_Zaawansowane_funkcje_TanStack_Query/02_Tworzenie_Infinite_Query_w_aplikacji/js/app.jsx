import React from 'react';
import { createRoot } from 'react-dom/client';
import { PhotosGrid } from './PhotosGrid';

const App = () => <PhotosGrid />;

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
