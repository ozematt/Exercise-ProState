import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Uzupełnij kod: Utwórz stan dla motywu (theme) z domyślną wartością 'light'
  const theme = 'light';

  // Uzupełnij kod: Stwórz funkcję toggleTheme, która zmienia wartość theme na 'dark' lub 'light'
  const toggleTheme = () => {};

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
