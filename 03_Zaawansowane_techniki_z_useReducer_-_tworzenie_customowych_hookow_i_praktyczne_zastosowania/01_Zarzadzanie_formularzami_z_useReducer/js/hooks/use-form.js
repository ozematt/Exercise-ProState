import { useReducer } from 'react';

const ActionTypes = {
  UPDATE_FIELD: 'updateField',
  RESET_FORM: 'resetForm',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_FIELD:
      return { ...state, [action.payload.name]: action.payload.value };
    case ActionTypes.RESET_FORM:
      return action.payload; // reset state
    default:
      throw new Error('Unknown action');
  }
};

export const useForm = (initialValues) => {
  const [formData, dispatch] = useReducer(formReducer, initialValues);

  const handleChange = (name, value) => {
    dispatch({
      type: ActionTypes.UPDATE_FIELD,
      payload: { name, value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const resetForm = () => {
    dispatch({
      type: ActionTypes.RESET_FORM,
      payload: initialValues,
    });
  };

  return { formData, handleChange, handleSubmit, resetForm };
};
