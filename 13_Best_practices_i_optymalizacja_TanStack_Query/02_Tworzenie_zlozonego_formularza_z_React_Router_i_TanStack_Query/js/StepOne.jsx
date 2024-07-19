import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

export const StepOne = () => {
  const { register } = useForm();

  return (
    <>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h4>Dane Osobowe:</h4>
        <TextField {...register('name')} type="text" placeholder="Imię" />
        <TextField {...register('surname')} type="text" placeholder="Nazwisko" />
        <TextField {...register('email')} type="email" placeholder="Email" />
        <Link to="/steptwo">
          <Button>Dalej</Button>
        </Link>
      </form>
    </>
  );
};
