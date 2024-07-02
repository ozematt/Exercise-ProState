import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemedComponent } from './ThemedComponent';
import { ThemeProvider } from './ThemeProvider';

const App = () => (
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
