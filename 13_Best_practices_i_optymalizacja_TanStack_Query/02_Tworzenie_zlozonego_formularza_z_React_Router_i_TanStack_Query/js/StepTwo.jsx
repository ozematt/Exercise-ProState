import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './FormContext.jsx';

export const StepTwo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext({ resolver: zodResolver(schema) });
  const navigate = useNavigate();

  return (
    <>
      <h4>Adres:</h4>
      <TextField
        {...register('street')}
        label="Street"
        error={!!errors.street}
        helperText={errors.street?.message}
        type="text"
        placeholder="Ulica"
      />
      <TextField {...register('houseNumber')} type="text" placeholder="Numerdomu/mieszkania" />
      <TextField
        {...register('city')}
        label="City"
        error={!!errors.city}
        helperText={errors.city?.message}
        type="text"
        placeholder="Miasto"
      />
      <TextField
        {...register('postalCode')}
        label="Postal Code"
        error={!!errors.postalCode}
        helperText={errors.postalCode?.message}
        type="text"
        placeholder="Kod pocztowy"
      />
      <Box>
        <Button onClick={navigate('/steptwo')}>Wstecz</Button>
        <Button onClick={navigate('/stepthree')}>Dalej</Button>
      </Box>
    </>
  );
};
