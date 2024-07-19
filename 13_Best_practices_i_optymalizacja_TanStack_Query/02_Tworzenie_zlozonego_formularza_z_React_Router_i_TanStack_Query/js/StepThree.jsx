import { Button } from '@mui/material';
import { useFormContext } from './FormContext.jsx';

export const StepThree = () => {
  const { state, handleSubmit } = useFormContext();
  return (
    <>
      <h4>Podsumowanie i potwierdzenie:</h4>
      <div>Dane Osobowe:</div>
      <div>Adres:</div>
      <Button>Edytuj</Button>
      <Button>Wyślij</Button>
    </>
  );
};
