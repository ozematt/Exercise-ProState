import React from 'react';
import { createRoot } from 'react-dom/client';
import { LanguageSwitcher } from './LanguageSwitcher';
import { LanguageProvider } from './LanguageProvider';

const App = () => (
  <LanguageProvider>
    <LanguageSwitcher />
  </LanguageProvider>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
