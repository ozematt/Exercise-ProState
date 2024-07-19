import { Button } from '@mui/material';
import { useFormContext } from './FormContext.jsx';
import { Link } from 'react-router-dom';

export const StepThree = () => {
  const { state, formMutation } = useFormContext();
  return (
    <>
      <h4>Podsumowanie i potwierdzenie:</h4>
      <div>
        <h5>Dane Osobowe:</h5>
        <p>
          <b>Imię: </b>
          {state.name}
        </p>
        <p>
          <b>Nazwisko: </b>
          {state.surname}
        </p>
        <p>
          <b>Email: </b>
          {state.email}
        </p>
        <Link to="/">
          <Button>Edytuj</Button>
        </Link>
      </div>
      <div>
        <h5>Adres:</h5>
        <p>
          <b>Ulica: </b>
          {state.street}
        </p>
        <p>
          <b>Numer domu: </b>
          {state.houseNumber}
        </p>
        <p>
          <b>Miasto: </b>
          {state.city}
        </p>
        <p>
          <b>Kod pocztowy: </b>
          {state.postalCode}
        </p>
        <Link to="/steptwo">
          <Button>Edytuj</Button>
        </Link>
      </div>
      <Button>Wyślij</Button>
    </>
  );
};
