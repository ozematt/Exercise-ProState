import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useFormContext } from './FormContext.jsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './FormContext.jsx';

export const StepOne = () => {
  const { register } = useForm({ resolver: zodResolver(schema) });
  const { state, handleChange } = useFormContext();
  return (
    <>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h4>Dane Osobowe:</h4>
        <TextField {...register('name')} type="text" placeholder="Imię" value={state.name} onChange={handleChange} />
        <TextField
          {...register('surname')}
          type="text"
          placeholder="Nazwisko"
          value={state.surname}
          onChange={handleChange}
        />
        <TextField
          {...register('email')}
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
        />
        <Link to="/steptwo">
          <Button>Dalej</Button>
        </Link>
      </form>
    </>
  );
};
