import React, { createContext, useContext, useState } from 'react';
import { dark, light } from '@mui/material/styles/createPalette.js';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Uzupełnij kod: Utwórz stan dla motywu (theme) z domyślną wartością 'light'
  const [theme, setTheme] = useState('light');

  // Uzupełnij kod: Stwórz funkcję toggleTheme, która zmienia wartość theme na 'dark' lub 'light'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
