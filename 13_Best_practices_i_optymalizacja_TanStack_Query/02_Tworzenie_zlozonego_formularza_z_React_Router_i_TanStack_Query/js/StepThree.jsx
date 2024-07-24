import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useFormContext } from './FormContext';

//handle post data on JSON sever
const sendFormData = async (formData) => {
  const response = await fetch('http://localhost:3001/formData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to submit form');
  }

  return response.json();
};

export const StepThree = () => {
  //DATA
  //navigate
  const navigate = useNavigate();
  //data mutation
  const mutation = useMutation({ mutationFn: sendFormData });
  //use Context
  const { clearData, data } = useFormContext();
  //mutate data form state context, when ok -> clear form, show alert and navigate
  const handleSubmit = () => {
    mutation.mutate(data, {
      onSuccess: () => {
        clearData();
        alert('Form submitted successfully');
        navigate('/');
      },
    });
  };
  //validations on different state
  if (mutation.isLoading) return <div>Submitting...</div>;
  if (mutation.isError) return <div>Error: {mutation.error.message}</div>;
  ////UI
  return (
    <div>
      <h2>Podsumowanie</h2>
      <div>
        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>
      {/*Object.entries(data): Konwertuje obiekt data na tablicę par [klucz, wartość].
      Każdy element tej tablicy jest również tablicą zawierającą dwa elementy: klucz i wartość.
      .map(([key, value]) => (...)): Iteruje przez każdą parę [key, value] z tablicy wynikowej Object.entries(data).
       Dla każdej pary wykonuje funkcję strzałkową ([key, value]) => (...).*/}
      <button type="button" onClick={() => navigate('/personal-info')}>
        Wstecz
      </button>
      <button onClick={handleSubmit}>Wyślij</button>
    </div>
  );
};
