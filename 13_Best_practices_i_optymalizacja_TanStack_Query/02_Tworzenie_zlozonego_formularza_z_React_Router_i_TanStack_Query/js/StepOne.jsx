import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';

export const StepOne = () => {
  const { register } = useForm();

  return (
    <>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <TextField {...register('name')} type="text" placeholder="Imię" />
        <TextField {...register('surname')} type="text" placeholder="Nazwisko" />
        <TextField {...register('email')} type="email" placeholder="Email" />
        <Link to="/steptwo">Dalej</Link>
      </form>
    </>
  );
};
