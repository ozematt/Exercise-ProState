import { createContext, useReducer } from 'react';

const UserPreferencesContext = createContext();

const initialState = { theme: 'light', language: 'en', notifications: true };

const UserPreferencesProvider = ({ children }) => {
  const [state, dispatch] = useReducer();
};
