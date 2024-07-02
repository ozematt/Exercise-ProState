import React from 'react';
import { createRoot } from 'react-dom/client';
import { PostsList } from './PostsList';

const App = () => <PostsList />;

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
