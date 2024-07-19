import { createContext, useReducer } from 'react';

const FormContext = createContext();

const initialState = {
  name: '',
  surname: '',
  email: '',
  street: '',
  houseNumber: '',
  city: '',
  postalCode: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateField':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(initialState, reducer());
  return (
    <>
      <FormContext.Provider value={{ state, dispatch }}>{children}</FormContext.Provider>
    </>
  );
};
