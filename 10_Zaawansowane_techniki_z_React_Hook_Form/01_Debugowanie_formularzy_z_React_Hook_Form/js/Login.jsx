import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

export const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Username"
        {...register('userName', { required: true })}
        error={errors?.userName}
        helperText={errors?.userName ? 'Username is required' : ''}
      />
      <TextField
        label="Email"
        {...register('email', { pattern: /^\S+@\S+.\S+$/ })}
        error={errors?.email}
        helperText={errors?.email ? 'Invalid email format' : ''}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
