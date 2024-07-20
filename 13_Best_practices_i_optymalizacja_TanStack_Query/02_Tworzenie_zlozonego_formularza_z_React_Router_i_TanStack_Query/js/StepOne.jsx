import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useFormContext } from './FormContext.jsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './FormContext.jsx';

export const StepOne = () => {
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
        <h4>Dane Osobowe:</h4>
        <TextField {...register('name')} type="text" placeholder="Imię" defaultValue={state.name} />
        <TextField {...register('surname')} type="text" placeholder="Nazwisko" defaultValue={state.surname} />
        <TextField {...register('email')} type="email" placeholder="Email" defaultValue={state.email} />
        <Link to="/steptwo">
          <Button type="submit">Dalej</Button>
        </Link>
      </form>
    </>
  );
};
