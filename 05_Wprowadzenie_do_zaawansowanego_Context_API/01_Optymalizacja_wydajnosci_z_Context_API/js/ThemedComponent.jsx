import { useTheme } from './ThemeProvider.jsx';

export const ThemedComponent = () => {
  // Użyj hooka useTheme do pobrania aktualnego motywu i funkcji do jego zmiany

  const { theme, toggleTheme } = useTheme();
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      Aktywny motyw: {theme}
      <button onClick={toggleTheme}>Zmień motyw</button>
    </div>
  );
};
