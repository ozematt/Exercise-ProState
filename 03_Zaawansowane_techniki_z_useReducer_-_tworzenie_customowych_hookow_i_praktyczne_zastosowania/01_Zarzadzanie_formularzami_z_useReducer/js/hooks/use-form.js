import { useReducer } from 'react';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      // Uzupełnij logikę aktualizacji stanu dla danego pola formularza
      return { ...state, [action.payload.name]: action.payload.value };
    case 'RESET_FORM':
      // Uzupełnij logikę resetowania stanu formularza
      return { ...state }; // Zastąp to odpowiednim kodem
    default:
      throw new Error('Unknown action');
  }
};

export const useForm = (initialValues) => {
  const [formData, dispatch] = useReducer(formReducer, initialValues);

  const handleChange = (name, value) => {
    dispatch({ type: 'UPDATE_FIELD', payload: { name, value } });
  };

  // Zaimplementuj funkcję handleSubmit

  // Dodaj funkcję resetującą formularz
  const resetForm = () => {
    // Dodaj logikę resetowania formularza
  };

  return { formData, handleChange, resetForm };
};
