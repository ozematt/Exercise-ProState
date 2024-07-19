import { createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import { useMutation } from '@tanstack/react-query';

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
      return { ...state, [action.field]: action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const memoizedContext = useMemo(() => state, [state]);

  const handleChange = useCallback((e) => {
    dispatch({
      type: 'updateField',
      field: e.target.name,
      value: e.target.value,
    });
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: 'reset',
    });
  });

  const formMutation = useMutation();

  return (
    <>
      <FormContext.Provider value={{ state: memoizedContext, handleChange, handleSubmit }}>
        {children}
      </FormContext.Provider>
    </>
  );
};
export const useFormContext = () => useContext(FormContext);
