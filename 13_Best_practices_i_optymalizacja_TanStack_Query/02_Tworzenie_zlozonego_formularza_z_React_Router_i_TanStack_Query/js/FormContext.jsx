import { createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
  street: z.string(),
  houseNumber: z.string(),
  city: z.string(),
  postalCode: z.string(),
});

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

const postFormData = async (formData) => {
  try {
    const { data } = await axios.post('http://localhost:3001/formData', formData);
    console.log(data);
  } catch (error) {
    console.error('There has been a problem:', error);
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

  const formMutation = useMutation({
    mutationFn: postFormData,
  });

  return (
    <>
      <FormContext.Provider value={{ state: memoizedContext, handleChange, handleSubmit, formMutation }}>
        {children}
      </FormContext.Provider>
    </>
  );
};
export const useFormContext = () => useContext(FormContext);
