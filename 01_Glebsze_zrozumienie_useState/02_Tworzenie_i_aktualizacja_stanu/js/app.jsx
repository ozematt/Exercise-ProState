import React from 'react';
import { createRoot } from 'react-dom/client';
import { ShoppingList } from './ShoppingList';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<ShoppingList />);
