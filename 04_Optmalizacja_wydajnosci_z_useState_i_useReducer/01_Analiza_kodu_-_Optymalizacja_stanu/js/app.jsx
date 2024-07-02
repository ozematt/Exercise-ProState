import React from 'react';
import { createRoot } from 'react-dom/client';
import { ProductCatalog } from './ProductCatalog';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<ProductCatalog />);
