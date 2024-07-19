import { Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useFormContext } from './FormContext.jsx';

export const StepTwo = () => {
  const { register } = useForm();
  const { state, handleChange } = useFormContext();

  return (
    <>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h4>Adres:</h4>
        <TextField
          {...register('street')}
          type="text"
          placeholder="Ulica"
          value={state.street}
          onChange={handleChange}
        />
        <TextField
          {...register('houseNumber')}
          type="text"
          placeholder="Numerdomu/mieszkania"
          value={state.houseNumber}
          onChange={handleChange}
        />
        <TextField {...register('city')} type="text" placeholder="Miasto" value={state.city} onChange={handleChange} />
        <TextField
          {...register('postalCode')}
          type="text"
          placeholder="Kod pocztowy"
          value={state.postalCode}
          onChange={handleChange}
        />
        <Box>
          <Link to="/steptwo">
            <Button>Wstecz</Button>
          </Link>
          <Link to="/stepthree">
            <Button>Dalej</Button>
          </Link>
        </Box>
      </form>
    </>
  );
};
