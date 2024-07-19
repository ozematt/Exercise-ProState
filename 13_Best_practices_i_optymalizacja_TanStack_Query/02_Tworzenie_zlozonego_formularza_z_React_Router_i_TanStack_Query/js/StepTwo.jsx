import { Box, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const StepTwo = () => {
  const { register } = useForm();

  return (
    <>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <TextField {...register('street')} type="text" placeholder="Ulica" />
        <TextField {...register('houseNumber')} type="text" placeholder="Numerdomu/mieszkania" />
        <TextField {...register('city')} type="text" placeholder="Miasto" />
        <TextField {...register('postalCode')} type="text" placeholder="Kod pocztowy" />
        <Box>
          <Link style={{ padding: '10px' }} to="/steptwo">
            Wstecz
          </Link>
          <Link style={{ padding: '10px' }} to="/stepthree">
            Dalej
          </Link>
        </Box>
      </form>
    </>
  );
};
