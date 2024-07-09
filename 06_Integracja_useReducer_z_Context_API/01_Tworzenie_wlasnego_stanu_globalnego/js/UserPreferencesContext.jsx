import { createContext, useReducer } from 'react';

const UserPreferencesContext = createContext();

const initialState = { theme: 'light', language: 'en', notifications: true };

const ActionsTypes = {
  SET_THEME: 'SET_THEME',
  SET_LANGUAGE: 'SET_LANGUAGE',
  TOGGLE_NOTIFICATION: 'TOGGLE_NOTIFICATION',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionsTypes.SET_THEME:
      return { ...state, theme: action.theme };

    case ActionsTypes.SET_LANGUAGE:
      return { ...state, language: action.language };

    case ActionsTypes.TOGGLE_NOTIFICATION:
      return { ...state, notifications: action.notification };
  }
};

export const UserPreferencesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserPreferencesContext.Provider value={{ state, dispatch }}>{children}</UserPreferencesContext.Provider>
    </>
  );
};
