import { useContext } from 'react';
import { UserPreferencesContext } from './UserPreferencesContext.jsx';

export const ThemeSelector = () => {
  const { state, dispatch } = useContext(UserPreferencesContext);

  return (
    <div>
      <h2>Choose theme</h2>
      <button
        onClick={() =>
          dispatch({
            type: 'SET_THEME',
            theme: 'light',
          })
        }
      >
        Light
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'SET_THEME',
            theme: 'dark',
          })
        }
      >
        Dark
      </button>
    </div>
  );
};
