import { Button, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export const StepOne = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const navigate = useNavigate();

  return (
    <>
      <h4>Dane Osobowe:</h4>
      <TextField
        {...register('name')}
        label="Name"
        error={!!errors.name}
        helperText={errors.name?.message}
        type="text"
        placeholder="Imię"
      />
      <TextField
        {...register('surname')}
        label="Surname"
        error={!!errors.surname}
        helperText={errors.surname?.message}
        type="text"
        placeholder="Nazwisko"
      />
      <TextField
        {...register('email')}
        label="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
        type="email"
        placeholder="Email"
      />
      <Button onClick={() => navigate('/steptwo')}>Dalej</Button>
    </>
  );
};
