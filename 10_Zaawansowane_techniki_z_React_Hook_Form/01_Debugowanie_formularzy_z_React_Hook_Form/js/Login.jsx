import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  userName: z.string().min(1),
  email: z.string().email(),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Username"
        {...register('userName')}
        error={!!errors?.userName}
        helperText={errors?.userName && 'Username is required'}
      />
      <TextField
        label="Email"
        {...register('email')}
        error={!!errors?.email}
        helperText={errors?.email && 'Invalid email format'}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
