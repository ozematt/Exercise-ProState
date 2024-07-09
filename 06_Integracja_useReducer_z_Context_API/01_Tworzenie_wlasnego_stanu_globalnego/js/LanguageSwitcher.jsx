import { useContext } from 'react';
import { UserPreferencesContext } from './UserPreferencesContext.jsx';

export const LanguageSwitcher = () => {
  const { dispatch } = useContext(UserPreferencesContext);

  return (
    <div>
      <h2>Language</h2>
      <select name="language" onChange={(e) => dispatch({ type: 'SET_LANGUAGE', language: e.target.value })}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </select>
    </div>
  );
};
