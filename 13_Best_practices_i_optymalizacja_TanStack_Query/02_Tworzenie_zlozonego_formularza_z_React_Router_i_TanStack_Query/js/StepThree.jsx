import { Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';

export const StepThree = () => {
  const { getValues, handleSubmit } = useFormContext();
  const navigate = useNavigate();

  return (
    <>
      <h4>Podsumowanie i potwierdzenie:</h4>

      <div>
        <h5>Dane Osobowe:</h5>
        <p>
          <b>Imię: </b>
          {getValues().name}
        </p>
        <p>
          <b>Nazwisko: </b>
          {getValues().surname}
        </p>
        <p>
          <b>Email: </b>
          {getValues().email}
        </p>

        <Button onClick={() => navigate('/')}>Edytuj</Button>
      </div>
      <div>
        <h5>Adres:</h5>
        <p>
          <b>Ulica: </b>
          {getValues().street}
        </p>
        <p>
          <b>Numer domu: </b>
          {getValues().houseNumber}
        </p>
        <p>
          <b>Miasto: </b>
          {getValues().city}
        </p>
        <p>
          <b>Kod pocztowy: </b>
          {getValues().postalCode}
        </p>
      </div>
      <Button onClick={() => navigate('/steptwo')}>Edytuj</Button>

      <Button>Wyślij</Button>
    </>
  );
};
