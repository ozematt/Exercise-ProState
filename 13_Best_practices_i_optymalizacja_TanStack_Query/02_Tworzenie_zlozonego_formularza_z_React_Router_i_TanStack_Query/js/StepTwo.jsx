import { Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useFormContext } from './FormContext.jsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './FormContext.jsx';

export const StepTwo = () => {
  const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });
  const { state } = useFormContext();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
      >
        <h4>Adres:</h4>
        <TextField {...register('street')} type="text" placeholder="Ulica" defaultValue={state.street} />
        <TextField
          {...register('houseNumber')}
          type="text"
          placeholder="Numerdomu/mieszkania"
          defaultValue={state.houseNumber}
        />
        <TextField {...register('city')} type="text" placeholder="Miasto" defaultValue={state.city} />
        <TextField {...register('postalCode')} type="text" placeholder="Kod pocztowy" defaultValue={state.postalCode} />
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
