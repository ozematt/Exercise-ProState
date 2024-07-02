export const ThemedComponent = () => {
  // Użyj hooka useTheme do pobrania aktualnego motywu i funkcji do jego zmiany
  const [theme, toggleTheme] = ['light', () => {}];

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      Aktywny motyw: {theme}
      <button onClick={toggleTheme}>Zmień motyw</button>
    </div>
  );
};
